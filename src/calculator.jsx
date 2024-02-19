import './calculator-css.css';
import { useState } from 'react';
import {evaluate} from 'mathjs';

export function Calculator(){
     const [value , setValue] = useState('');
     const [keypad , setKeypad] = useState('');
     const [checkon , setCheckOn] = useState(false)
     const [checkkeypad , setCheckkeypad] = useState(true);
     const [res , setRes] = useState();

     function switchOn(e){
          if (e.target.checked){
               setValue('0');
               setCheckOn(true);
               setCheckkeypad(false)
          }else{
               setValue('');
               setKeypad('');
               setCheckOn(false)
               setCheckkeypad(true)
          }
     }
     const handleKeypad = (e) =>{
          if(checkon){
               e.preventDefault();
               var num = e.target.name;
               setKeypad(keypad+num);
               
          }else{
               setValue('');
          }
     };
     function result(e){
          e.preventDefault();
          const resvalue = evaluate(String(keypad));
          setRes(resvalue);
          setKeypad(res)
     }
     function delPad(e){
          e.preventDefault();
          setKeypad((keypad) => (keypad.slice(0,-1)));
     }
     function allClearPad(e){
          e.preventDefault();
          setKeypad('');
     }
     return(
          <div className="container">
               <div className='calculator'>
                    <form >
                         <div className='form-switch d-flex justify-content-end mt-4' >
                              <input onChange={switchOn} type='checkbox' className='form-check-input' />
                         </div>
                         <div >
                              <input id='display' readOnly style={{pointerEvents:'none'}}  placeholder={value} value={keypad} />
                         </div>
                         <div id='buttons'>
                              <div>
                                   <button disabled={checkkeypad} onClick={allClearPad} className="btn btn-danger" >AC</button>
                                   <button disabled={checkkeypad} onClick={delPad} className="btn btn-warning">DEL</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='%' className="btn btn-secondary">%</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='+' className="btn btn-secondary">+</button>
                              </div>
                              <div>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='1' className="btn btn-primary">1</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='2' className="btn btn-primary">2</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='3' className="btn btn-primary">3</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='-' className="btn btn-secondary">-</button>
                              </div>
                              <div>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='4' className="btn btn-primary">4</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='5' className="btn btn-primary">5</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='6' className="btn btn-primary">6</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='*' className="btn btn-secondary">*</button>
                              </div>
                              <div>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='7' className="btn btn-primary">7</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='8' className="btn btn-primary">8</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='9' className="btn btn-primary">9</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='/' className="btn btn-secondary">/</button>
                              </div>
                              <div>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='.' className="btn btn-primary">.</button>
                                   <button disabled={checkkeypad} onClick={handleKeypad} name='0' className="btn btn-primary">0</button>
                                   <button disabled={checkkeypad} onClick={result} className="equal" style={{width:'46%'}}>=</button>   
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     )
}