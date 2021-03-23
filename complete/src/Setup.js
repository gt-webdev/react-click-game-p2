import React, { Component } from "react";
import Game from "./Game";
import { Typography, TextField, Grid, Button, Switch, FormControlLabel } from '@material-ui/core';
import './App.css';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p1Name: "",
            p2Name: "",
            darkMode: true,
            entered: false
        };
    }

    handleChange = (field) => (event) => {
        let value = event.target.value;
        this.setState({ [field]: value });
    };

    handleSwitch = (event) => {
        let value = event.target.checked;
        this.setState({ darkMode: value });
        this.props.setDarkMode(value);
    };

    onEnter = () => {
        this.setState({ entered: true });
    }

    render() {
        const { p1Name, p2Name, darkMode, entered } = this.state;

        if (entered) {
            return <Game p1={p1Name} p2={p2Name} />
        }

        return (
            <div>
                <Typography variant="h5" align="center">Setup the players</Typography>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <TextField
                            value={p1Name} 
                            label="Player 1 Name" 
                            onChange={this.handleChange("p1Name")}
                            fullWidth 
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={p2Name} 
                            label="Player 2 Name" 
                            onChange={this.handleChange("p2Name")} 
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={darkMode}
                                    onChange={this.handleSwitch}
                                    color="primary"
                                />
                            }
                            label="Dark Mode"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.onEnter}>Enter</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Setup;