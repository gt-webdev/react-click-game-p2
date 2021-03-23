import React, { Component } from "react";
import './App.css';
import { Button, Typography, Grid } from '@material-ui/core';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            p1: 0,
            p2: 0,
            winner: ""
        };
    }

    handleClick = (player) => {
        this.setState({ [player]: this.state[player] + 1 }, () => {
            if (this.state[player] >= 10) {
                this.setState({ winner: player === "p1" ? this.props.p1 : this.props.p2 });
            }
        });
    };

    resetScore = () => {
        this.setState({ p1: 0, p2: 0, winner: "" });
    }

    render() {
        const { p1, p2, winner } = this.state;

        return (
            <div style={{ width: "650px" }}>
                <Grid className="my-4" container justify="center">
                    <Grid item xs={4}>
                        <Button 
                            color="default" 
                            variant="contained" 
                            fullWidth
                            onClick={this.resetScore}
                        >
                            Reset
                        </Button>
                    </Grid>
                </Grid>
                {winner ? 
                    <Typography variant="h6" align="center">{`Congrats ${winner} you are the best!`}</Typography>
                : 
                    <Grid container justify="center" spacing={4}>
                        <Grid item xs={6}>
                            <Button 
                                color="primary" 
                                variant="contained" 
                                fullWidth 
                                onClick={() => this.handleClick("p1")}
                            >
                                {this.props.p1}
                            </Button>
                            <Typography align="center">{p1}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                className="ml-2" 
                                color="primary" 
                                variant="contained" 
                                fullWidth 
                                onClick={() => this.handleClick("p2")}
                            >
                                {this.props.p2}
                            </Button>
                            <Typography align="center">{p2}</Typography>
                        </Grid>
                    </Grid>
                }
            </div>
        );
    }
}

export default Game;

