import DBConnection from "../DBConnection/DBConn.js";
import { ProductSchema } from "../models/product.js";

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;

/**
 * Define Product Module
 **/
const Product = DBConnection.getInstance().define("Product", ProductSchema, {
  tableName: "Products",
  timestamps: false,
});
await DBConnection.getInstance().sync();

/**
 * Helper methods
 */
export const addProduct = (req, res) => {
  console.log(req);
  const product = Product.create(req.body)
    .then((value) => {
      res.send(`Product create successfully!\n${product}`);
    })
    .catch((reason) => {
      res
        .status(STATUS_BAD_REQUEST)
        .send(`Failed to create products.${reason}`);
    });
};

export const getProducts = (req, res) => {
  Product.findAll().then((products) => {
    res.send(products);
  });
};

export const getProduct = (req, res) => {
  Product.findByPk(req.params.productID)
    .then((value) => {
      if (!value) {
        res.status(STATUS_NOT_FOUND);
      }
      value = value === null ? {} : value;
      res.send(value);
    })
    .catch((reason) => {
      res.status(STATUS_BAD_REQUEST);
      res.send(`Bad Request was sent. ${reason}`);
    });
};

export const updateProduct = (req, res) => {
  Product.findByPk(req.params.productID)
    .then((product) => {
      if (!product) {
        res.status(STATUS_NOT_FOUND);
        res.send({});
      } else {
        product.update(req.body).then((value) => {
          res.status(STATUS_OK);
          res.send("Product was updated successfully!");
        });
      }
    })
    .catch((err) => {
      res.status(STATUS_BAD_REQUEST);
      res.send(`Failed. ${err}`);
    });
};

export const deletProduct = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.productID,
    },
  }).then((product) => {
    if (!product) {
      res.status(STATUS_NOT_FOUND);
      res.send(product);
    } else {
      console.log(`Delete Product return value: ${product}`);
      res.send(
        `Product with id '${req.params.productID}' was deleted successfully!`
      );
    }
  });
};

export const deleteAllProducts = (req, res) => {
  Product.destroy({
    truncate: true,
  }).then((value) => {
    console.log(`Delete all Products return value: ${value}`);
    res.send(`All products deleted successfully!`);
  });
};
