import React from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";


export default class CheckPizza extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    state = {
        restaurants: [],
        price: [],
        chosenRestaurant: null,
        valueOfChosenRestaurant: null
    }



    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://elblagpizzaapi.herokuapp.com/").then(response => {
                this.setState({price: response.data})
                console.log(this.state.price)
            }
        )
        axios.get("https://cors-anywhere.herokuapp.com/https://elblagpizzaapi.herokuapp.com/restaurant").then(response => {
            this.setState({restaurants: response.data.restaurant})
            console.log(this.state.restaurants)
        })
    }

    handleClick(event) {
        this.setState({chosenRestaurant: event.target.value})
        this.setState({valueOfChosenRestaurant: this.state.price.pizzapricebysurface[this.state.chosenRestaurant] })
    }


    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignContent="center"
                spacing={3}
                style={{minHeight: '50vh'}}
            >

                <Grid item xl={3} sm={12}>
                    <h2 style={{textAlign: "center"}}>Wybierz restaurację i zobacz jej cenę za 1cm<sup>3</sup></h2>

                </Grid>

                <Grid item xl={3} sm={12} style={{textAlign: "center"}}>
                    <FormControl>
                        <InputLabel style={{color: "white"}}
                                    id="demo-simple-select-helper-label">Restauracja</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={this.state.chosenRestaurant}
                            onChange={this.handleClick}
                            style={{color: "white", alignContent: "center"}}
                        >
                            {
                                this.state.restaurants.map((restaurant, index) =>
                                    <MenuItem key={index} value={index}>
                                        {restaurant}
                                    </MenuItem>
                                )}
                        </Select>
                        <FormHelperText style={{color: "white"}}>Wybierz restaurację z której chcesz zamówić
                            pizzę</FormHelperText>
                    </FormControl>

                </Grid>
                <Grid item xl={3} sm={12} style={{textAlign: "center"}}>

                    <h3 id="getelement">{this.state.valueOfChosenRestaurant}</h3>


                </Grid>

            </Grid>
        )
    }
}