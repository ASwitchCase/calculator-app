import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';
import React from 'react';

var text = "";

function App() {
  return (
    <div>

      <div className="App-box">
        <Box/>
        <br/>
        <div id = "text-box" className="App-box-text"></div>
        <br/>

        <div>
          <button onClick={() => appendText("0")}className="App-button">0</button>
          <button onClick={() => appendText("1")}className="App-button">1</button>
          <button onClick={() => appendText("2")}className="App-button">2</button>
          <button onClick={() => appendText("+")} className="App-button-two">+</button>
          <button onClick={() => appendText("-")} className="App-button-two">-</button>
          <br/>
          <button onClick={() => appendText("3")} className="App-button">3</button>
          <button onClick={() => appendText("4")} className="App-button">4</button>
          <button onClick={() => appendText("5")} className="App-button">5</button>
          <button onClick={() => appendText("*")} className="App-button-two">*</button>
          <button onClick={() => appendText("/")} className="App-button-two">/</button>
          <br/>
          <button onClick={() => appendText("6")} className="App-button">6</button>
          <button onClick={() => appendText("7")} className="App-button">7</button>
          <button onClick={() => appendText("8")} className="App-button">8</button>

          <button onClick={() => appendText("= " + convertToCode(document.getElementById("text-box").innerHTML))} className="App-button-long">Calc</button>
          <br/>
          <button onClick={() => appendText("9")} className="App-button">9</button>
          <button onClick={() => appendText(".")} className="App-button">.</button>
          <button onClick={() => appendText(" ")} className="App-button">_</button>


          <button onClick={() => clearText()} className="App-button-long">Clear</button>

        </div>
      </div>
    </div>
  );
}

function appendText(newText){
  text = text + newText;
  document.getElementById("text-box").innerHTML = text;
}

function clearText(){
  text = "";
  document.getElementById("text-box").innerHTML = text;
}

function convertToCode(code){
  clearText()
  try{
  return eval(code);
  }catch(error){}
}

export default App;
