import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calculatorsss = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const id = localStorage.getItem("value");

  const FetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/operator/${id}`);
      console.log(res.data);
      setOperator(res.data.user.operator);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      FetchData();
    }
  }, [id]);

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    let calcResult;

    switch (operator) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by 0';
        break;
      default:
        calcResult = 'Invalid operator';
    }

    setResult(calcResult);
    setFirstValue("")
    setSecondValue("")
  };

  const handleLogout = () => {
    localStorage.removeItem('value');  
    window.location.href = '/login';   
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2>Calculator</h2>

      <label>Result</label>
      <input
        value={result}
        readOnly
        placeholder="Result"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />

      <label>First Value</label>
      <input
        type="number"
        value={firstValue}
        onChange={(e) => setFirstValue(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />

      <label>Second Value</label>
      <input
        type="number"
        value={secondValue}
        onChange={(e) => setSecondValue(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />

      <label>Operator (Fetched from backend): {operator}</label>

      <button
        onClick={handleCalculation}
        style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Calculate
      </button>

      <button
        onClick={handleLogout}
        style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
};

export default Calculatorsss;
