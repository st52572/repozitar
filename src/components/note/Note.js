import * as React from "react";
import PropTypes from 'prop-types';

export class Note extends React.Component {

    // inicializace komponenty se stavy

    constructor(props) {
        super();
        //console.log(props);
        this.state = {id: props.note.id, text: props.note.text};
    }

    /*handleChange(event) {
        this.setState({text2: event.target.value});
    }*/

    render(){
        return (
            <div id={this.state.id}>
                <label>{this.state.text}</label>

                <button onClick={event => document.getElementById(this.state.id).remove()}>Odebrat</button>

            </div>
        )
    }
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    })
};