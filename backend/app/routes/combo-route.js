const comboController = require('../controllers/combo-controller');

module.exports = (app) => {
    app.route('/combos')
        .get(comboController.findAll)
        .post(comboController.addCombo);

    app.route('/combos/:id')
        .get(comboController.findById)
        .put(comboController.updateCombo)
        .delete(comboController.deleteCombo);
};
