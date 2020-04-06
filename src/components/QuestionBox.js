import React, {useState} from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: "bold",
    padding: '6px 12px',
    border: '1px solid',
    marginRight: '2rem',
    lineHeight: 1.5,
    color: '#ffffff',
    backgroundColor: '#4671c6',
    borderColor: '#0063cc',
    marginBottom: '0.5rem',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
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




const QuestionBox = ({question, options, selected, imgId}) => {
  //Adquirir el ID para las imágenes
  const img1 = require(`../img/${imgId}.png`);

  const classes = useStyles();
  const [answer, setAnswer] = useState(options);
  window.scrollTo(0, 0);
  return (
    <div className="questionBox">
      <div className="questionImg">
      <img src={img1} alt="icon"/>
      </div>
      <div className={"question"}>{question}</div>
      {answer.map((text, index) => (
        <Button
          variant="outlined" 
          color="primary"
          key={index}
          className={classes.root}
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default QuestionBox;
