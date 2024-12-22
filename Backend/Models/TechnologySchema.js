const mongoose = require('mongoose')

const {Schema} = mongoose

const TechnologySchema = new Schema(
    {
        title:{
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true
        },
        image:{
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Technology', TechnologySchema)
