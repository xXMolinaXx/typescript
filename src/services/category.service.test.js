import Category from './category.service'
jest.mock('../models/category.schema', () => jest.fn().mockImplementation(() => CategorySchema))
const CategorySchema = {
  find: () => [
    1, 2
  ]
}

describe('test  for category service', () => {
  test('return categories', async () => {
    // Arrange
    // Act
    console.log('**', Category)
    const categories = await Category.findCategory() // const categories = [1,2]
    console.log(categories)
    // Assert
    expect(categories.length).toEqual(2)
  })
})
