import React from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";


export default class CheckPizza extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    state = {
        restaurants: ['Pizzeria "PizzaNaCzas', 'Amore Mio pizza&grill', 'Pizzeria u Benka', 'Restauracja Chicago', 'CIAO BELLA!', 'Frentzza - Pizza & Friends', 'Bistro "Do Syta"', 'Dżin Pizza & Kebab', 'Oliwka Pizzeria i Restauracja', 'Pasta&Pizza House', 'Pizzeria Rukola', 'RODEO PIZZA', 'Sąsiedzi', 'Tattoo Pizza', 'Restauracja Stara Karczma', 'Restauracja Zmysły'],
        price: [],
        chosenRestaurant: null
    }


    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://elblagpizzaapi.herokuapp.com/").then(response => {
                this.setState({price: response.data})
                console.log(this.state.price)
            }
        )
    }

    handleClick(event) {
        this.setState({chosenRestaurant: event.target.value})
        console.log(this.state.chosenRestaurant)
    }


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignContent="center"
                style={{minHeight: '50vh'}}
            >
                <Grid item xs={3} xl={2}>
                            <FormControl style={{textAlign: "center"}}>
                                <InputLabel style={{color: "white"}} id="demo-simple-select-helper-label">Restauracja</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={this.state.chosenRestaurant}
                                    onChange={this.handleClick}
                                    style={{color: "white"}}
                                >
                                    <MenuItem value="">
                                        <em>Brak</em>
                                    </MenuItem>
                                    {
                                        this.state.restaurants.map((restaurant, index) =>
                                            <MenuItem value={index}>
                                                {restaurant}
                                            </MenuItem>
                                        )}
                                </Select>
                                <FormHelperText style={{color: "white"}}>Wybierz restaurację z której chcesz zamówić pizzę</FormHelperText>
                            </FormControl>

                </Grid>

            </Grid>
        )
    }
}