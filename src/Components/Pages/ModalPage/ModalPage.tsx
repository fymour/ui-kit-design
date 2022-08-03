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
    <div className="content">
      <h1 className='pages-title'>
      Описание
        </h1>
      <div className='pages-description'>
        <p>Modal — это компонент модального окна. Модальное окно используется, чтобы привлечь внимание пользователя и/или побудить совершить определённое действие.
          Модальное окно появляется поверх родительского экрана, главная страница уходит на второй план, но при этом остаётся в поле зрения. Пользователю предлагается выполнить какое-либо действие, чтобы вернуться к основному окну.
        </p>
        <h3>Modal</h3>
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
      </div>
    </div>
  );
};
