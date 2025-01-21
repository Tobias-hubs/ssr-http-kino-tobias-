/**
 *
 * @author Jörgen Lindström
 */
//console.log('movies.js loaded');



let moviesArray = [];

export const fetchMovieData = async () => {
    try {
        const response = await fetch('/static/database/movies.json'); // static 
        moviesArray = await response.json(); // Populate the array
        console.log(moviesArray);
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export { moviesArray };

/// Hämta nya apiet 

// let moviesArray = [];

// export const fetchMovieData = async () => {
//     try {
//         const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies');  // Hämta nya filmer från API
//         const data = await response.json();
//         moviesArray = data.data; // Uppdatera arrayen med nya filmer från API
//         console.log(moviesArray);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// };

// export { moviesArray };
