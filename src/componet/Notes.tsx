 import React from "react";
 const Cotes =({id,text, editHandler, deleteHandler }) => {
    return(
        <div className="note"> 
         <div className="note-body">
          {text}
         </div>
        <div className="note-footer" style={{justifyContent: "flex-end",}}>
           <button className="save" onClick={() => editHandler(id, text)}>
                    Edit
                </button> &nbsp; 
                 <button className="save" onClick={() => deleteHandler(id)}>
                    Delete
                </button>
         </div>

        </div>
    )
 }
 export default Cotes;
 