import React, {Fragment} from "react";


function Advertencia(score) {
    if (score > 30){
      return (
        <Fragment>
        <div className="mensaje">
        <p>Tus respuestas sugieren la posibilidad de tener sintomatología<br></br> compatible con COVID-19</p>
        <input type="radio" className="radio" name="progress" value="twentyfive" id="twentyfive" defaultChecked></input>
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
          <ul>
            <li>Observa tu evolución y si tus síntomas empeoran, sobre todo si tienes dificultad respiratoria, ponte en contacto con el teléfono designado por tu Comunidad para la atención sobre el COVID-19 o con tu centro de salud.</li>
          </ul>
        </div>
        </Fragment>
      );
    } else {
      return(
        <Fragment>
        <div className="mensaje">
        <p>Tus respuestas <b>NO</b> sugieren la posibilidad de tener sintomatología<br></br> compatible con COVID-19</p>
        <input type="radio" className="radio" name="progress" value="twentyfive" id="bajo" defaultChecked></input>
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
        </div>
        </Fragment>
      );
    }
}

const Alertbar = ({score}) => {
    return(
        Advertencia(score)
    );
};

export default Alertbar;
