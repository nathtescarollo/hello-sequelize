const db = require('./database/models');

const { log } = console;

const print = (values) => values.map(value => value.dataValues);

const run = async () => {
    // await db.Atendimento.create({ descricao: "Teste 1", aluno_id: 1 });

    const alunos = await db.Atendimento.findAll({ include: ['Alunos'] });

    log(JSON.stringify(alunos, null, 2));

    // log(print(alunos));
    // log(print(alunos)[0].Alunos.dataValues);
}

run();