import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import Modal from "../Modals/ModalArea";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleLinkClick = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="html-size">
      <div className="home-screen">
        <div>
          <h1 className="title">Áreas</h1>
          <div className="area-list">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => {
              let className = "area-item normal-area";

              if (id === 3 || id === 5 || id === 6 || id === 11) {
                className = "area-item special-area";
              }

              return (
                <Link
                  to={`/alocacao/${id}`}
                  key={id}
                  onClick={() => handleLinkClick(id)}
                  id="edit-link"
                >
                  <div className={className}>{id}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {modalOpen && <Modal selectedId={selectedId} closeModal={closeModal} />}
    </div>
  );
};

export default Home;
