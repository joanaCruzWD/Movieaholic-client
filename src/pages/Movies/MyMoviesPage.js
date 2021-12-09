import MyMoviesImg from '../../images/MyMovies.png';

const apiURL = "http://localhost:5005";

function MyMoviesPage() {

    return (
        <div className="bg-movies">
            <div className="title-myMovies">
                <h1> This is the all movies page </h1>
            </div>
            <div className="bg-home">
                <img src={MyMoviesImg} alt="bg-home" width="300px"></img>
            </div>


        </div>

    );
}

export default MyMoviesPage;