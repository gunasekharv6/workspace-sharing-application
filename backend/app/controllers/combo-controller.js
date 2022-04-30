const comboService = require('../services/combo-service');
const mongoose = require('mongoose');


/** fetch task list
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findAll=async (req,res)=>{
    try{
        const task=await comboService.search();
        res.status(200).send(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** fetch Combo by id
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findById=async (req,res)=>{
    try{
        const task=await comboService.searchById(req.params.id);
        res.status(200).send(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** add Combo to database
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.addCombo=async (req,res)=>{
    try{
        const task={...req.body};
        const newTask=await comboService.createCombo(task);
        res.status(200).send(newTask);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** update Combo based on _id
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCombo=async (req,res)=>{
    try{
        const task=await comboService.updateCombo(req.params.id,req.body);
        res.status(200).send(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** delete Combo based on _id
 *
 */

exports.deleteCombo=async (req,res)=>{
    try{
        const task=await comboService.deleteCombo(req.params.id);
        res.status(200).json({msg: 'successfully delete'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

