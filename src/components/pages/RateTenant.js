// import React from 'react';
// import '../../App.css';
//
// export default function RateTenant() {
//     return <h1 className='ratetenant'>RateTenant</h1>;
// }
import './RatePages.css';
import React, {useState} from 'react';
import DefaultNotes from "../TenantQuestionnaires";
import Modal from "../Modal";
import CheckboxComponent from "../Checkbox";
import Note from "../Note";

function RateTenant() {
    // return <h1 className='ratelandlord'> RateLandlord</h1>;
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
            <body>
            <div className="firstOptions">
                <section>
                    <article>
                        <div className="checkBoxQuestion">
                            <p>Would you like to submit this form anonymously? </p>
                            <CheckboxComponent/>
                        </div>
                    </article>
                    <article>
                        <p>What dates were you at the property? [Start Date] [End Date] </p>
                    </article>
                    <article>
                        <div className="checkBoxQuestion">
                            <p>Is your landlord part of a professional agency? </p>
                            <CheckboxComponent/>
                            <textarea/>
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
                        <div className="checkBoxQuestion">
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
export default RateTenant;