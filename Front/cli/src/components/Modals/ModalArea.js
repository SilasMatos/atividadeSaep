
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import '../Modals/Modal.css';

const ModalArea = ({ selectedId, closeModal }) => {
    const { id } = useParams();
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      fetchData(id);
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3800/alocacao/${id}`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  return (
    <BootstrapModal show={true} onHide={closeModal}>
      <BootstrapModal.Header >
        <BootstrapModal.Title>Área {id}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
      <div>
      <div className="custom-container">
        <div className="custom-card">
         
       
          {tableData.length === 0 ? (
            <h1 className="custom-message">Não Possui Automóveis Nessa Área</h1>
          ) : (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Preço</th>
                  <th>Qntd</th>
                  <th>Vender</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => {
                  if (item.quantidade <= 0) {
                    return null;
                  }
                  return (
                    <tr key={item.id}>
                      <td>{item.modelo}</td>
                      <td>{item.preco}</td>
                      <td className="custom-quantity">{item.quantidade}</td>
                      <td>
                        <Link to={`/concessionaria/${item.modelo}/${item.id}/${item.area}`}>
                          
                        <button className="btn-table">
                            <span class="circle1"></span>
                            <span class="circle2"></span>
                            <span class="circle3"></span>
                            <span class="circle4"></span>
                            <span class="circle5"></span>
                            <span class="text">Vender</span>
                        </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
      <Link to="/">
        <Button variant="primary" >
        Voltar
       
        </Button>
        </Link>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default ModalArea;
