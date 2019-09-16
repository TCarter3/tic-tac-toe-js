import React from 'react';
import { Icon, Grid } from "semantic-ui-react";

class Square extends React.Component {


    squareClick = () => (
        this.props.squarePressed(this.props.box)
    );

    render() {
        return (

            <div>
                <Grid.Column
                itemsPerRow={3}
                    style={{
                        height: "150px",
                        display: "flex",
                        alignItems: "center",
                        width: "150px",
                        border: "solid black 1px"}}
                        onClick={this.squareClick}>
                            {this.props.box.clicked ? <Icon name="x"/> : "" }
                            {this.props.box.id}
                        </Grid.Column>

            </div>
        );
    };
};
    
export default Square;