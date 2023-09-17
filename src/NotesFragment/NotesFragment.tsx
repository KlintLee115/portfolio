import React from "react"
import NotesList from "./Notes"

interface NoteProps {
    imagesNum: number
    displayedTitle: string
    noteId: string,
    setShowOffNote: React.Dispatch<React.SetStateAction<undefined | string>>
    links: string[]
}

const NotesFragmentStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginBottom:"auto"
}

function Note(props: NoteProps) {

    return <img onClick={() => props.setShowOffNote(props.noteId)} style={{ width: "100%", aspectRatio: "1/1", cursor:"pointer" }} src={"NotesPics/" + props.noteId + "/pic0.png"} />
}

function NotesFragment(props: { setNote: React.Dispatch<React.SetStateAction<string | undefined>> }) {
    let notesList: JSX.Element[] = []

    if (Object.entries(NotesList).length !== 0) {
        Object.entries(NotesList).forEach((item) => {
            notesList.push(<><Note setShowOffNote={props.setNote} noteId={item[0]} displayedTitle={(item[1] as any).title} imagesNum={(item[1] as any).imgNum} links={(item[1] as any).referenceLinks} /></>)
        })

        return <div style={NotesFragmentStyle}>{notesList}</div>
    }

    return <></>
}

export default NotesFragment