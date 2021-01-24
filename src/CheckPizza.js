import React from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";


export default class CheckPizza extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    state = {
        restaurants: [],
        price: [],
        chosenRestaurant: null,
        valueOfChosenRestaurant: 0
    }


    componentDidMount() {
        let url = process.env.REACT_APP_NOT_SECRET_CODE
        axios.get(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            this.setState({restaurants: response.data.restaurant})
            }
        )
        axios.get(url.concat("restaurant"), {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            this.setState({price: response.data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.chosenRestaurant !== this.state.chosenRestaurant) {
                this.setState({valueOfChosenRestaurant: this.state.price.pizzapricebysurface[this.state.chosenRestaurant]})
        }
    }


    handleClick(event) {
        this.setState({chosenRestaurant: event.target.value})
    }




    render() {
        let comp;
        if (this.state.valueOfChosenRestaurant === 0){
            comp = "Wybierz restauracje"
        }
        if (this.state.valueOfChosenRestaurant !== 0) {
            comp = this.state.valueOfChosenRestaurant
        }
        if (this.state.restaurants.length > 0) {
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
                    </Grid>

                    <Grid item xl={3} sm={12}>
                        <h4 id="getelement" style={{textAlign: "center"}}>{comp}</h4>
                    </Grid>

                </Grid>
            )
        } else {
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
                        <h2 style={{textAlign: "center"}}>Pobieram informacje...</h2>
                    </Grid>
                </Grid>
            )

        }

    }
}
