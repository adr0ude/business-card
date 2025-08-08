import React from "react";

const Bio = () => {
  return (
    <div className="bio">
      <img src="./img/profilePicture.png" alt="Evandro profile" />
      <div className="info">
        <h1>Evandro de Lima Rodrigues</h1>
        <p>Professor e Desenvolvedor</p>
      </div>

      <div className="buttons">
        <a href="mailto:evandro.lima@ifce.edu.br">
          <button className="email-btn">
            <i className="fas fa-envelope"></i>
            Email
          </button>
        </a>

        <a href="https://www.linkedin.com/in/evandro-de-lima-rodrigues-0461b574/?originalSubdomain=br">
          <button className="linkedin-btn">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Bio;
