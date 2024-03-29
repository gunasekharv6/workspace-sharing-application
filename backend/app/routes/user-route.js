const userController = require('../controllers/user-controller');

module.exports = (app) => {
    app.route('/users')
        .post(userController.addUser);

    // app.route('/users/:id')
    //     .get(userController.findById)
    //     .put(userController.updateUser)
    //     .delete(userController.deleteUser);
    app.route('/users/:id')
        .put(userController.updateUser)
        .delete(userController.deleteUser);

    app.route('/users')
        .get(userController.findById)
};
