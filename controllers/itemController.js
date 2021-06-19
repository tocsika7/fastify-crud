const items = require("../data/Items");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItemById = (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
};

module.exports = {
  getItems: getItems,
  getItemById: getItemById,
};
