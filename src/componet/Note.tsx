import React, { useEffect, useState } from "react";
import Createnotes from "./Creatnotes";
import './note.css'
import { v4 as uuidv4 } from 'uuid';
import Cotes from "./Notes";
const Note = () => {
    const [inputText, setInputText] = useState("");
    const [note, setNote] = useState([]);
    const [editToggle , setEditToggle] = useState(null);


    const editHandler = (id, text) => {
        setEditToggle(id);
        setInputText(text);

    }
    const saveHandler = () => {
        if (editToggle) {
            setNote(note.map((note) => note.id === editToggle ?
                { ...note, text: inputText } : note));

        } else {
        setNote((prevNotes) => [...prevNotes, {
            id: uuidv4(),
            text: inputText
        }])
    } 
         setEditToggle(null);
        setInputText("");
    } 

const deleteHandler = (id) => {
    setNote(note.filter((note) => note.id !== id));
}

    useEffect(() =>{
        const data = JSON.parse (localStorage.getItem("Note"))
        if (data) {
            setNote(data) 
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem("Note",JSON.stringify(note))
    }, [note])
  return (
    <div className="note-container">
        {
            note.map((note)=>(
                editToggle === note.id ? (
                    <Createnotes inputText={inputText} setInputText={setInputText} 
                    saveHandler={saveHandler} />
                ) : (
                    <Cotes
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                )
            ))
        }
        {
            editToggle === null && (
                <Createnotes inputText={inputText} setInputText={setInputText} 
                    saveHandler={saveHandler} />
            )
        }
    </div>
  ); 
};

export default Note;