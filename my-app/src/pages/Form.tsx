import React from "react";

const Form = () => {
  return (
    <div>
      <form className="container-form">
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Longitude..."
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Latitude..."
          />
        </div>
        <button type="submit" className="btn-home">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
