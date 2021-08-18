const alunosModel = require('../models/alunos');

exports.listarTodos = () => alunosModel.listarTodos();

exports.cadastrarAluno = ({ nome, sobrenome, email, ano_matricula }) => 
    alunosModel.cadastrarAluno({ nome, sobrenome, email, ano_matricula });

// alternativa para repassar objeto 
// exports.listarTodos = (obj) => alunosModel.cadastrarAluno(obj);

exports.atualizarAluno = ({ id, nome, sobrenome, email, ano_matricula }) => 
    alunosModel.atualizarAluno({ id, nome, sobrenome, email, ano_matricula });

exports.matricularAluno = ({ id, ano_matricula }) => 
    alunosModel.matricularAluno({ id, ano_matricula });

exports.deletarAluno = id => alunosModel.deletarAluno(id);
