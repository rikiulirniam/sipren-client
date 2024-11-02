import React, { useState } from "react";

const Popup = ({ message, onConfirm, onCancel }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p>{message}</p>
        <div style={styles.buttons}>
          <button onClick={onConfirm} style={styles.confirmButton}>
            Yes
          </button>
          <button onClick={onCancel} style={styles.cancelButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  confirmButton: {
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Popup;
