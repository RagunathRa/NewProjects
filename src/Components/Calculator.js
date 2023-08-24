import React, { useState } from 'react';
import { evaluate } from 'mathjs';


      const Calculator = () => {
        const [output, setOutput] = useState('');
      
        const display = (num) => {
          setOutput(output + num);
        };
        
        
        const calculate = () => {
          try {
            const result = evaluate(output);
            setOutput(String(result));
          } catch (error) {
            alert('Invalid expression');
          }
        };
        
        const clear = () => {
          setOutput('');
        };
      
        const del = () => {
          setOutput(output.slice(0, -1));
        };
      
        const styles = {
          
            container: {
              // height: '65vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
                  width: '46px',
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
              
        };
      
    return (
      <>     <h1 style={styles.ram}> Calculator </h1>
          <div>
        <div style={styles.container}>
              <div style={styles.calculator}>
                <input
                  style={styles.rom}
                  type="text"
                  placeholder="0"
                  value={output}
                  onChange={() => {}}
                />
            <div style={styles.hey}>
                  <button style={styles.ator} onClick={clear}>
                    cl
                  </button>
                  <button style={styles.ator} onClick={del}>
                         Del
                  </button>
                  <button style={styles.ator} onClick={() => display('%')}>
                    %
                  </button>
                  <button style={styles.ator} onClick={() => display('/')}>
                    /
                  </button>
                  <button style={styles.ator} onClick={() => display('7')}>
                    7
                  </button>
              <button style={styles.ator} onClick={() => display('8')}>
                    8
                  </button>
                  <button style={styles.ator} onClick={() => display('9')}>
                    9
                  </button>
                  <button style={styles.ator} onClick={() => display('*')}>
                    *
                  </button>
               <button style={styles.ator} onClick={() => display('4')}>
                    4
                    </button>
                  <button style={styles.ator} onClick={() => display('5')}>
                    5
                  </button>
            <button style={styles.ator} onClick={() => display('6')}>
                    6
                  </button>
                  <button style={styles.ator} onClick={() => display('-')}>
                    -
                  </button>
                  <button style={styles.ator} onClick={() => display('1')}>
                    1
                  </button>
                  <button style={styles.ator} onClick={() => display('2')}>
                    2
                  </button>
                  <button style={styles.ator} onClick={() => display('3')}>
                    3
                  </button>
                  <button style={styles.ator} onClick={() => display('+')}>
                    +
                  </button>
                  <button style={styles.ator} onClick={() => display('.')}>
                    .
                  </button>
                  <button style={styles.ator} onClick={() => display('0')}>
                    0
                  </button>
                  <button style={styles.equal} onClick={calculate}>
                    =
                  </button>
                 </div>
              </div>
            </div>
          </div>
          </>
        );
      };
      
      export default Calculator;
      


