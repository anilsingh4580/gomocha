var Orders = require('../models/orders');

var create = function(order, callback) {
    Orders.create(order, function(err, result) {
        if (err || !order) {
            console.error("Could not create order", order);
            console.log(err);
            return;
        }
        console.log("Created order", order);
        callback(null, result);
    });
};

module.exports = create;