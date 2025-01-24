
import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import markdownIt from 'markdown-it';

const app = express();
const port = 5080;

// Fetch actual file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




// Serve static files from dist folder (Vite build)
app.use('/static', express.static(path.join(__dirname, 'dist'))); // This needs to be here for API route to render first
console.log('Server started and route is ready.');

app.use('/static/database', express.static(path.join(__dirname, 'dist/database')));

// Assets 
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));


app.use('/database', express.static(path.join(__dirname, 'dist/database')));


// EJS as template engine 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 


app.get('/page-contact', (req,  res) => { 
  res.render('contact');
});

app.get('/page-about', (req, res) => { 
  res.render('about');
});


app.get('/page-cafe', (req, res) => { 
  res.render('cafe');
});


// Fetch movies from API and pass them to EJS view
app.get('/', async (req, res) => {
  try {
    // Fetch movie data from new API
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
    const movies = response.data;

    console.log('API Response:', movies); 
    console.log('Is Array:', Array.isArray(movies)); 

  
    // Pass the movies data to EJS for rendering
    res.render('index', { movies: movies.data });
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    console.error('Error details:', error);
    res.status(500).send('Error fetching movies');
  }
});

// Fetch a specific movie from API
app.get('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`); 
    
    if (response.data?.error) { 
      return res.status(404).render('error', {message: 'Movie not found'});
    }

    const movieData = response.data.data; // Cant load if not extracting data key here
    const attributes = movieData.attributes; // get attribute from data

    // Render the movie intro with Markdown
    const md = new markdownIt();
    const introHtml = md.render(attributes.intro);
    
    res.render('movie', { movie: attributes, introHtml });
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(404).render('error', { message: 'Movie not found' });
  }
});


// Test route for non-existent movie
app.get('/test-movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/movies/${id}`);
    
    if (response.data?.error) { 
      return res.status(404).render('error', {message: 'Movie not found'});
    }

    const movieData = response.data.data;
    const attributes = movieData.attributes;

    const md = new markdownIt();
    const introHtml = md.render(attributes.intro);
    
    res.render('movie', { movie: attributes, introHtml });
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(404).render('error', { message: 'Movie not found' });
  }
});

// Error page for wrong routes
app.get('*', (req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});



//Handle all requests and send the correct HTML file from dist
// app.get('/about', (req, res) => {
//   console.log('Serving about.html');
//   res.sendFile(path.join(__dirname, 'dist', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//   console.log('Serving contact.html');
//   res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
// });

// app.get('/cafe', (req, res) => {
//   console.log('Serving cafe.html');
//   res.sendFile(path.join(__dirname, 'dist', 'cafe.html'));
// });


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app; 