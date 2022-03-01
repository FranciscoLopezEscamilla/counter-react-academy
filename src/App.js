import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import Profile from "./components/Profile";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const operationHandler = (operation) => {
    operation === "add" && setCounter((prev) => prev + 1); //nueva forma de hacerlo vista en la sesión previa
    operation === "substract" && setCounter((prev) => prev - 1);
  };

  const person = {
    name: "Francisco",
    lastName: "López",
    age: 22,
  };

  return (
    <div className="App">
      <Display number={counter} title="Contador" />
      {counter > 0 && (
        <button
          onClick={() => operationHandler("substract")}
          disabled={!counter}
        >
          Restar -1
        </button>
      )}
      <button onClick={() => operationHandler("add")} disabled={counter >= 10}>
        Sumar +1
      </button>
      <Profile {...person} />
    </div>
  );
};

export default App;
