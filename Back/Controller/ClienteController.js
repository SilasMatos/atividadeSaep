const db = require('../Models/Connection');

const getClientes = (req, res) => {
  try {
    db.query('select * from clientes', (err, results) => {
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
  getClientes,
  
};




