import React, {useState} from "react";
import "../../css/Modal.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Modal() {
    const [modal, setModal] = useState(false);
    const url = window.document.location.href;
    const[copied,setCopied]=useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <i className="fa fa-share-alt"/>
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"/>
                    <div className="modal-content">
                        <h2>Invite other tenants</h2>
                        <div>
                            {url}
                            <CopyToClipboard text={url}
                                             onCopy={()=>setCopied(true)}>
                                <button className="copy_btn">Copy</button>
                            </CopyToClipboard>
                            {copied ? <span className="copied_alert" >Copied.</span> : null}
                        </div>


                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
