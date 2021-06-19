let items = require("../data/Items");
const { v4: uuid } = require("uuid");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItemById = (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuid(),
    name: name,
  };

  items = [...items, item];
  reply.code(201).send(item);
};

const deleteItemById = (req, reply) => {
  const { id } = req.params;

  items = items.filter((item) => item.id !== id);

  reply.send({ message: `Item ${id} has been removed` });
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;

  items = items.map((item) => (item.id === id ? { id, name } : item));

  item = items.find((item) => item.id === id);

  reply.send(item);
};

module.exports = {
  getItems: getItems,
  getItemById: getItemById,
  addItem: addItem,
  deleteItemById: deleteItemById,
  updateItem: updateItem,
};
