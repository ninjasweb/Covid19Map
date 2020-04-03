import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";

//const API_KEY = "AIzaSyAoqNSoiv1sNNZ_FnlPLNMz1jYaPCYefkU";



class CovidTest extends Component {


	state = {
		questionBank: [],
		score: 0,
		responses: 0,
		inicio: false,
		lat: null,
		lon: null,
		latlon: null,
		address: null
	}
	;



	
	//Iniciar el Test 

	showshow = () => {
    	this.setState(
			{inicio: true
			}
		);
		if(navigator.geolocation){
			navigator.geolocation.watchPosition(this.getCoordinates, this.showError);
		}
		else {
			alert("Tu navegador no soporta la Geolocalización");
		}

	}

	//Mensaje de error
	showError = (error) => {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			  alert("User denied the request for Geolocation.");
			  break;
			case error.POSITION_UNAVAILABLE:
			  alert("Location information is unavailable.");
			  break;
			case error.TIMEOUT:
			  alert("The request to get user location timed out.");
			  break;
			 default:
			  alert("An unknown error occurred.");
			  break;
	}
}


	//function showError(error) {
	//	switch(error.code) {
	//	  case error.PERMISSION_DENIED:
	//		alert("User denied the request for Geolocation.");
	//		break;
	//	  case error.POSITION_UNAVAILABLE:
	//		"Location information is unavailable."
	//		break;
	//	  case error.TIMEOUT:
	//		alert("The request to get user location timed out.");
	//		break;
	//	  case error.UNKNOWN_ERROR:
	//		alert("An unknown error occurred.");
	//		break;
	//	}
	// } 


		
	//Obtener Coordenadas
	getCoordinates = (position) => {
		console.log(position.coords.longitude);
		console.log(position.coords.latitude);
		this.setState(
			{
				lat: position.coords.latitude,
				lon: position.coords.longitude
			}
		);

	}

		//Mostrar el Mapa
		showMap = () => {
			var latlon = this.state.lat + "," + this.state.lon;
			var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=17&size=400x300&sensor=false&key=AIzaSyAoqNSoiv1sNNZ_FnlPLNMz1jYaPCYefkU";
			if (this.state.lan === null) {
				return(<p>Sin coordenadas</p>);
			} 
			else {
				return(
					<img src={img_url} alt="Mapa"/>
				);
			}
	
		}
	



	//Obtener las preguntas
	getQuestions = (inicio) => {
			quizService().then(
				question => {
					this.setState(
						{
							questionBank: question
						});
				});

	}

	//Computar la respuesta
	computeAnswer = (answer, puntaje) => {
		if (answer === "SI") {
			this.setState(
				{score: this.state.score + puntaje}
			);

		}

		this.setState(
			{
				responses: this.state.responses < 8 ? this.state.responses + 1 : 8
			}
		);

	}

	//Jugar de Nuevo
	playAgain = () => {
		this.getQuestions();
		this.setState({
			score: 0,
			responses: 0
		});
	}

	//Publicar los síntomas
	publicarSintomas = (valoracion, ubicacion) => {
		console.log("Obteniendo Coordenadas...");
		valoracion = this.state.score;
		ubicacion = this.state.lat + "," + this.state.lon;
		alert(valoracion + "," + ubicacion);
	}

	

	//Ciclo de vida
	componentDidMount(){
		this.getQuestions();
	}
	// Agregar debajo de content <div className="title">AUTO-TEST COVID-19 (SARS-COV-2)</div>
	render() {
		return (
			<Fragment>
			<div className="content">
			
			<div className="container">
				{this.state.inicio === false ? (<Inicio
				
				io	
				inicio={this.state.inicio} showshow={this.showshow} getCoordinates={this.getCoordinates} showError={this.showError}	/>): null }
				{this.state.inicio === true && this.state.questionBank.length > 0 &&
				this.state.responses < 8 && 
				this.state.questionBank.map(({question, answers, puntaje, questionId}) => (
					<QuestionBox 
					question={question} 
					options={answers} 
					key={questionId}
					selected={answer => this.computeAnswer(answer, puntaje)}
					/>
				))}

				{this.state.responses === 8 ? (<Result score={this.state.score} playAgain={this.playAgain} publicarSintomas={this.publicarSintomas} lat={this.state.lat} lon={this.state.lon} latlon={this.state.latlon} showMap={this.showMap} />) : null}


			</div>

			
			


			</div>

			<Footer/>



			</Fragment>
			);
	}
}

ReactDOM.render( <CovidTest />, document.getElementById("root") );
