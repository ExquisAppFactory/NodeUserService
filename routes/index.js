const router = require('express').Router();
const userController = require('../controllers/userController');
const validation = require('../policies/validations');
/**
 * Routing for the application services.
 *  - URL Mapping to the required controller services
 */
// GET POST PUT DELETE PATCH
router.post('/login', validation.validateLogin, userController.login);
router.post('/register', validation.validateRegistration, userController.register);
module.exports = router;
