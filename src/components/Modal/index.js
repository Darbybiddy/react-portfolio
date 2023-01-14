import React from "react";

const Modal = ({ onClose, reactProject }) => {
  const { name, description, website, respository, index } = reactProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <div>
          <a href={website}>
            <img
              src={require(`../../../assets/images ${index}.png`)}
              
              alt="react project"
            />
          </a>
        </div>

        <p>{description}</p>
        <p><a href={respository}>My Github Repo</a></p>
        <button type="button" onClick={onClose}>
          Close 
        </button>
      </div>
    </div>
  );
};

export default Modal;
