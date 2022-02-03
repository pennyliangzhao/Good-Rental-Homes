import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import DefaultNotes from "../notes";
import "./App.css";
import Modal from"./Modal";

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
            <body>
            <div className="firstOptions">
                <section>
                    <article>
                        <p>Would you like to submit this form anonymously? [Yes/No] </p>
                    </article>
                    <article>
                        <p>What dates were you at the property? [Start Date] [End Date] </p>
                    </article>
                    <article>
                        <p>Is your landlord part of a professional agency? [Yes/No] [OPTIONAL BOX] </p>
                    </article>
                </section>
            </div>
            <div className="defaultNotes">
                {DefaultNotes.map(item => (
                    <Note
                        key={item.key}
                        title={item.title}
                        content={item.content}
                        star={deleteNote}
                    />))}
            </div>

            <div className="contactMe">
                <section>
                    <article>
                        <h3>Overall comments about the landlord</h3>
                        <textarea>
                         Your other comments about the landlord
                         </textarea>

                    </article>
                    <article>
                        <p>Are you happy to be contacted by prospective tenants about the property?[YES/NO]
                        </p>
                    </article>
                    <article>
                        <button>Submit</button>
                        <Modal/>
                    </article>
                </section>
            </div>
            </body>


        </div>

    );

}


export default App;