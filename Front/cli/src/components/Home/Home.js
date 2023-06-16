// Home.js
import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/alocacao');
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dados da Alocação</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>Área: {item.area}</p>
          <p>Automóvel: {item.automovel}</p>
          <p>Concessionária: {item.concessionaria}</p>
          <p>Quantidade: {item.quantidade}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
