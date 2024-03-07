import request from 'supertest'
import app from '../app'
import DatabaseConnection from '../database'
import { CONFIGURATION } from '../common/config/server.conf'
import { server } from '../socket.io'
describe('Product Api test', () => {
  const db = new DatabaseConnection(
    'base de datos chat honduras',
    CONFIGURATION.DATABASE_URL
  )
  beforeAll(() => {
    db.conectDataBase().catch(error => {
      console.log(error)
    })
  })
  afterAll(async () => {
    await db.closeConection()
    server.close()
  })
  test('get product', async () => {
    const response = await request(app).post('/product/findProducts').send({
      skip: 0, limit: 20, searchText: ''
    })
    const response2 = await request(app).post('/product/findProducts').send({
      skip: 0, limit: 20
    })
    const response3 = await request(app).post('/product/findProducts').send({
      searchText: ''
    })
    const response4 = await request(app).post('/product/findProducts').send({
      skip: 0, limit: 20, searchText: 'Buscando'
    })
    const response5 = await request(app).post('/product/findProducts').send()
    expect(response.body.success).toBe(true)
    expect(response2.body.success).toBe(false)
    expect(response3.body.success).toBe(true)
    expect(response4.body.success).toBe(true)
    expect(response5.body.success).toBe(false)
  })
})
