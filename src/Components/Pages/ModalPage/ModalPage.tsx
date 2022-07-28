import React, { useState } from "react";
import { Button, Modal } from "ui-kit";
import iconColendar from '../../Assets/image/small.svg'
import "./ModalPage.scss";

export const ModalPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const handleModalSubmit = () => {
    setIsOpenModal(false);
  };

  return (
    <section className="ModalPage">
      <h2>Modal</h2>
      <Button onClick={handleModalOpen} disableStyle={""} hoverStyle={""} activeStyle={""}>Open</Button>
      
      <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
        <Modal.Header>
          <h2>12 Августа, 11:00</h2>
        </Modal.Header>
        <Modal.Content>
          <div className="flex">
            <div className="img"> 
              <img src={iconColendar} alt="" />
            </div>
            <div className="collum">
              <h3>Инфографика</h3>
              <p>Представление информации и данных. Создание презентаций</p>
              <div><p>Лектор: Александр Сергеевич</p></div>
              <div><p>Кабинет: 302</p></div>
            </div>
          </div>
        </Modal.Content>
        {/* <Modal.Footer buttonSubmitText="close" onSubmit={handleModalSubmit} /> */}
      </Modal>
    </section>
  );
};
