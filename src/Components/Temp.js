import React,{useState,useEffect} from 'react';
import './css/myStyle.css';
const Temp = () => {
  const [city,setCity]= useState(null);
  const[search,setsearch]= useState("skardu");
  useEffect(() => {
    const fecthApi =async() =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8f478a1204ae0bb7e8e8919de56ce88e`;
    const response = await fetch(url);
    // console.log(response);
    const resjson = response.json();
     console.log(resjson);
  } 
    fecthApi()
  })
  return (
    <>
    <div className='box'>
        <div className='inpiutData'>
            <input
            type="search"
            className='inputField'
            onChange={(event)=>{
                 
                 
            }}/>
        </div>
      
    
    <div className='info'>
        <h2 className='location'>
        <i className="fa-thin fa-street-view"></i>skardu, Pakistan
        </h2>
        <h1 className='temp'> 25*C</h1>
        <h3 className='temp-max'>Min:5.29*cel | Max:30.4*c</h3>

    </div>
    <div className='wave -one'></div>
    <div className='wave two'></div>
    <div className='wave -three'></div>
    <div className='wave -four'></div>
    </div>
    </>
  )
}

export default Temp
