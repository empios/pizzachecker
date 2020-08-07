import React from 'react';
import Grid from "@material-ui/core/Grid";
import pizza from './pizza.svg';
import 'fontsource-roboto';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    clickableIcon: {
        color: 'white',
        '&:hover': {
            color: '#08AEEA',
        },
    },
}));

export const MainImage = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            spacing={3}
            style={{ minHeight: '100vh' }}>
            <Grid item lg={3} sm={3}>
                <Container>
                    <h1 className={'tracking-in-expand'}>Jesteś głodny i chcesz przyoszczędzić?<span style={{fontSize:30}}>&#127829;</span></h1>
                    <Button href={'/checkpizza'} className={'tracking-in-expand'} variant="outlined" color="secondary">Kliknij tutaj</Button>
                    <Button onClick={event => window.open("https://www.buymeacoffee.com/empios", '_blank')} className={'tracking-in-expand'} variant="outlined" color="primary">Podaruj mi skrawek pizzy</Button>
                    <h5 className={'tracking-in-expand'}>&copy; Paweł Włodarczyk</h5>

                    <GitHubIcon onClick={event => window.open("https://github.com/empios", '_blank')}
                    className={classes.clickableIcon + ' ' + 'tracking-in-expand'}/>
                    <InstagramIcon style={{paddingLeft:5}} onClick={event => window.open("https://instagram.com/pawelvlodarczyk", '_blank')}
                                className={classes.clickableIcon + ' ' + 'tracking-in-expand'}/>

                </Container>

            </Grid>
            <Grid item lg={3} sm={3}>
                <Container>
                <img className={'fade-in-fwd'} style={{maxWidth: "80%"}} src={pizza}/>
                </Container>
            </Grid>


        </Grid>
    )

};