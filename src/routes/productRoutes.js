import {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deletProduct,
  deleteAllProducts,
} from "../controllers/productController.js";

const addRoutes = (app) => {
  app
    .route("/products")
    .get(getProducts)
    .post(addProduct)
    .delete(deleteAllProducts);
  app
    .route("/products/:productID")
    .get(getProduct)
    .put(updateProduct)
    .delete(deletProduct);
};
export default addRoutes;
