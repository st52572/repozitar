import React from 'react';
import {Note} from "./components/note/Note";
import {Input} from "./components/input/Input";
import {NoteList} from "./components/noteList/NoteList";
import {AppComponent} from "./components/AppComponent/AppComponent";
import {NoteListLoader} from "./components/noteListLoader/NoteListLoader";

const data = [
    {
        id: 1,
        text: "Xiaomi"
    },
    {
        id: 2,
        text: "Samsung"
    }
];

function App() {
    return (
        <div id="App">

            <AppComponent/>
            <NoteList notes={data}/>

        </div>
    );
}

export default App;

//<NoteListLoader/>