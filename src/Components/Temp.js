import React,{useState,useEffect} from 'react';
import './css/myStyle.css';
const Temp = () => {
  const [city,setCity]= useState(null);
  const[search,setsearch]= useState("islamabd");
  useEffect(() => {
    const fecthApi =async() =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8f478a1204ae0bb7e8e8919de56ce88e`;
    const response = await fetch(url);
    console.log(response);
    const resjson = await response.json();
  console.log(resjson);
    setCity(resjson.main);
  } 
    fecthApi();
  },[search])
  return (
    <>
    <div className='box'>
        <div className='inpiutData'>
            <input
            type="search"
            className='inputField'
            onChange={(event)=>{
              setsearch(event.target.value);  
                 
            }}/>
        </div>
      {!city?
      (
        <p>Not Found</p>
      ):
      (
    <div>
    <div className='info'>
        <h2 className='location'>
        <i className="fa-thin fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'> {city.temp}°c</h1>
        <h3 className='temp-max'>Min:{city.temp_min}°c | Max:{city.temp_max}°c</h3>

    </div>
    <div className='wave -one'></div>
    <div className='wave two'></div>
    <div className='wave -three'></div>
    <div className='wave -four'></div>
   
    </div>
    )
  }
  </div>
    </>
  )
}

export default Temp
