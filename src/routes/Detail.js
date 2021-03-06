import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const josn = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(josn);
        setMovie(josn.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div className={styles.container}>
            <h2>
                <Link to="/">{movie.title}</Link>
            </h2>
            <img src={movie.large_cover_image} alt={movie.title} />
            <p className={styles.year}>{movie.year} μν</p>
            <p className={styles.rating}>{movie.rating}</p>
            <p className={styles.runtime}>{movie.runtime} λΆ</p>
        </div>
    )
}

export default Detail;