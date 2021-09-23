const res = require('express/lib/response');
const skill = require('../models/skill');



module.exports = {
    index,
    show,
    new: newSkill,
    create: create,
    delete: deleteSkill
};

function deleteSkill(req, res){
skill.deleteOne(req.params.id)
res.redirect('/skills');
}

function create(req, res){
    console.log(req.body)
    skill.create(req.body)
res.redirect('/skills') 

}

function newSkill(req, res){
    res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    });
}

function show(req, res) {
    console.log(req.params)
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}

