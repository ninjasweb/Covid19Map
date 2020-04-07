import React from "react";
import Alertbar from "./Alertbar";


const Result = ({score, playAgain, publicarSintomas, showMap}) => (
  <div className="score-board">
    <div className="score">
      {/*<p>Tu puntaje es: <b>{score}</b></p>*/}
      <Alertbar score={score}/>
      <div className="mapa" id="mapa">
      {/*showMap()*/}
      </div>
      <button className="publicBtn" onClick={publicarSintomas}>PUBLICAR</button>
      <button className="playBtn" onClick={playAgain}>OTRA VEZ</button>
    </div>
  </div>
);



export default Result;
