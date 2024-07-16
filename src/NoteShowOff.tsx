// import React from "react";
// import NotesList from "./NotesFragment/Notes";

// interface NoteShowOffProps {
//     id: string | undefined
// }

// function NoteShowOff(props: NoteShowOffProps) {

//     const style: React.CSSProperties = {
//         display: "flex",
//         zIndex: 2,
//         backgroundColor: "white",
//         position: "fixed",
//         top: "10%",
//         left: "10%",
//         right: "10%",
//         bottom: "10%"
//     }

//     const noteId = props.id
//     if (noteId) {

//         let note = NotesList[noteId];
//         style.display = "flex";

//         return <div id="frame" style={style}>
//             <img src={`NotesPics/${noteId}/pic0.png`} style={{ height: "100%", width: "65%", marginRight: "2%" }} />
//             <div style={{ width: "33%", height: "100%" }}>
//                 <h4 style={{ borderBottom: "1px solid grey", maxHeight: "20%", paddingBottom: "1rem", marginBottom: 0 }}>
//                     {note.title}
//                 </h4>
//                 <div id="frame-text" style={{ paddingTop: "1rem", maxHeight: "80%", overflowY: "auto" }}>
//                     {(note.description) as any}
//                 </div>
//             </div>
//         </div>

//     }

//     return <div></div>

// }


// export default NoteShowOff