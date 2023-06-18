const db = require('../Models/Connection');


const updateQuantidade = (req, res) => {
    const itemId = req.params.id;
    try {
      db.query('UPDATE alocacao SET quantidade = (quantidade - 1) WHERE automovel  = ?',[itemId], (err, results) => {
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
  updateQuantidade,
  
};



