const team = require ("../models/team.json");
const fs = require('fs');

const getAll = (req,res) => {
    res.status(200).send(team)
}

const getById = (req,res) => {
    const id = req.params.id;
    res.status(200).send(team.find((colab) => colab.id == id));
}

const getAgeById =(req,res) => {
    const id = req.params.id;
    const birthday = team.find((colab)=>colab.id == id).aniversario.split("/");
    const newBirthday = new Date(birthday[2],birthday[1]-1,birthday[0]);

    res.status(200).send("age ".concat(new Date().getFullYear() - Number(birthday[2])));
}

const postTeam =(req,res) => {
    const{id, nome, setor, idade, funcao, dataAdmissao, aniversario} = req.body;
    team.push({id, nome, setor, idade, funcao, dataAdmissao, aniversario});

    fs.writeFile("./src/models/team.json",JSON.stringify(team),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Team atualizado com sucesso!");
        });

    res.status(201).send(team);
}

const deleteTeam =(req,res) => {
    const id = req.params.id;
    const filterTeam = team.find((colab) => colab.id == id);
    const index =team.indexOf(filterTeam)

    team.splice(index,1);

    fs.writeFile("./src/models/team.json",JSON.stringify(team),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Team deletado com sucesso!");
        });

    res.status(200).send(team);
}


module.exports = {
    getAll,
    getById,
    getAgeById,
    postTeam,
    deleteTeam
}