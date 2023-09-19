import React, { useEffect, useState } from 'react'
import {Button , Chip} from "@nextui-org/react";
import './component_css/Seb7a.css'
const Seb7a = () => {
  let [count, setCount] = useState(window.localStorage.getItem('count'));
  useEffect(()=>{
    let countSpan = document.querySelector(".seb7a .count span");
    let add = document.querySelector(".seb7a .add");
    let reset = document.querySelector(".seb7a .reset");
    
    add.addEventListener("click",()=>{
      countSpan.innerHTML++;
      window.localStorage.setItem('count', +countSpan.innerHTML);
      setCount(window.localStorage.getItem('count'))
      
    });
    reset.addEventListener("click",()=>{
      countSpan.innerHTML = 0
      window.localStorage.setItem("count" , +countSpan.innerHTML);
  
    });

    
  },[])
  return (
    <div className='seb7a'>
      <Button className='reset' color="danger" variant="bordered">Reset</Button>
      <Chip className='count' color="danger" variant="shadow">{count}</Chip>
      <Button className='add' color="success">Sabe7</Button>
    </div>
  )
}

export default Seb7a