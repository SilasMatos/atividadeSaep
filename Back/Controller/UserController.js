const db = require('../Models/Connection');

// Função para obter todos os exemplos do banco de dados
const getAllExamples = (req, res) => {
  try {
    db.query('SELECT * FROM alocacao', (err, results) => {
      if (err) {
        console.error('Erro ao obter os exemplos do banco de dados: ' + err.stack);
        return res.status(500).json({ error: 'Erro ao obter os exemplos.' });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Erro ao executar a consulta no banco de dados:', error);
    return res.status(500).json({ error: 'Erro ao obter os exemplos.' });
  }
};

module.exports = {
  getAllExamples,
};



