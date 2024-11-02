import React, { useState, useEffect } from 'react';

function TempComponent({message , onConfirm, onCancel}) {
  return (
   <React.Fragment>
     <div className="menu">
    <h3>Jurusan</h3>
    <div className="major">
        <button type="button" name="className" value="tjkt" id="tjkt">TJKT</button>
        <button type="button" name="className" value="tm" id="tm">TM</button>
        <button type="button" name="className" value="tkr" id="tkr">TKR</button>
        <button type="button" name="className" value="titl" id="titl">TITL</button>
        <button type="button" name="className" value="las" id="las">LAS</button>
        <button type="button" name="className" value="toi" id="toi">TOI</button>
        <button type="button" name="className" value="dkv" id="dkv">DKV</button>
        <button type="button" name="className" value="ka" id="ka">KA</button>
        <button type="button" name="className" value="dcpf" id="bcpf">BCPF</button>
    </div>
</div>
<div className="menu">
    <h3>Kelas</h3>
    <div className="className">
        <label>
            <input type="radio" value="X" name="grade" />
            X
        </label>
        <label>
            <input type="radio" value="XI" name="grade"/>
            XI
        </label>
        <label>
            <input type="radio" value="XII" name="grade"/>
            XII
        </label>
        <select name="" id="classNamees-select">
        </select>
    </div>
</div>
<div className="menu">
    <h3>Mapel</h3>
    <div className="subject">
        <button id="produktif">Produktif</button>
        <button id="normada">Normada</button>
        <select name="" id="subjects-select"></select>
    </div>
</div>
<button className="menu-confirm" onclick="menu_dialog.showModal()">
    Konfirmasi
</button>

<x-modal-confirmation id="menu_dialog">
    <h3>
        Yakin konfirmasi ?
    </h3>
    <div>
        <button onclick="menu_dialog.close()">Batal</button>
        <button id="menu-confirm">Yakin</button>
    </div>
</x-modal-confirmation>

    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p>{message}</p>
        <div style={styles.buttons}>
          <button onClick={onConfirm} style={styles.confirmButton}>Yes</button>
          <button onClick={onCancel} style={styles.cancelButton}>No</button>
        </div>
      </div>
    </div>
   </React.Fragment>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}

export default TempComponent;
