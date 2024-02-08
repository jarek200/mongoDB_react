import Product from '../models/product.js'

// Get all products -> /api/v1/products
export const getProducts = async (req, res) => {
  res.status(200).json({ message: 'Get all products' })
}

// Crate a new product -> /api/v1/admin/products
export const newProduct = async (req, res) => {
  const product = await Product.create(req.body)

  res.status(200).json({
    product,
  })
}
