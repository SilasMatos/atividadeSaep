const db = require('../Models/Connection');

const getConcessionaria = (req, res) => {
  const itemId = req.params.id;
  const {area} = req.params;
  try {
    db.query('select c.concessionaria, a2.modelo  from concessionaria c inner join alocacao a inner join automoveis a2 where  c.id = a.concessionaria and a2.id = a.automovel and a.automovel = ? and a.area = ?',[itemId, area], (err, results) => {
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
  getConcessionaria,
  
};





