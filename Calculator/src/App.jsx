import styles from "./App.module.css";
import "./App.css";
import {useState} from "react";

import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
                      
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) =>{
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal (newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display  displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
