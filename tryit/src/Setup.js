import React, { Component } from "react";
import './App.css';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSwitch = (event) => {
        let value = event.target.checked;
        this.setState({ darkMode: value });
        this.props.setDarkMode(value);
    };

    render() {
        return (
            <div></div>
        );
    }
}

export default Setup;