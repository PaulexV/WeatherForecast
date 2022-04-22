import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import classes from './Conditions.module.css';

const WeeklyConditions = (props: any) => {

    const displayConditions = () => {
        console.log(props.responseObj);
        if (props.responseObj.daily) {
            const { daily } = props.responseObj;
            return daily.map((day: any, index: number) => {
                var dayname = new Date(day.dt * 1000).toLocaleDateString("fr", {
                    weekday: "long",
                });
                return (
                    <Card border="secondary" className={classes.Cards} key={index}>
                        <Card.Img variant="top" src={day.weather.icon} />
                        <Card.Header>{dayname}</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroupItem className={classes.Cardstext}>Température : {Math.round(day.temp.day)}°C</ListGroupItem>
                                <ListGroupItem className={classes.Cardstext}>Description : {day.weather[0].description}</ListGroupItem>
                                <ListGroupItem className={classes.Cardstext}>Humidité : {day.humidity}%</ListGroupItem>
                                <ListGroupItem className={classes.Cardstext}>Vent : {day.wind_speed}km/h</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )
            })
        } else {
            return null
        }
    }

    return (
        displayConditions()
    )
}

export default WeeklyConditions