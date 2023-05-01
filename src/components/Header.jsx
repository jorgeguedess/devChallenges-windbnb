import React from "react";
import P from "prop-types";
import { MdClose } from "react-icons/md";
import useModal from "../hooks/useModal";
import HeaderMenu from "./HeaderMenu";

import Logo from "../images/logo.svg";

import styles from "../styles/scss/Header.module.scss";
import useResize from "../hooks/useResize";

const Header = ({ setNewData }) => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const { screenWidth } = useResize();

  return (
    <>
      {modalIsOpen && (
        <div className={modalIsOpen && styles.fade} onClick={closeModal}></div>
      )}
      <header
        className={`${styles.header} ${!modalIsOpen ? "container" : ""} ${
          modalIsOpen ? "modalOpen" : ""
        }`}
        id="header"
      >
        {!modalIsOpen && (
          <a href="/">
            <img src={Logo} alt="windbnd" width="96" height="20" />
          </a>
        )}

        <div className={`${modalIsOpen ? styles.containerModal : ""}`}>
          {modalIsOpen && screenWidth <= 400 && (
            <div className={styles.infoModal}>
              <h3>Edit your search</h3>
              <button type="button" onClick={closeModal}>
                <MdClose />
              </button>
            </div>
          )}

          <HeaderMenu
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
            setNewData={setNewData}
          />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  setNewData: P.func.isRequired,
};

export default Header;
