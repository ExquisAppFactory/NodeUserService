const to = require('./to');

/**
 * register: To register a new user with the given information
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const todos = async (req, res) => {
  return res.json(to)
};

module.exports = {
  todos,
};
