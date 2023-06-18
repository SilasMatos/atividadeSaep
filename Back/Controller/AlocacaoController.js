const db = require('../Models/Connection');


const getAlocacao = (req, res) => {
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

const getAlocaInnerAuto = (req, res) => {
  const {area} = req.params;
  try {
    db.query('select * from automoveis a inner join alocacao a2 where a.id = a2.automovel and a2.area = ?',[area], (err, results) => {
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
  getAlocacao,
  getAlocaInnerAuto
};



