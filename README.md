# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


{screenWidth<=303px ? {showHome ? <App/> :
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
          <textarea  name="name" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='Enter your text here...........'></textarea>
          <img style={{filter: "invert(1000%) sepia(100%) saturate(4771%) hue-rotate(200deg) brightness(75%) contrast(200%)"}} onClick={notesFunc} src={sendIcon} />
        </div>
      </div>
    </div>}:
     {showHome ? <App/> :
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
          <textarea  name="name" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='Enter your text here...........'></textarea>
          <img style={{filter: "invert(1000%) sepia(100%) saturate(4771%) hue-rotate(200deg) brightness(75%) contrast(200%)"}} onClick={notesFunc} src={sendIcon} />
        </div>
      </div>
    </div>
}
    </>
  )
}
export default Notes