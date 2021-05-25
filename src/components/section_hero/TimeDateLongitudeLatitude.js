import React, { useState, useEffect } from 'react';

function TimeAndDate() {

  // actual date
  const [dayName, setDayName] = useState(new Date().getDay());
  const [dayNumber, setDayNumber] = useState(new Date().getDay());
  const [monthNumber, setMonthNumber] = useState(new Date().getMonth());
  const [yearNumber, setYearNumber] = useState(new Date().getFullYear());

  if(dayName === 1) {
    setDayName('Monday');
  } 
  if(dayName === 2) {
    setDayName('Tuesday');
  } 
  if(dayName === 3) {
    setDayName('Wednesday');
  } 
  if(dayName === 4) {
    setDayName('Thursday');
  } 
  if(dayName === 5) {
    setDayName('Friday');
  } 
  if(dayName === 6) {
    setDayName('Saturday');
  } 
  if(dayName === 7) {
    setDayName('Sunday');
  } 

  const getActualDate = () => {
    setInterval(()=> {
      setDayName(new Date().getDay());
      setDayNumber(new Date().getDay());
      setMonthNumber(new Date().getMonth());
      setYearNumber(new Date().getFullYear());
    }, 1000);
  };

  useEffect(() => {
    getActualDate()
  }, [dayName, dayNumber, monthNumber, yearNumber]);
    
  // actual time
  const [houres, setHoures] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const getActualTime = () => {
    setInterval(() => {
      setHoures(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000)
  };

  useEffect(() => {
    getActualTime()
  }, [seconds, minutes, houres]);

  // actual latitude & longitude
  const [latitude, setLatitude] = useState(navigator.geolocation.getCurrentPosition((position) => {
      setLatitude((position.coords.latitude).toFixed(2));
  }));
  const [longitude, setLongitude] = useState(navigator.geolocation.getCurrentPosition((position) => {
    setLongitude((position.coords.longitude).toFixed(2));
  }));
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setInterval(() => {
        setLatitude((position.coords.latitude).toFixed(2));
        setLongitude((position.coords.longitude).toFixed(2));
      }, 1000);
    });
  }, [latitude, longitude])

  return (
    <div className="date-clock-latitude-longitude-container">
      <div className="actual-date">
        <p className="actual-date__title">Actual date :</p>
        <p className="actual-date__day-name"><span className="date-spacing">{dayName},</span></p>
        <p className="actual-date__dd"><span className="date-spacing">{dayNumber <10 ? `0${dayNumber}` : dayNumber}</span>-</p>
        <p className="actual-date__mm"><span className="date-spacing">{monthNumber <10 ? `0${monthNumber}` : monthNumber}</span>-</p>
        <p className="actual-date__yy"><span className="date-spacing">{yearNumber <10 ? `0${yearNumber}` : yearNumber}</span></p>
      </div>
      <div className="actual-time">
        <p className="actual-time__title">Actual time :</p>
        <p className="actual-time__houres time-info"><span className="dots">{houres <10 ? `0${houres}` : houres}</span>:</p>
        <p className="actual-time__minutes time-info"><span className="dots">{minutes <10 ? `0${minutes}` : minutes}</span>:</p>
        <p className="actual-time__seconds time-info"><span className="dots">{seconds <10 ? `0${seconds}` : seconds}</span></p>
      </div>
      <div className="actual-longitude-latitude">
        <div className="latitude__label-value">Your latitude: <span className="latitude__value">{latitude}°</span></div>
        <div className="longitude__label-value">Your longitude: <span className="latitude__value">{longitude}°</span></div>
      </div>
    </div>
  )
}

export default TimeAndDate
