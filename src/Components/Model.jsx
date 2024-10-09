import React, { useState } from 'react';
import models from './Model.module.css';

function Model({ setInputData, addNotes, selectColor, inpuData, error }) {

    // function selectColor(e){
    //     const span = e.target;
    //     console.log(getComputedStyle(span).backgroundColor)
    // }


    return (
        <div className={models.wraper}>
            <div className={models.container}>
                <div className={models.insideBox}>
                    <h3>Create New group</h3>
                    <div className={models.groupInput}>
                        <div className={models.grpName}>
                            <h4>Group Name</h4>
                            <input type="text" placeholder='Enter group name' value={inpuData} onChange={(e) => setInputData(e.target.value)} />
                        </div>
                        {error && <p id={models.errmsg} >Please add something !</p>}
                    </div>
                    {/* <div className={models.chooseColor}>
                        <h4>Choose colour</h4>
                        <span id={models.sp1} onClick={(e)=>selectColor(e)}></span>
                        <span id={models.sp2} onClick={(e)=>selectColor(e)}></span>
                        <span id={models.sp3} onClick={(e)=>selectColor(e)}></span>
                        <span id={models.sp4} onClick={(e)=>selectColor(e)}></span>
                        <span id={models.sp5} onClick={(e)=>selectColor(e)}></span>
                        <span id={models.sp6} onClick={(e)=>selectColor(e)}>
                        </span>
                        <div className={models.createBtn}>
                            <button onClick={()=>addNotes()}>Create</button>
                        </div>
                    </div> */}
                    <div className={models.chooseColor}>
                        <div className={models.colorSection}>
                            <h4>Choose colour</h4>
                            <div className={models.colors}>
                            <span id={models.sp1} onClick={(e) => selectColor(e)}></span>
                            <span id={models.sp2} onClick={(e) => selectColor(e)}></span>
                            <span id={models.sp3} onClick={(e) => selectColor(e)}></span>
                            <span id={models.sp4} onClick={(e) => selectColor(e)}></span>
                            <span id={models.sp5} onClick={(e) => selectColor(e)}></span>
                            <span id={models.sp6} onClick={(e) => selectColor(e)}>
                            </span>
                            </div>
                        </div>
                        <div className={models.createBtn}>
                            <button onClick={() => addNotes()}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
