import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import "../Modals/Modal2.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import "react-toastify/dist/ReactToastify.css";

const ModalVender = ({ selectedId, closeModal }) => {
  const [concessionaria, setConcessionaria] = useState([]);
  const [clientes, setClientes] = useState([]);
  const { modelo, id, area } = useParams();
  const Navigate = useNavigate();

  const getConcessionaria = async () => {
    try {
      const response = await fetch(`http://localhost:3800/concessionaria/${id}/${area}`);
      const data = await response.json();
      setConcessionaria(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getClientes = async () => {
    try {
      const response = await fetch(`http://localhost:3800/clientes`);
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getConcessionaria();
    getClientes();
  }, [id]);

  const VendaUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3800/quantidade/${id}`);
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("O automóvel não foi vendido com sucesso");
    }
  };

  const redirect = async () => {
    VendaUpdate();
    toast.success("Automóvel vendido com sucesso");
    Navigate("/");
  };

  return (
    <BootstrapModal show={true} onHide={closeModal}>
      <BootstrapModal.Header>
        <BootstrapModal.Title>Área {id}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{modelo}</h3>
              <Link to="/">
                <button className="modal-close-button">
                  <GrFormClose />
                </button>
              </Link>
            </div>
            <div className="modal-body">
              <div className="form-field">
                <label htmlFor="clients" className="form-label">
                  Clientes
                </label>
                <select id="clients" name="clients" className="form-select">
                  {clientes.map((cliente) => (
                    <option key={cliente.id} value={cliente.id}>
                      {cliente.clientes}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="dealership" className="form-label">
                  Concessionarias
                </label>
                <select id="dealership" name="dealership" className="form-select">
                  {concessionaria.map((conce) => (
                    <option key={conce.id} value={conce.concessionaria}>
                      {conce.concessionaria}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="confirm-button" type="button" onClick={redirect}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Link to="/">
          <Button variant="primary">Voltar</Button>
        </Link>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default ModalVender;
