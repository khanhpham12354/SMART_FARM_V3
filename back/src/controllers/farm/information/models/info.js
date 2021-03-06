const mongoose = require('mongoose');

const InformationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    sub_id: {
        type: String,
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    seed:{
        type: String,
        required: true
    },
    stage_1:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    stage_2:{
        type: mongoose.Schema.Types.ObjectId
    },
    stage_3:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    stage_4:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    started_plant:{
        type: Date,
        default: Date.now
    },
    address: {
        type: String,
        default: "VIET NAM"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
},{ versionKey: false });

const Information = mongoose.model("farm_information", InformationSchema);
module.exports = Information;
