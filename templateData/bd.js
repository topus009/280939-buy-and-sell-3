'use strict';

const bd = require(`./bd.json`);
const categoriesDb = require(`./categoriesDB.json`);

module.exports = {
  newTicketsListData: bd.filter((item) => [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`].includes(item.color)),
  searchResults: bd.filter((item) => [`05`, `16`].includes(item.color)),
  myTicketsListData: bd.filter((item) => [`06`, `10`, `04`, `08`, `01`].includes(item.color)),
  popularTicketsListData: bd.filter((item) => [`09`, `10`, `11`, `04`].includes(item.color)),
  categoryTicketsListData: bd.filter((item) => [`06`, `08`, `15`, `12`, `13`, `14`, `10`, `06`].includes(item.color)),
  categoriesListData: categoriesDb,
};
