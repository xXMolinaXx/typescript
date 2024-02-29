import request from 'supertest'
import app from '../app'
import DatabaseConnection from '../database'
import { CONFIGURATION } from '../common/config/server.conf'
describe('GET /product', () => {
  let db = new DatabaseConnection(
    'base de datos chat honduras',
    CONFIGURATION.DATABASE_URL
  )
  beforeAll(() => {
    db.conectDataBase().catch(error => {
      console.log(error)
    })
  })
  afterAll(async ()=>{
    await db.closeConection()
  })
  test('get product', async () => {
    const response = await request(app).post('/product/findProducts').send({
      skip: 0, limit: 20, searchText: ''
    })
    expect(response.status).toBe(200)
  })
})
