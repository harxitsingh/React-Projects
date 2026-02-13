function CurrencySelect({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map(currency => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelect;
