const mongoose = require('mongoose');

const customerOrderSchema = new mongoose.Schema(
    {
        name: {type: String},
        surname: {type: String},
        email: {type: String},
        phoneNumber: {type: Number},
        shippingAddress: {type: String},
        storePickud: {type: String}
    },
    {
        timestamps: true
    }
);

const CustomerOrder = mongoose.model('CustomerOrder', customerOrderSchema);

module.exports = CustomerOrder;