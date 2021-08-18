const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunos');

/* GET alunos listing. */
router.get('/', async (req, res) => {
  try {
    const alunos = await alunosController.listarTodos();
    console.log(alunos);
    res.render('alunos', { alunos });
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  const { nome, sobrenome, email, ano_matricula } = req.body;
  // validação joi, express validator, express open api validator
  await alunosController.cadastrarAluno({ nome, sobrenome, email, ano_matricula });
  res.redirect('/alunos');
});

router.post('/atualizar/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email, ano_matricula } = req.body
  await alunosController.atualizarAluno({ id, nome, sobrenome, email, ano_matricula });
  res.redirect('/alunos');
});

router.get('/matricular/:id', async (req, res) => {
  const { id } = req.params;
  await alunosController.matricularAluno({ id, ano_matricula: 2021 });
  res.redirect('/alunos');
});

router.get('/deletar/:id', async (req, res) => {
  const { id } = req.params;
  await alunosController.deletarAluno(id);
  res.redirect('/alunos');
});

module.exports = router;
