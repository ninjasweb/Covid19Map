import React from "react";

function Advertencia(score) {
  if (score > 30){
    return (
      <p>Advertencia: Tienes los síntomas. <br></br>
       <span className="linkAd">Quizás debas revisar esto <a href="https://ninjasweb.com">LINK</a></span>
       </p>
    );
  } else {
    return(
      <p>No tienes los síntomas</p>
    );
  }
}


const Result = ({score, playAgain, publicarSintomas, showMap}) => (
  <div className="score-board">
    <div className="score">
      <p>Tu puntaje es: <b>{score}</b></p>
      <div>{Advertencia(score)}</div>
      <div className="mapa" id="mapa">
      {showMap()}
      </div>
      <button className="publicBtn" onClick={publicarSintomas}>Publicar</button>
      <button className="playBtn" onClick={playAgain}>
      Otra vez
    </button>
    </div>
  </div>
);



export default Result;
