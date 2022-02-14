import '../../css/RatePages.css';
import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import CheckboxComponent from "../Components/Checkbox";
import Note from "../Components/Note";
import DefaultNotes from "../Components/notes";
import DateSelector from "../Components/DateSelector"
import CheckboxController from "../Components/ConditionalTextfield";
import "antd/dist/antd.css";
import Map from './Map';
import withScriptjs from "react-google-maps/lib/withScriptjs";
import Switch from "@/Components/Switch";


export default function Landlords() {
    const [notes, setNotes] = useState([]);
    const [checked, setChecked] = useState(false);
    const MapLoader = withScriptjs(Map);


    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

	{/* Update site title */}
    useEffect(() => {
        document.title = "Rate Landlord - Good Rental Homes";
    });

    return (
        <div>
            <div className="pageHeader">
				<Header title="Rate Landlord" />
            </div>

            <body>
                <label htmlFor="addressQuestion">What is the address of the property?</label>

                <div className="map" >
                    <MapLoader
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2R2t03PiHkPhna_0HIxMZWXQxokn18W8&libraries=places"
                        loadingElement={<div  style={{height: `50%`, width: `50%`}}/>}
                    />
                </div>

				<div className="container">
            	    <form>

            	        {/*----anonQuestion-START---------------------------------------------------------------------------*/}
            	        {/*<div className="row">*/}
            	        {/*    <div className="col-25">*/}
            	        {/*        <label htmlFor="anonQuestion">  TEST 4 Would you like to submit this form anonymously?</label>*/}
            	        {/*    </div>*/}
            	        {/*    <div className="col-75">*/}
            	        {/*        <CheckboxComponent/>*/}
            	        {/*    </div>*/}
            	        {/*</div>*/}
            	        <div className="checkNQuestion">
            	            {/*<CheckboxComponent/>*/}
            	            <Switch
            	                checked={checked}
            	                onChange={setChecked}
            	            />
            	            <label htmlFor="anonQuestion">TEST 4 Would you like to submit this form anonymously?</label>
            	        </div>


            	        {/*----anonQuestion-END-----------------------------------------------------------------------------*/}

            	        {/*----datesQuestion-START--------------------------------------------------------------------------*/}
            	        <div className="row">
            	            <div className="col-25">
            	                <label htmlFor="datesQuestion">What dates were you at the property?</label>
            	            </div>
            	            <div className="col-25">
            	                <label htmlFor="startDate">Start Date:</label>
            	                <div className="dateSelector">
									<DateSelector />
            	                </div>
            	                <label htmlFor="endDate">End Date:</label>
            	                <div className="dateSelector">
									<DateSelector />
								</div>
            	            </div>
            	        </div>
            	        {/*----datesQuestion-END----------------------------------------------------------------------------*/}

            	        {/*----agencyQuestion-START-------------------------------------------------------------------------*/}
            	        <div className="row">
            	            <div className="col-25">
            	                <label htmlFor="agencyQuestion">Is your landlord part of a professional agency?</label>
            	            </div>
            	            <div className="row-25">
            	                <CheckboxController />
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
            	                <textarea>Your other comments about the landlord</textarea>
            	            </div>
            	        </div>
            	        {/*----overallComments-END--------------------------------------------------------------------------*/}


            	        {/*----contactQuestion-START------------------------------------------------------------------------*/}
            	        <div className="row">
            	            <div className="col-25">
            	                <label htmlFor="contactQuestion">Are you happy to be contacted by prospective tenants about the property?</label>
            	            </div>
            	            <div className="col-25">
            	                <CheckboxComponent />
            	            </div>
            	        </div>
            	        {/*----contactQuestion-END--------------------------------------------------------------------------*/}

            	        {/*----submitButton-START---------------------------------------------------------------------------*/}

            	        <button className="button">Submit</button>

            	        {/*----submitButton-END-----------------------------------------------------------------------------*/}


            	    </form>
            	</div>
            </body>
        </div>
    );

}

