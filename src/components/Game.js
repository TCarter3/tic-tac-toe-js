import React from "react";
import Square from "./Square.js"
import { Header, Grid, Container } from "semantic-ui-react";



class Game extends React.Component {
    state = {
        boxes: [
            { id: 1, checked: false, },
            { id: 2, checked: false, }, 
            { id: 3, checked: false, }, 
            { id: 4, checked: false, }, 
            { id: 5, checked: false, }, 
            { id: 6, checked: false, }, 
            { id: 7, checked: false, }, 
            { id: 8, checked: false, }, 
            { id: 9, checked: false, }, 
        ],
        arrUserChoice: [],
        arrCompChoice: [],
    }

    squarePressed = (i) => {
        const oppo = !i.checked
        this.setState({boxes: this.state.boxes.map( box => {
            if (box.id === i.id) {
            return {id: i.id, checked: oppo}}
            else {
                return box
            }
        })})
        this.setState({arrUserChoices: [i.id, ...this.state.arrUserChoices]} )
    }
    

    render() {
        return (
            <>
            <Header textAlign="center">
                Tic Tac Toe
            </Header>
            <Container>
            <Grid columns={3} styles={{width: "450px"}}>
                <Grid.Row>
                    {this.state.boxes.map(box => (  <Square key={box.id} box={box} squarePressed={this.squarePressed} />))}
                </Grid.Row>
            </Grid>
            </Container>
            </>
        );
    };
};



export default Game;