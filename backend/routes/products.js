import express from 'express'
import { getProducts, newProduct, getProductDetails, updateProduct, deleteProduct } from '../controllers/productControllers.js'
import { isAuthenticatedUser, autorizeRoles } from '../middlewares/auth.js'

const router = express.Router()

router.route('/products').get(isAuthenticatedUser, autorizeRoles('admin'), getProducts)
router.route('/products/:id').get(getProductDetails)
router.route('/admin/products').post(newProduct)
router.route('/admin/products/:id').put(updateProduct)
router.route('/admin/products/:id').delete(deleteProduct)

export default router
