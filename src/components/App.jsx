import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import CreateArea from "./CreateArea";

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
            <Header />
            <div className="questionnaire">
                <p>1.Communication -keeps Tenants informed when needed.How well did they keep you informed of any activities/visits?</p>
            </div>
            <div>
                <p>2.Discretion-  respects tenants privacyHow well did they respect your privacy?</p>
            </div>
            <div>
                <p>3.Responsive-  actioned requests in a timely manner.</p>
            </div>
            <div>
                <p>4.Compliance.complies with NZ Tenancy Act</p>
            </div>
            <div>
                <p>5.Overall rating(score)</p>
            </div>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <div>
                <p>Contact me:- the tenant may choose to offer to beavailable to chat with othertenants thinking of renting from this landlord via a convenient messaging service.Or phone. see more below</p>
            </div>
            <Footer />
        </div>
    );


// const [items, setItems] = useState([]);
//
// function addItem(inputText) {
//     setItems(prevItems => {
//         return [...prevItems, inputText];
//     });
// }
//
// function deleteItem(id) {
//     setItems(prevItems => {
//         return prevItems.filter((item, index) => {
//             return index !== id;
//         });
//     });
// }
//
// return (
//     <div className="container">
//         <div className="heading">
//             <h1>Comments</h1>
//         </div>
//         <InputArea onAdd={addItem} />
//         <div>
//             <ul>
//                 {items.map((todoItem, index) => (
//                     <ToDoItem
//                         key={index}
//                         id={index}
//                         text={todoItem}
//                         onChecked={deleteItem}
//                     />
//                 ))}
//             </ul>
//         </div>
//     </div>
// );
}


export default App;
