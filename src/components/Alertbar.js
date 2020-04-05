import React, {Fragment} from "react";


function Advertencia(score) {
    if (score > 30){
      return (
        <Fragment>
        <input type="radio" className="radio" name="progress" value="twentyfive" id="twentyfive" defaultChecked></input>
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
        </Fragment>
      );
    } else {
      return(
        <Fragment>
        <input type="radio" className="radio" name="progress" value="twentyfive" id="bajo" defaultChecked></input>
        <div className="progress">
            <div className="progress-bar"></div>
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
