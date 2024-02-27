import { jwtGenerator } from './jwt'

describe('Prueba de jwt', () => {
  // beforeEach(() => {
  //   console.log('hola beforeEachse ejecuta antes de cada prueba')
  // })
  // beforeAll(() => {
  //   console.log('hola beforeAll, se ejecuta siempre antes de todas las pruebas')
  // })
  // existe afterall
  // afterEach(() => {
  //   console.log('corre despues de todas las pruebas')
  // })
  test('generate a jwt', () => {
    expect(jwtGenerator({ rol: 'admin', userId: '123123' })).toMatch(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gm)
  })
})
