const http = require("http");
const products = require("./data/products");

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productController');

const PORT = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    if (req.url === "/api/products" && req.method === 'GET') {
      // res.writeHead(200, { "Content-Type": "application/json" });
      // res.end(JSON.stringify(products));
      getProducts(req, res);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
      const id = req.url.split('/')[3];
      getProduct(req, res, id);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
      const id = req.url.split('/')[3];
      updateProduct(req, res, id);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE') {
      const id = req.url.split('/')[3];
      deleteProduct(req, res, id);
    } else if (req.url === '/api/products' && req.method === 'POST') {
      createProduct(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ msg: 'Rout not found' }));
    }
  })
  .listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
