const Combo =require('../models/combo.js')
const {ObjectId} = require("mongodb");

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */

exports.search=async()=>{
    const data=await Combo.find();
    return data;
}

exports.searchById=async(mail)=>{
    const data=await Combo.find({"OwnerEmail":mail});
    return data;
}

exports.createCombo=async(content)=>{
    try {
        const newCombo=new Combo(content);
        newCombo.save();
        return newCombo;
    } catch (error) {
        console.error("Combo not created");
        return "Combo not created";
    }
}

exports.updateCombo=async(id,body)=>{
    const data=await Combo.findOneAndUpdate({_id:ObjectId(id)},{$set:body},{returnOriginal:false});
    return data;
}

exports.deleteCombo=async(id)=>{
    await Combo.remove(Combo.findById(id));
}
