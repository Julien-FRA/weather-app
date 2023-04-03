import React, { SyntheticEvent, useState } from "react";
import { addCity } from "../services/weatherRequest";

const Form = () => {
  const [long, setLong] = useState<string>();
  const [lat, setLat] = useState<string>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!long) {
      setError("Veuillez rentrer la longitude");
      setSuccess("");
      return;
    }

    if (!lat) {
      setError("Veuillez rentrer la latitude");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Formulaire envoyé");
    addCity(lat, long);
    console.log(long, lat);
  };

  error !== "" ?? (
    <div className="form-err" role="alert">
      {error}
    </div>
  );

  error !== "" ?? (
    <div className="form-win" role="alert">
      {success}
    </div>
  );

  return (
    <div>
      <form className="container-form">
        {error}
        {success}
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Longitude..."
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Latitude..."
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-home" onClick={onSubmit}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
