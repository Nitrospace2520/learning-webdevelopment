const dataObject = {
  products: require("../model/products.json"),
  setProducts: (data) => {
    this.products = data;
  },
};

const getAllProducts = (req, res) => {
  res.json(dataObject.products);
};

const getProducts = (req, res) => {
  const products = dataObject.products.find((emp) => emp.id === +req.params.id);
  if (!products)
    return res
      .status(400)
      .json({ message: `Products ID ${req.params.id} not found` });
  res.json(products);
};

const addProducts = (req, res) => {
  const newProducts = {
    id: dataObject.products[dataObject.products.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  if (!newProducts.firstname || !newProducts.lastname)
    return res
      .status(400)
      .json({ message: "First and last names are required." });

  dataObject.setProducts([...dataObject.products, newProducts]);
  res.status(201).json(dataObject.products);
};

const updateProducts = (req, res) => {
  const products = dataObject.products.find((emp) => emp.id === +req.body.id);
  if (!products)
    return res
      .status(400)
      .json({ message: `Eproducts ID ${req.body.id} not found` });
  if (req.body.firstname) products.firstname = req.body.firstname;
  if (req.body.lastname) products.lastname = req.body.lastname;
  const notUpdatedProducts = dataObject.products.filter(
    (emp) => emp.id !== +req.body.id
  );
  const unsortedRecords = [...notUpdatedProducts, products];
  dataObject.setProducts(
    unsortedRecords.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  res.json(dataObject.products);
};

const deleteProducts = (req, res) => {
  const products = dataObject.products.find((emp) => emp.id === +req.body.id);
  if (!products)
    return res
      .status(400)
      .json({ message: `Eproducts ID ${req.body.id} not found` });
  const notDeletedEmp = dataObject.products.filter(
    (emp) => emp.id !== +req.params.id
  );
  dataObject.setProducts([...notDeletedEmp]);
  res.json(dataObject.products);
};

module.exports = {
  getAllProducts,
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
};
