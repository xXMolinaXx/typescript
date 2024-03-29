/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
import { checkRoles } from '../middleware/auth.handler'
import billService from '../services/bill.service'
import passport from 'passport'
import { type IBill } from '../common/interface/bill.interface'
const router = express.Router()

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'client'),
  async (req, res) => {
    try {
      const newDocument = req.body as IBill
      await billService.create(newDocument)
      res.json({ sucess: true, message: 'Tu compra a sido realizada' })
    } catch (error: any) {
      console.log(error)
      res.json({ sucess: false, message: 'Error al generar tu compra' })
    }
    res.end()
  }
)

router.post(
  '/findAll',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res) => {
    try {
      const { skip, limit, searchText } = req.body
      const bills = await billService.findAll(skip, limit, searchText)
      res.json({ sucess: true, message: '', data: bills })
    } catch (error: any) {
      res.json({ sucess: false, message: 'Error al cargar las compras' })
    }
    res.end()
  }
)

router.post(
  '/findAllUser',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'client'),
  async (req, res) => {
    try {
      const { skip, limit, userId } = req.body
      const bills = await billService.findByUser(skip, limit, userId)
      res.json({ sucess: true, message: 'Tu compra a sido realizada', data: bills })
    } catch (error: any) {
      console.log(error)
      res.json({ sucess: false, message: 'Error al cargar las compras' })
    }
    res.end()
  }
)
export default router
