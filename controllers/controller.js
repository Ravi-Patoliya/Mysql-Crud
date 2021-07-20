// var db =require('../models/index')
// var userData = db.userData;

var models = require('../models');
const userdata = require('../models/userdata');
var userData = models.userData;

let getData = (req, res) => {
    userData.findAll({})
        .then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err, 'get data error');
        })
};

let createData = (req,res)=>{
    data ={
        name:req.body.name,
        email:req.body.email,
        Age:req.body.Age
    }
    userData.create(data)
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err,'error during create user');
    })
};

let findById =(req,res)=>{
    let id = req.params.id 
    userData.findOne({where:{id:id}})
    .then(data=>{
        if(data == null){
            res.json('enter Valid id')
        }else{
        res.json(data)
    }
    }).catch(err=>{
        console.log(err,'error in find by id');
    })
};

let UpdateData = (req,res)=>{
    data ={
        name:req.body.name,
        email:req.body.email,
        Age:req.body.Age
    }
   let  id= req.params.id
    userData.update(data,{where:{id:id}})
    .then(data=>{
        res.json("user Updated Successfully")
    }).catch(err=>{
        console.log(err,'error during update user');
    })
};

let deleteUser =(req,res)=>{
    let id = req.params.id 
    userData.destroy({where:{id:id}})
    .then((data)=>{
        res.json(`user id ${id} is deleted`)
    }).catch(err=>{
        console.log(err,'error in find by id');
    })
};



module.exports = { 
    getData,
    createData,
    findById,
    UpdateData,
    deleteUser }