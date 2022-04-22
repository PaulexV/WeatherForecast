import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import classes from './Conditions.module.css';

const DailyConditions = (props: any) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <Card border="secondary" className={classes.Cards}>
                    <Card.Header>{props.responseObj.name}</Card.Header>
                    <Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroupItem><p> Température: </p>{Math.round(props.responseObj.main.temp)} degrés.</ListGroupItem>
                            <ListGroupItem> Description: {props.responseObj.weather[0].description}.</ListGroupItem>
                            <ListGroupItem> Humidité: {props.responseObj.main.humidity}%.</ListGroupItem>
                            <ListGroupItem> Vent: {props.responseObj.wind.speed} km/h.</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
                : null
            }
        </div>
    )
}

export default DailyConditions;