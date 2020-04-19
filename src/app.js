import React from 'react';
import {Note} from "./components/note/Note";
import {Input} from "./components/input/Input";
import {NoteList} from "./components/noteList/NoteList";
import {AppComponent} from "./components/AppComponent/AppComponent";
import {NoteListLoader} from "./components/noteListLoader/NoteListLoader";

const data = [
    {
        id: 1,
        text: "Úkol 1"
    },
    {
        id: 2,
        text: "Úkol 2"
    }
];

function App() {
    return (
        <div id="App">
            <h3>Úkoly</h3>
            <AppComponent/>
            <NoteList notes={data}/>

        </div>
    );
}

export default App;

//<NoteListLoader/>
