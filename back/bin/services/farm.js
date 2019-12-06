const Data = require('../../src/controllers/farm/data/models/data');

async function saveData(obj){
    try{
        await Data.create(obj)
    }catch(err){
        throw err
    }
}

function convertData(object){
    return{
        sub_id: object.GW_name,
        SM1: object.sensor_2.value.toFixed(2),
        H1: object.sensor_3.value.toFixed(2),
        RL1_status: object.sensor_1.RL1_status,
        RL2_status: object.sensor_1.RL2_status,
        time: object.time
    }
}

module.exports={
    saveData,
    convertData
};