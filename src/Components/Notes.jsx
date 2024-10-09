import React, { useState, useEffect, useRef } from 'react';
import notes from './Notes.module.css';
import sendIcon from '../assets/sendicon.png';
import App from '../App';

function Notes({ upperText, createNotes }) {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [textInput, setTextInput] = useState("");
  const [showtext, setShowText] = useState([]);
  const [showHome, setShowHome] = useState(false);
  console.log(textInput.length);

  useEffect(() => {
    setShowText(JSON.parse(localStorage.getItem(upperText.upperText)) || []);
    console.log(showtext);
  }, [upperText.upperText, setShowText]);

  function handleOnback() {
      setShowHome(true);
     
  }

  function notesFunc() {
    const d = new Date();

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    console.log(year, month, day)
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const notes = (JSON.parse(localStorage.getItem(upperText.upperText))) || [];
    const newobj = {
      text: textInput,
      date: String(d.getDate()),
      month: months[d.getMonth()],
      year: d.getFullYear(),
      hours: hours,
      minutes: minutes,
      ampms: ampm
    }
    notes.push(newobj);
    localStorage.setItem(upperText.upperText, JSON.stringify(notes))
    setShowText(notes);
    setTextInput("")
  }


  return (
    <>
   {showHome ? < App /> :
        <div className={notes.container}>
          <div className={notes.upperSection}>
            <div className={notes.logo}>
              <i onClick={handleOnback} class="fa-solid fa-arrow-left"></i>
              <p style={{ backgroundColor: upperText.logoBG }}>{upperText.upperLogoText}</p>
              <h3>{upperText.upperText}</h3>
            </div>
          </div>
          <div className={notes.content}>
            {showtext.map((item, index) => {
              return <div key={index} className={notes.contentSection}>
                <p>{item.text}</p>
                <span>{item.date} {item.month} {item.year} <li> </li>{item.hours}:{item.minutes} {item.ampms}</span>
              </div>
            })}
          </div>
          <div className={notes.textNotes}>
            <div className={notes.textArea} >
              <textarea name="name" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='Enter your text here...........'></textarea>
              <img onClick={textInput ? notesFunc : null}
        style={{
          cursor: textInput ? 'pointer' : 'not-allowed',
          opacity: textInput ? 1 : 0.5,
          filter: textInput?"invert(100%) sepia(100%) saturate(5148%) hue-rotate(240deg) brightness(100%) contrast(400%)":
           "invert(80%) sepia(0%) saturate(2101%) hue-rotate(29deg) brightness(85%) contrast(99%)"
        }}    src={sendIcon} />
            </div>
          </div>
        </div>
      } 
       
    </>
  )
}
export default Notes