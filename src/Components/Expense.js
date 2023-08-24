import React, { useState } from "react";

function Expense() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const handleExpense = (e, type) => {
    e.preventDefault();
    if (!amount) return;
    if (type === "Add") {
      setBalance(Number(balance) + Number(amount));
    } else {
      setBalance(Number(balance) - Number(amount));
    }
    setTransactions((prevValue) => [
      ...prevValue,
      {
        amount,
        type,
        date: new Date().toISOString(),
      },
    ]);
    setAmount("");
  };


  const styles = {
    container: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
    },
    ram: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: '10vh',
    },
    calculator: {
      backgroundColor: '#ecf0f3',
      padding: '15px',
      borderRadius: '30px',
      boxShadow: 'inset 5px 5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, 0.16)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 67px)',
    },
    equal: {
      width: '110px',
      height: '46px',
      borderRadius: '40px',
      backgroundColor: '#ecf0f3',
      border: 'none',
      boxShadow: 'inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0, 0, 0, 0.16)',
    },
    ator: {
      height: '46px',
      width: '86px',
      backgroundColor: '#ecf0f3',
      boxShadow: 'inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0, 0, 0, 0.16)',
      border: 'none',
      borderRadius: '50%',
      margin: '8px',
      fontSize: '16px',
    },
    rom: {
      gridColumn: 'span 4',
      height: '70px',
      width: '230px',
      backgroundColor: '#ecf0f3',
      boxShadow: 'inset -5px 5px 12px #ffffff, inset 5px 5px 12px rgba(0, 0, 0, 0.16)',
      border: 'none',
      borderRadius: '30px',
      color: 'rgb(70, 70, 70)',
      fontSize: '50px',
      textAlign: 'end',
      margin: 'auto',
      marginTop: '40px',
      marginBottom: '30px',
      padding: '20px',
    },
    hey: {
      width: '260px',
      backgroundColor: '#ecf0f3',
    },
    bor: {
      border: '2px solid blue',
      height:'400px'
    }
  };
  
  return (
    
    <div style={styles.bor} >
      <h1 style={styles.ram}>Expense Tracker Basic</h1>
      <div style={styles.container}>
      <form >
        <h3>{`Balance : ${balance}`}</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.rom}
        />
        <div >
          <button style={styles.ator} onClick={(e) => handleExpense(e, "Added")}>Add</button>
          <button  style={styles.ator} className="hey" onClick={(e) => handleExpense(e, "Removed")}>Remove</button>
          
        </div>
      </form>
      {transactions?.length ? (
        <ul>
          <h3>Transactions</h3>
          {transactions.map((transaction) => (
            <li>{`${transaction.date} - ${transaction.amount} - ${transaction.type}`}</li>
          ))}
        </ul>
        ) : null}
        </div>
      </div>
      
  );
}
export default Expense;