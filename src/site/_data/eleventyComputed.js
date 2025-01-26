const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");

module.exports = {
  graph: (data) => getGraph(data),
  filetree: (data) => getFileTree(data),
};
