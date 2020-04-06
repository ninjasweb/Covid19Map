import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      background: 'rgb(70,113,198)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0px 2px 10px rgba(4, 3, 5, 0.8)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: '3rem',
      fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#6bdddd',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: '#4671c6',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    },
  
  });


const Inicio = ({showshow}) => {
    const classes = useStyles();
    const img1 = require(`../img/github.png`);
    return(
      <div className="bg">
        <div className="inicio">
            <h1 className="titulo1">TEST DE AUTOEVALUACIÓN <br></br> DE SÍNTOMAS DEL COVID-19</h1>
            <h3 className="subtitulo">Un proyecto de código abierto<br></br> para ayudar a contener y localizar posibles brote del virus</h3>
            <Button className={classes.root} onClick={showshow}>EMPEZAR TEST</Button>
            <p className="copydata">Por favor <b>permite</b> que esta app acceda a tu ubicación. <br></br> no requerimos ningún otro dato personal más.</p>
            <a href="https://www.github.com/ninjasweb/Covid19Map" target="_blank"><img src={img1} alt="github"/></a>
        </div>
      </div>


    );
};


export default Inicio;