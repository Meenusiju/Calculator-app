import React, { useState } from 'react';
import './App.css'


function App() {
  
 const [result, setResult] = useState("0");

 const handleClick = (val) => {
   if(result ==0 || result == '.'){
     
    return setResult(val.target.name);
   }else{
    setResult(result.concat(val.target.name));
   }
  
 }
 const handleClear = () => {
   setResult("0");
 }
 const handleDelete = () => {
   setResult(result.slice(0,-1));
 }
 const CalculateResult = () => {
   try {
    setResult(eval(result).toString())
   }catch{
     setResult("Error")
   }
    
 }

  return (
    <>
      <div className='container py-5 h-100'>
        <div className='d-flex justify-content-center'>
          <div className='col-12 col-sm-8 col-md-5'>
            <div className='card bg-secondary  border-secondary'>
              <div className='card-body  mt-4 mb-3 text-center'>
                <div className='card-header bg-dark'>
                  <h2 className='text-center text-white'>Simple Calculator</h2>
                </div>
                <div className='mt-md-4 pb-4'>
                  <input className='form-control text-end bg-light' id="result" defaultValue="0" value={result}type="text"/>
                </div>
                <div >
                    <button type="button" id="clear" name="clear" onClick={handleClear} className=" p-2 col-sm-3 col-md-3">AC</button>
                    <button type="button" id="delete" name="delete" onClick={handleDelete} className=" p-2 col-sm-3 col-md-3">DEL</button>
                    <button type="button" id="equal" name="equal" onClick={CalculateResult} className="btn-success col-sm-3 col-md-3 p-2">=</button>
                    <button type="button" id="divide"name="/" onClick={handleClick}  className="btn-danger col-sm-3 col-md-3 p-2">/</button>
                </div>
                <div >
                    <button type="button" name="7" onClick={handleClick} id="7" className="p-2 col-sm-3 col-md-3">7</button>
                    <button type="button" id="8" name="8" onClick={handleClick} className="p-2 col-sm-3 col-md-3">8</button>
                    <button type="button" id="9"name="9" onClick={handleClick} className="p-2 col-sm-3 col-md-3">9</button>
                    <button type="button" id="multiply" name="*" onClick={handleClick} className="p-2 btn-danger col-sm-3 col-md-3">*</button>
                </div>
                <div >
                    <button type="button" id="4" name="4" onClick={handleClick} className="p-2 col-sm-3 col-md-3">4</button>
                    <button type="button" id="5" name="5" onClick={handleClick} className="p-2 col-sm-3 col-md-3">5</button>
                    <button type="button" id="6" name="6" onClick={handleClick} className="p-2 col-sm-3 col-md-3">6</button>
                    <button type="button" id="subtract" name="-" onClick={handleClick} className="p-2 btn-danger col-sm-3 col-md-3">-</button>
                </div>
                <div >
                    <button type="button" id="1" name="1" onClick={handleClick} className="p-2 col-sm-3 col-md-3">1</button>
                    <button type="button" id="2" name="2" onClick={handleClick} className="p-2 col-sm-3 col-md-3">2</button>
                    <button type="button" id="3" name="3" onClick={handleClick} className="p-2 col-sm-3 col-md-3">3</button>
                    <button type="button" id="add" name="+" onClick={handleClick} className="p-2 btn-danger col-sm-3 col-md-3">+</button>
                </div>
                <div>
                    <button type="button" id="0" name="0" onClick={handleClick} className="button-1 col-sm-6 col-md-6  p-2">0</button>
                    <button type="button" disabled={result.includes('.') ? "true": "" } id="dot" name="." onClick={handleClick} className="button-1 col-sm-3 col-md-3 p-2">.</button>
                    <button type="button" id="percentile" name="%" onClick={handleClick} className="button-1 col-sm-3 col-md-3 btn-danger p-2">%</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
    

  );
}

export default App;
