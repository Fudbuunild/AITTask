import React from 'react';
import './Header.css'

class Form extends React.Component {
    render() {
        return (
            <form className="Form"  onSubmit={this.props.getWeat}>
                <input name="lat" type="number" step="0.00000001" placeholder="latitude"/>
                <input name="lon" type="number" step="0.00000001" placeholder="longitude" />
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;