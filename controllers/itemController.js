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

module.exports = {
  getItems: getItems,
  getItemById: getItemById,
  addItem: addItem,
};
