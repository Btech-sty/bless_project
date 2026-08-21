import React from "react";
const Notes = ({inputText, setInputText, saveHandler}) => {
    const char  = 200;
    const charLimt = char - inputText.length; 

    return (
        <>
        <div className="notes">
            <textarea
            rows={5}
            cols={10}
            placeholder="type.........."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} 
            maxLength={100}
            ></textarea>
            <div className="note-footer">
                <span className="label"> {charLimt} Left</span>
                <button className="save" onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div>
        </>
    );
}

export default Notes;