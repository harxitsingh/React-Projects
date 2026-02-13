import { useState, useEffect } from "react";
import "./App.css";
import CurrencySelect from "./component/Select";

function App() {

  // ===== STATES =====
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(0);
  const [rates, setRates] = useState({});

  // ===== FUNCTIONS =====

  // Convert Currency (Safe Version)
  const convertCurrency = () => {
    if (!amount || !rates[toCurrency]) return;
    setResult((amount * rates[toCurrency]).toFixed(2));
  };

  // Swap Currency
  const swapCurrency = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  // ===== API CALL =====
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => console.log("Error fetching rates"));
  }, [fromCurrency]);

  // Currency List From API
  const currencyOptions = Object.keys(rates);

  return (
    <div className="app-container">
      <div className="card glow-card">

        <h1>Currency Converter</h1>

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-box"
        />

        <p>Amount: {amount}</p>

        {/* Dropdown Section */}
        <div className="dropdowns">

          {/* FROM Currency */}
          <div>
            <p>FROM</p>
            <CurrencySelect
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              options={currencyOptions}
            />
          </div>

          {/* TO Currency */}
          <div>
            <p>TO</p>
            <CurrencySelect
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              options={currencyOptions}
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="buttons">
          <button onClick={convertCurrency}>Convert</button>
          <button onClick={swapCurrency}>Swap</button>
        </div>

        {/* Result */}
        <p className="result">
          Converted Amount: {result}
        </p>

      </div>
    </div>
  );
}

export default App;
