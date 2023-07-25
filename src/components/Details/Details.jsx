import react from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//  component function
function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details)

    console.log('details: ', details);

    return (
        <>
            <div>
                <img src={details.poster} alt={details.title}/>
                <h1>Title: {details.title}</h1>
                <h2>Genres: 
                    {details.genre.map((specificGenre) =>{
                        <li key={specificGenre}>{specificGenre}</li>
                    })}

                </h2>
                <p>Description: {details.description}</p>
                <button onClick={() => history.replace('/')}>Back to List</button>
            </div>
        </>
    )
}

export default Details