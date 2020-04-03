import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #3c5064 30%, #01a5bd 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: '3rem',
      fontWeight: 'bold',
    },
  });




const Inicio = ({showshow}) => {
    const classes = useStyles();
    return(
        <div className="inicio" >
            <h1 className="titulo1">TEST DE AUTOEVALUACIÓN <br></br> DE SÍNTOMAS DEL COVID-19</h1>
            <h3 className="subtitulo">Un proyecto de código abierto<br></br> para ayudar a contener y localizar posibles brote del virus</h3>
            <Button className={classes.root} onClick={showshow}>EMPEZAR TEST</Button>
            <p className="copydata">Por favor <b>permite</b> que esta app acceda a tu ubicación. <br></br> no requerimos ningún otro dato personal más.</p>
        </div>

    );
};


export default Inicio;