import '../../css/RatePages.css';
import React, {useState, useEffect} from 'react';
import Header from "../Components/Header";
import CheckboxComponent from "../Components/Checkbox";
import Note from "../Components/Note";
import DefaultNotes from "../Components/TenantQuestionnaire";
import DateSelector from "../Components/DateSelector"
import CheckboxController from "../Components/ConditionalViolations";
import RentAgianController from "../Components/ConditionalTenant";
import complaintsController from "../Components/ConditionalComplaints";
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

    {/* Update site title */
    }
    useEffect(() => {
        document.title = "Rate Tenant - Good Rental Homes";
    });

    return (
        <div>
            <div className="pageHeader">
                <Header title="Rate Tenant"/>
            </div>

            <body>
                <label htmlFor="addressQuestion">What is the address of the property?</label>

                <div className="map">
                    <MapLoader
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2R2t03PiHkPhna_0HIxMZWXQxokn18W8&libraries=places"
                        loadingElement={<div style={{height: `50%`, width: `50%`}}/>}
                    />
                </div>

                <div className="container">
                    <form>

                        {/*----anonQuestion-START---------------------------------------------------------------------------*/}
                        <div className="checkNQuestion">
                            <Switch
                                checked={checked}
                                onChange={setChecked}
                            />
                            <label htmlFor="anonQuestion"> Would you like to submit this form anonymously?</label>
                        </div>
                        {/*----anonQuestion-END-----------------------------------------------------------------------------*/}

                        {/*----datesQuestion-START--------------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="datesQuestion">What dates was the tenant at the property?</label>
                            </div>
                            <div className="col-25">
                                <label htmlFor="startDate">Start Date:</label>
                                <div className="dateSelector">
                                    <DateSelector/>
                                </div>
                                <label htmlFor="endDate">End Date:</label>
                                <div className="dateSelector">
                                    <DateSelector/>
                                </div>
                            </div>
                        </div>
                        {/*----datesQuestion-END----------------------------------------------------------------------------*/}

                        {/*----tenantNameQuestion-START-------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="landlordNameQuestion">What is your tenant's name?</label>
                            </div>
                            <div className="col-75">
                            <textarea>
                         Name
                         </textarea>
                            </div>
                        </div>
                        {/*----tenantNameQuestion-END---------------------------------------------------------------------*/}

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
                                <label htmlFor="overallComments">Overall comments about the tenant</label>
                            </div>
                            <div className="col-75">
                                <textarea>Your other comments about the tenant</textarea>
                            </div>
                        </div>
                        {/*----overallComments-END--------------------------------------------------------------------------*/}
                        {/*----violationsQuestion-START-------------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="agencyQuestion">Were there any contract violations? </label>
                            </div>
                            <div className="row-25">
                                <CheckboxController/>
                            </div>
                        </div>
                        {/*----violationsQuestion-END---------------------------------------------------------------------------*/}
                        {/*----contactQuestion-START------------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <Switch
                                    checked={checked}
                                    onChange={setChecked}
                                />
                                <label htmlFor="contactQuestion">Are you happy to be contacted by prospective landlords?</label>
                            </div>
                            <div className="col-25">
                                {/*<CheckboxComponent/>*/}
                            </div>
                        </div>
                        {/*----contactQuestion-END--------------------------------------------------------------------------*/}
                        {/*----rentagianQuestion-START-------------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="agencyQuestion">Would you be happy to rent to the tenant again?</label>
                            </div>
                            <div className="row-25">
                                <RentAgianController/>
                            </div>
                        </div>
                        {/*----rentagianQuestion-END---------------------------------------------------------------------------*/}
                        {/*----complaintsQuestion-START-------------------------------------------------------------------------*/}
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="agencyQuestion">Were there any complaints about the tenant from neighbours?</label>
                            </div>
                            <div className="row-25">
                                <complaintsController/>
                            </div>
                        </div>
                        {/*----complanitsQuestion-END---------------------------------------------------------------------------*/}
                        {/*----submitButton-START---------------------------------------------------------------------------*/}
                        <div className="buttonContainer">
                            <button className="button">Submit</button>
                        </div>

                        {/*----submitButton-END--------------------------------------------------------------------------*/}


                    </form>
                </div>
            </body>
        </div>
    );

}

