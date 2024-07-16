// import React from "react"
// import NotesList from "./Notes"

// export type noteIDType = undefined | string

// interface NoteProps {
//     imagesNum: number
//     displayedTitle: string
//     noteId: string,
//     setShowOffNote: React.Dispatch<React.SetStateAction<noteIDType>>,
//     links?: string[]
// }

// function Note(props: NoteProps) {

//     return <img onClick={() => props.setShowOffNote(props.noteId)}
//         style={{ width: "100%", aspectRatio: "1/1", cursor: "pointer" }} src={"NotesPics/" + props.noteId + "/pic0.png"} />
// }

// function NotesFragment(props: { setNote: React.Dispatch<React.SetStateAction<noteIDType>> }) {
//     let notesList: JSX.Element[] = []

//     if (Object.entries(NotesList).length !== 0) {
//         Object.entries(NotesList).forEach((item) => {
//             notesList.push(<Note key={item[0]} setShowOffNote={props.setNote} noteId={item[0]} displayedTitle={item[1].title} imagesNum={item[1].imgNum} links={item[1].referenceLinks} />)
//         })

//         return <div id="notesGrid">{notesList}</div>
//     }
// }

// export default NotesFragment