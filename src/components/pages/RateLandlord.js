import './RatePages.css';
import React, {useState} from 'react';
import Modal from "../Modal";
import CheckboxComponent from "../Checkbox";
import Header from "../Header";
// import Footer from "../Footer";
import Note from "../Note";
import DefaultNotes from "../notes";
// import "./App.css";
import DateSelector from "../DateSelector"
import CheckboxController from "../ConditionalTextfield";


function Landlords() {
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
            {/*<Header/>*/}
            <body>
            <div className="firstOptions">
                <section>
                    <article>
                        <div className="alignedQuestion">
                            <p>Would you like to submit this form anonymously? </p>
                            <CheckboxComponent/>
                        </div>
                    </article>
                    <article>
                        <div className="alignedQuestion">
                            <p>What dates were you at the property?</p>
                            <p>Start Date:</p>
                            <DateSelector/>
                            <p>End Date:</p>
                            <DateSelector/>
                        </div>
                    </article>
                    <article>
                        <div className="alignedQuestion">
                            <p>Is your landlord part of a professional agency? </p>
                            <CheckboxController/>
                        </div>
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
                        <div className="alignedQuestion">
                            <p>Are you happy to be contacted by prospective tenants about the property?</p>
                            <CheckboxComponent/>
                        </div>

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
export default Landlords;
