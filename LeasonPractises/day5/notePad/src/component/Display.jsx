import { useState } from 'react';
import './Display.css'


const Display = (props) =>{
    const {edit, setEdit, note} = props;
    const [ mainTopic, setMainTopic] = useState(note.mainTopic);
    const [ subTopic, setSubTopic] = useState(note.subTopic);
    const [ noteContent, setNoteContent] = useState(note.noteContent);
    
    return(
        <>
            <form className="note-form">
                <h1>Previous notes!</h1>
                <div className="inputs">
                    <input type="text" placeholder="main topic" className="main-topic" value={mainTopic} onChange={(e)=>{setMainTopic(e.target.value);}}/>
                    <input type="text" placeholder="sub topic" className="sub-topic" value={subTopic} onChange={(e)=>{setSubTopic(e.target.value);}}/>
                    <textarea placeholder="details" value={noteContent} onChange={(e)=>{setNoteContent(e.target.value);}} />
                </div>
            </form>
        </>
    )

}

export default Display