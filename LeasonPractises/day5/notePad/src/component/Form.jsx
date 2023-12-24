import { useState } from "react";

const Form=( updates )=>{
    const [ mainTopic, setMainTopic] = useState("");
    const [ subTopic, setSubTopic] = useState("");
    const [ noteContent, setNoteContent] = useState("");
    
    const submitHandler =(ev) =>{
        ev.preventDefault();
        const note = {
            mainTopic,
            subTopic,
            noteContent
        }
        updates.func(note);
    }

    const edit = (note)=>{
        setMainTopic[note.mainTopic];
        setSubTopic[note.subTopic];
        setNoteContent[note.noteContent];
    }
    return(<main>
        <form className="note-form" onSubmit={submitHandler}>
            <h1>Taking notes!</h1>
            <div className="inputs">
                <input type="text" placeholder="main topic" className="main-topic" value={mainTopic} onChange={(e)=>{setMainTopic(e.target.value);}}/>
                <input type="text" placeholder="sub topic" className="sub-topic" value={subTopic} onChange={(e)=>{setSubTopic(e.target.value);}}/>
                <textarea placeholder="details" value={noteContent} onChange={(e)=>{setNoteContent(e.target.value);}} />
            </div>
            <button className="save">Save</button>
        </form>
    </main>);
}

export default Form