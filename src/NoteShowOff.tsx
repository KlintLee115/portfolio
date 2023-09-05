import NotesList from "./NotesFragment/Notes";

interface NoteShowOffProps {
    id: string | undefined
}

function NoteShowOff(props: NoteShowOffProps) {

    let style: React.CSSProperties = {
        display: "flex",
        zIndex: 2,
        backgroundColor: "white",
        position: "fixed",
        top: "10%",
        left: "10%",
        right: "10%",
        bottom: "10%"
    }

    let noteId = props.id
    if (noteId !== undefined) {

        let note: object = (NotesList as any)[noteId];
        style.display = "flex";

        return <div style={style}>
            <img src={`ProjectsPics/${noteId}/pic0.png`} style={{ width: "70%" }} />
            <div className="note-comment" style={{ width: "20%" }}>
                {(note as any).title}
            </div>
        </div>

    } 
    style.display = "none"

    return <div></div>

}


export default NoteShowOff