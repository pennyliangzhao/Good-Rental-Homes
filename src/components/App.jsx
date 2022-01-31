import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DefaultNotes from "../notes";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <div className="defaultNotes">
                {DefaultNotes.map(item => (
                    <Note
                        key={item.key}
                        title={item.title}
                        content={item.content}
                        star={deleteNote}
                    />))}
            </div>
            <div className="CreatArea">
                <CreateArea onAdd={addNote}/>
                {notes.map((noteItem, index) => {
                    return (
                        <div>
                            <Note
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                onDelete={deleteNote}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="contactMe">
                <p>Contact me:- the tenant may choose to offer to beavailable to chat with othertenants thinking of
                    renting from this landlord via a convenient messaging service.Or phone. see more below</p>
            </div>
            <Footer/>
        </div>
    );

}


export default App;
