import request from 'supertest';
import app from '../server.js'; // server app
import axios from 'axios';

describe('Integration Tests', function() {
  let validMovieIds = [];
  let movieTitles = {};

  // Get all valid movie id and titles
  before(async function() {
    const movies = await getValidMovies();
    validMovieIds = movies.map(movie => movie.id);
    movieTitles = movies.reduce((acc, movie) => {
      acc[movie.id] = movie.attributes.title; // Save title for every movie id 
      return acc;
    }, {});
    console.log('Fetched movie titles:', movieTitles); // loggs movie titles
  });

  // Verify that movie pages show right title
  it('should return the correct movie title for each movie', function(done) {
    Promise.all(validMovieIds.map(id => {
      return request(app)
        .get(`/movie/${id}`)
        .expect('Content-Type', /html/)
        .expect(200)
        .expect((res) => {
          if (!res.text.includes(movieTitles[id])) throw new Error("Missing movie title"); // Use title from movietitles
        });
    }))
    .then(() => done())
    .catch(done);
  });

  // Error page shows corectly when a movie site dont exist
  it('should return 404 for non-existent movie', function(done) {
    request(app)
      .get('/test-movie/nonexistentid')  ///
      .expect('Content-Type', /html/)
      .expect(404)
      .expect((res) => {
        if (!res.text.includes('Movie not found')) throw new Error("Missing error message");
      })
      .end(done);
  });
});

async function getValidMovies() {
  try {
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies'); 
    const movies = response.data?.data || []; 
    if (movies.length > 0) {
      return movies; // Return all movies
    } else {
      console.warn('No movies found, returning an empty array');
      return []; // Return an empty array instead of throwing an error
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return []; // Return an empty array in case of an error
  }
}

