import React, { useEffect, useRef, useState } from 'react';
import Apps from './App.module.css';
import bgImg from './assets/bgimage.png';
import lockimg from './assets/lock.png';
import Notes from './Components/Notes.jsx'
import Model from './Components/Model.jsx';

function App() {

    const [inputData, setInputData] = useState("");
    const [notesData, setNotesData] = useState(() => {
        const item = localStorage.getItem('notesData');
        const initialValue = JSON.parse(item);
        console.log(item)
        return initialValue || []
    });

    const [showModal, setShowModal] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [upperText, setUpperText] = useState({});
    const [addStyle, setAddStyle] = useState();
    const [selColor, setSelColor] = useState();
    const [error, setError] = useState("");
    // const colElement = useRef();


    // useEffect(()=>{
    //     if(selColor=='_sp3_igvkd_1'){
    //         colElement.current?.classList.add(Apps.logo2)
    //     }
    //     if(selColor=='_sp1_igvkd_1'){
    //         colElement.current?.classList.add(Apps.logo)
    //     }
    //     if(selColor=='_sp2_igvkd_1'){
    //         colElement.current?.classList.add(Apps.logo1)
    //     }
    //     if(selColor=='_sp4_igvkd_1'){
    //         colElement.current?.classList.add(Apps.logo3)
    //     }
    //     if(selColor=='_sp5_igvkd_1'){
    //         colElement.current?.classList.add(Apps.logo4)
    //     }
    //     if(selColor=='_sp6_igvkd_1'){
    //          colElement.current?.classList.add(Apps.logo5)
    //     }
    // },[notesData]);


    function selectColor(e) {
        const span = e.target;
        setSelColor(getComputedStyle(span).backgroundColor);
    }
    console.log(upperText.upperLogoText)


    function createNotes(e, index) {
        // const logoBg = e.currentTarget.childNodes[0].firstElementChild;
        // console.log(getComputedStyle(logoBg).backgroundColor)
        let upperValues = {};
        setShowNotes(true);
        setAddStyle(index);
        upperValues.upperLogoText = e.currentTarget.firstElementChild.firstElementChild.innerText;

        upperValues.upperText = e.currentTarget.lastElementChild.lastElementChild.innerText;
        upperValues.logoBG = getComputedStyle(e.currentTarget.childNodes[0].firstElementChild).backgroundColor;
        setUpperText(upperValues);
    }
    console.log(upperText)

    const newGroup = { name: inputData, color: selColor };
    function addNotes() {
        // setNotesData([...notesData, newGroup]);
        // localStorage.setItem('notesData', JSON.stringify([...notesData,newGroup]));
        // setShowModal(false);
        if (inputData == '') {
            // alert("Please add somthing!");
            setShowModal(true);
             alert("Please add Somthing !")
        }
        else {
            setNotesData([...notesData, newGroup]);
            localStorage.setItem('notesData', JSON.stringify([...notesData, newGroup]));
            setShowModal(false);
            setInputData("");
            setError("");
        }
    }
    // useEffect(() => {
    //     localStorage.setItem('notesData', JSON.stringify(notesData));
    // }, [notesData]);

    console.log(notesData)
    function createFunc() {
        setShowModal(true)
    }

    return (

        <div className={Apps.container}>
            <div className={Apps.groupSection}>
                <div className={Apps.noteHeading}>
                    <h1>Pocket Notes</h1>
                </div>
                <div className={Apps.groupHead}>
                    <div className={Apps.groupLogoText}>
                        {/* {notesData.map((item, index) => {
                                return <div key={index}  onClick={(e) =>  createNotes(e, index)} className={addStyle == index ? Apps.logoContainer : ""}>
                                <div className={Apps.logo}>
                                    <p>{String(item).charAt(0)}{String(item).charAt(String(item).indexOf(' ') + 1)}</p>
                                    <h3>{item}</h3>
                                </div>
                            </div>
                        })} */}
                        {notesData.map((item, index) => {
                            return <div key={index} onClick={(e) => createNotes(e, index)} className={addStyle == index ? Apps.logoContainer : ""}>
                                <div className={Apps.logo} >
                                    <p style={{ backgroundColor: item.color }}>{String(item.name).charAt(0).toUpperCase()}{String(item.name).charAt(String(item.name).indexOf(' ') + 1).toUpperCase()}</p>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        })}
                        {/* <div className={Apps.logo}>
                            <p>MN</p>
                            <h3>My Notes</h3>
                        </div>    */}
                    </div>
                    <div className={Apps.btn}>
                        <button onClick={createFunc}>+</button>
                    </div>
                </div>
            </div>
            {/* <Notes/> */}
            {showModal && <Model
                inputData={inputData}
                setInputData={setInputData}
                notesData={notesData}
                setNotesData={setNotesData}
                addNotes={addNotes}
                selectColor={selectColor}
                error={error}
            />}

            {showNotes ? <Notes upperText={upperText} createNotes={createNotes} /> : <div className={Apps.notessection}>
                <img src={bgImg} />
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <span><img src={lockimg}/>end-to-end encrypted</span>
            </div>}
        </div>
    )
}

export default App
