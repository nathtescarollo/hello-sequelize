const db = require('./database/models');
const { Op } = require('sequelize');

const print = (values) => values.map(value => value.dataValues);

const listarTodos = async () => {
    const alunos = await db.Aluno.findAll();
    console.log(print(alunos));
};

const listarPeloNome = async () => {
    const alunoPeloNome = await db.Aluno.findOne({
        where: { 
            nome: "Rodrigo"
        }
    });
    console.log(alunoPeloNome.dataValues);
};

const listarPeloId = async () => {
    const alunoPorId = await db.Aluno.findByPk(1);
    console.log(alunoPorId);
};

const listarPelaLetraInicial = async () => {
    const alunos = await db.Aluno.findAll({
        where: { 
            nome: { [Op.like]: "R%" }
        }
    });
    console.log(print(alunos));
};

listarTodosOrdenados = async () => {
    const alunos = await db.Aluno.findAll({
        order: [ ['nome', 'ASC']],
        limit: 3,
        offset: 1
    });
    console.log(print(alunos));
};

// listarTodos();
// listarPeloNome();
// listarPeloId();
// listarPelaLetraInicial();
listarTodosOrdenados();