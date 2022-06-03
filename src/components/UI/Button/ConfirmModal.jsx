import React from "react";
import styles from "./ConfirmModal.module.scss";

const ConfirmModal = ({ show, closeModal, confirmDelete }) => {
  return (
    show && (
      <div className={styles["confirm-modal"]}>
        <p>Delete all goals?</p>
        <button onClick={confirmDelete} className={styles.confirm}>
          Confirm
        </button>
        <button onClick={closeModal} className={styles.cancel}>
          Cancel
        </button>
      </div>
    )
  );
};

export default ConfirmModal;
