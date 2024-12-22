const mongoose = require('mongoose')
const technologyModel = require('../Models/TechnologySchema')

const createFamiliarTechnology = async(req,res)=>{
    const {title,description,image} = req.body
    try{
        const technology = await technologyModel.create({title,description,image})
        res.status(200).json(technology)
    }catch(e){
        res.status(400).json({Error: e.message})
    }
}

const fetchFamiliarTechnology = async(req,res)=>{
    try{
        const technology = await technologyModel.find({})
        res.status(200).json(technology)
    }catch(err){
        res.status(400).json({Error: err.message})
    }
}

module.exports = {createFamiliarTechnology, fetchFamiliarTechnology}
