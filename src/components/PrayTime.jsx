import React, { useEffect, useState } from 'react'
import './component_css/PrayTime.css'
import PrayTable from './PrayTable';
const PrayTime = () => {
    const [todayDate, setTodayDate]= useState("");
    const [pray, setPray]= useState({});
    const [timeNow, setTimeNow] = useState("");
    const day = new Date().getDate();
    useEffect(()=>{
        fetch("https://api.aladhan.com/v1/calendarByAddress/2023/9?address=Egyptian%20General%20Authority%20of%20Survey&method=1")
        .then(res => res.json())
        .then(data => {
            setPray(data.data[day])
            setTodayDate(data.data[day - 1].date.readable)
        });
    },[day])
    // Depending on timezone, your results will vary
    function getTime(){
        var event = new Date().toLocaleTimeString('en-us');
        setTimeNow(event);
    }
    setInterval(getTime , 1000)
  return (
    <div className='pray-time text-center'>
        <h1>Today : {todayDate}</h1>
        <div className="clock">
            <span className='time'>{timeNow}</span>
        </div>
    </div>
  )
}

export default PrayTime