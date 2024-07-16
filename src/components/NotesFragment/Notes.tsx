// interface NotesListType {
//     [key: string]: {
//         title: string;
//         imgNum: number;
//         description: JSX.Element,
//         referenceLinks?: string[];
//     };
// }

// const NotesList: NotesListType = {
//     'SPA_Redirect': { title: 'Redirecting in SPA ( Single Page Application )', imgNum: 2, description: (<>1. React routing is for client side only, which is why the server side never updates when a new page is opened, the url however can be updated. This may cause error when a new url is provided and the page is refreshed, as the server may not have the directory. <br /><br /> 2. If a new url is displayed and the server doesnt have the path, it will render an error, this is solved using the _redirects file. <br /><br />3. The _redirects file works on the server, every time the page is loaded from the server, the _redirects file will check for the url and return a file to serve. <br /><br /> 4. In this case, _redirects return index.html, but the url remains the same, and react ( client side ) will route to the correct path based on the url</>), referenceLinks: [] },
// }

// export default NotesList