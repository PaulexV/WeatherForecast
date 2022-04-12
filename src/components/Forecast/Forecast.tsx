import { Link } from 'react-router-dom';
import classes from './Forecast.module.css';

const Forecast = () => {

    return (
        <div>
            <Link className={classes.Link} to={'/daily/'}>
                <button className={classes.Button} type="submit">Météo du jour</button>
            </Link>
            <Link className={classes.Link} to={'/weekly/'}>
                <button className={classes.Button} type="submit">Météo de la semaine</button>
            </Link>
        </div>
    )
}

export default Forecast;
