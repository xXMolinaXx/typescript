/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { type category_schema } from '../common/interface/category.interface'
import CategoryService from '../services/category.service'
import { checkRoles } from '../middleware/auth.handler'
import passport from 'passport'
const router = express.Router()
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res) => {
    try {
      const { description, name }: category_schema = req.body
      await CategoryService.insertCategory({ description, name })
      res.json({ sucess: true, message: 'Categoria creada' })
    } catch (error: any) {
      res.json({ sucess: false, message: 'Error al crear categoria' })
    }
    res.end()
  }
)
router.get(
  '/find',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'client'),
  async (req, res) => {
    try {
      await CategoryService.findCategory()
      res.json({
        success: true,
        message: '',
        data: await CategoryService.findCategory()
      })
    } catch (error) {
      res.json({
        success: false,
        message: 'Error al buscar categorias'
      })
    }
    res.end()
  }
)

router.put(
  '',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res) => {
    try {
      await CategoryService.updateCategory(req.body, req.body._id)
      res.json({
        success: true,
        message: 'Categoria actualizada con exito'
      })
    } catch (error) {
      res.json({
        success: false,
        message: 'Error al actualizar'
      })
    }
    res.end()
  }
)
router.put(
  '',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res) => {
    try {
      await CategoryService.deleteCategory(req.body._id)
      res.json({
        success: true,
        message: 'Categoria eliminada'
      })
    } catch (error) {
      res.json({
        success: false,
        message: 'Error al eliminar'
      })
    }
    res.end()
  }
)
export default router
