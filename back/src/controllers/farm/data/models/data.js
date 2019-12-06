const mongoose = require('mongoose');

const SubstationSchema = new mongoose.Schema({
    sub_id: {type: String, require: true},
    sensor_2:{
        RF_signal: String,
        id: String,
        name: String,
        EOC: Number,
        value: Number,
        battery: Number
    },
    sensor_3:{
        RF_signal: String,
        id: String,
        name: String,
        EOC: Number,
        value: Number,
        battery: Number
    },
    time: Date,
    created_date: {
        type: Date,
        default: Date.now()
    }
},{ versionKey: false });

const Data = mongoose.model("farm_data", SubstationSchema);
module.exports = Data;
