import * as React from "react";
import {Note} from "../note/Note";
import PropTypes from "prop-types";

export class NoteList extends React.Component {

    render() {
        return (<div>
            {this.props.notes.map(function (item, index) {
                return <Note key={index} note={{id: item.id,text: item.text}}/>;
            })}
        </div>);
    }
}

NoteList.propTypes = {
    notes: PropTypes.array
};

/*this.props.notes.map(function (text, index) {
                return <Note key={index} note={text}/>*/