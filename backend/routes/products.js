import express from 'express'
import { getProducts, newProduct, getProductDetails, updateProduct, deleteProduct } from '../controllers/productControllers.js'
import { isAuthenticatedUser, autorizeRoles } from '../middlewares/auth.js'

const router = express.Router()

router.route('/products').get(getProducts)
router.route('/products/:id').get(getProductDetails)
router.route('/admin/products').post(isAuthenticatedUser, autorizeRoles('admin'), newProduct)
router.route('/admin/products/:id').put(isAuthenticatedUser, autorizeRoles('admin'), updateProduct)
router.route('/admin/products/:id').delete(isAuthenticatedUser, autorizeRoles('admin'), deleteProduct)

export default router
