import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);
  
  const handleSubmit=(e)=>{
   e.preventDefault();
  let amount=parseInt(count);
  // console.log(typeof amount);
  if(count<=0){
    amount=0
  }
  if(count>8){
    amount=8
  }
    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    <h3>Bored of Lorem Ipsum dummy text?</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor='amount'>
        Paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button type="submit" className="btn">Generate text</button>
      <article className='lorem-text'>
      {text.map((item,index)=>{
        return (
          <p key={index}>{item}</p>
        )
      })}
      </article>
    </form>
  </section>
    )
}

export default App;