import './RatePages.css';
import React, {useState} from 'react';
import Modal from "../Modal";
import CheckboxComponent from "../Checkbox";
import Header from "../Header";
import Note from "../Note";
import DefaultNotes from "../notes";
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
            <Header/>
            <body>

            <div className="container">
                <form action="action_page.php">

                    {/*----anonQuestion-START---------------------------------------------------------------------------*/}
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="anonQuestion">Would you like to submit this form anonymously?</label>
                        </div>
                        <div className="col-75">
                            <CheckboxComponent/>
                        </div>
                    </div>
                    {/*----anonQuestion-END-----------------------------------------------------------------------------*/}

                    {/*----datesQuestion-START--------------------------------------------------------------------------*/}
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="datesQuestion">What dates were you at the property?</label>
                        </div>
                        <div className="col-25">
                            <p>Start Date:</p>
                            <DateSelector/>
                            <p>End Date:</p>
                            <DateSelector/>
                        </div>
                    </div>
                    {/*----datesQuestion-END----------------------------------------------------------------------------*/}

                    {/*----agencyQuestion-START-------------------------------------------------------------------------*/}
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="agencyQuestion">Is your landlord part of a professional agency? </label>
                        </div>
                        <div className="row-25">
                            <CheckboxController/>
                        </div>
                    </div>
                    {/*----agencyQuestion-END---------------------------------------------------------------------------*/}


                    {/*----ratings-START--------------------------------------------------------------------------------*/}
                    <div className="defaultNotes">
                        {DefaultNotes.map(item => (
                            <Note
                                key={item.key}
                                title={item.title}
                                content={item.content}
                                star={deleteNote}
                            />))}
                    </div>
                    {/*----ratings-END----------------------------------------------------------------------------------*/}



                    {/*----overallComments-START------------------------------------------------------------------------*/}
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="overallComments">Overall comments about the landlord</label>
                        </div>
                        <div className="col-75">
                            <textarea>
                         Your other comments about the landlord
                         </textarea>
                        </div>
                    </div>
                    {/*----overallComments-END--------------------------------------------------------------------------*/}


                    {/*----contactQuestion-START------------------------------------------------------------------------*/}
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="contactQuestion">Are you happy to be contacted by prospective tenants
                                about the property?</label>
                        </div>
                        <div className="col-25">
                            <CheckboxComponent/>
                        </div>
                    </div>
                    {/*----contactQuestion-END--------------------------------------------------------------------------*/}

                    {/*----submitButton-START---------------------------------------------------------------------------*/}

                    <button className="button" >Submit</button>

                    {/*----submitButton-END-----------------------------------------------------------------------------*/}


                </form>
            </div>

            </body>


        </div>


    );

}

export default Landlords;