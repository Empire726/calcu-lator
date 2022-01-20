import React, {useState} from 'react';
import styles from '../StyleSheet/Home/Home.module.css';

const Home = () => {
  const [result, setResult] = useState ("");

const handleClick =(e) => 
     setResult (result.concat(e.target.name))

    const clear = () =>{
        setResult("");
    } 

    const calculate = () => {
    try{

    
    setResult (eval(result).toString()); 
    }
    catch(Error){
      setResult("ERROR")
    }
    }
    const backspace = () => {
  setResult (result.slice(0,result.length - 1));
}
 
  return (<>

      <div className={styles['calcu-body']}>
      {/* --------------------------------------------------------------------------------------------------------- */}
      <form>
        <input type="text" value={result}/>
      </form>

      <div className={styles['keyword']}>
      {/* ---------------------------------------------------------------------------------------------------------     */}

        <button onClick={clear} id="clear" className={styles['clear']}>clear</button>
        <button onClick={backspace} id="backspace" className={styles['backspace']}>c</button>
        <button  onClick={handleClick} name="+" className={styles['highlight']}>+</button>
        <button  onClick={handleClick} name="7" className={styles['i']}>7</button>
        <button  onClick={handleClick} name="8" className={styles['i']}>8</button>
        <button  onClick={handleClick} name="9" className={styles['i']}>9</button>
        <button  onClick={handleClick} name="-" className={styles['highlight']}>&ndash;</button>
        <button  onClick={handleClick} name="4" className={styles['i']}>4</button>
        <button  onClick={handleClick} name="5" className={styles['i']}>5</button>
        <button  onClick={handleClick} name="6" className={styles['i']}>6</button>
        <button  onClick={handleClick} name="*" className={styles['highlight']}>&times;</button>
        <button  onClick={handleClick} name="1" className={styles['i']}>1</button>
        <button  onClick={handleClick} name="2" className={styles['i']}>2</button>
        <button  onClick={handleClick} name="3" className={styles['i']}>3</button>
        <button  onClick={handleClick} name="/" className={styles['highlight']}>&divide;</button>
        <button  onClick={handleClick} name="0" className={styles['i']}>0</button>
        <button  onClick={handleClick} name="." className={styles['i']}>.</button>
        <button  onClick={calculate} name="=" className={styles['result']}>=</button>
      </div>
    </div>
  </>
  );
}

export default Home;
