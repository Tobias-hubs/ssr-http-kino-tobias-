// import http from 'http';
// import fs from 'fs';
// import path from  'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const PORT = 3080;
// const server = http.createServer((req, res) => { 
//     let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);

//     const extname = path.extname(filePath); 
//     let contentType = 'text/html'; 
//     switch (extname) { 
//         case '.js':
//             contentType = 'text/javascript'; 
//             break; 
//             case '.css': 
//             contentType = 'text/css';
//             break; 
//             case '.json': 
//             contentType = 'application/json'; 
//             break; 
//             case '.png':
//                 contentType = 'image/png';
//                 break; 
//                 case '.jpg':
//                     contentType = 'image/jpeg'; 
//                     break; 
//     }
//     fs.readFile(filePath, (err, content) => { 
//         if (err) { 
//             if (err.code == 'ENOENT') { 

//                 res.writeHead(404, { 'Content-Type': 'text/html'});
//                 res.end('<h1>404 NOT found</h1>', 'utf8');
//             } else { 
//                 res.writeHead(500); 
//                 res.end(`Server Error: ${err.code}`); 
//             }
//         } else { 
//             res.writeHead(200, { 'Content-type': contentType});
//         }
//     });
// });

// server.listen(PORT, () => { 
//     console.log(`Server runs on http://localhost:${PORT}`);
// });

// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);

//     const extname = path.extname(filePath);
//     let contentType = 'text/html';
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpeg';
//             break;
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code == 'ENOENT') {
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('<h1>404 Not Found</h1>', 'utf8');
//             } else {
//                 res.writeHead(500);
//                 res.end(`Server Error: ${err.code}`);
//             }
//         } else {
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content, 'utf8');
//         }
//     });
// });

// server.listen(PORT, () => {
//     console.log(`Servern körs på http://localhost:${PORT}`);
// });



// import express from 'express';
// import path from 'path';

// import express from 'express'; import path from 'path'; import { fileURLToPath } from 'url'; import sassMiddleware from 'node-sass-middleware'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);

// const app = express();
// const port = 3000;


// app.use(sassMiddleware( {
//   src: path.join(__dirname, 'src', 'styles'),
//   dest: path.join(__dirname, 'public' , 'css'), 
//   debug: true, 
//   outputStyle: 'compressed', 
//   prefix: '/css'
// }));

// // Servera alla statiska filer från -mappen
// app.use(express.static(path.join(__dirname, 'public')));

// // Hantera förfrågningar till rotvägen (t.ex. index.html)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Servern körs på http://localhost:${port}`);
// });
// 

// import express from 'express';
// import path from 'path';

// const app = express();
// const port = 3000;

// // Servera alla statiska filer från src och public (om du har en public-mapp)
// app.use('/src', express.static(path.join(process.cwd(), 'src')));
// app.use('/public', express.static(path.join(process.cwd(), 'public')));

// // Hantera alla förfrågningar till root (t.ex. index.html)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(process.cwd(), 'index.html')); // Kontrollera att index.html finns här
// });

// app.listen(port, () => {
//   console.log(`Servern körs på http://localhost:${port}`);
// });








////////

// import express from 'express';
// import path from 'path';

// const app = express();
// const port = 3000;

// // Servera statiska filer från dist-mappen
// app.use(express.static(path.join(__dirname, 'dist')));

// // Hantera alla förfrågningar och skicka index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.get('/about', (req, res) => { 
//   res.sendFile(path.join(__dirname, 
// 'dist', 'about.html'));
// });

// app.get('/contact', (req, res) => { 
//   res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
// });

// app.get('/cafe', (req, res ) => { 
//   res.sendFile(path.join(__dirname, 'dist', 'cafe.html'));
// });

// app.get('*', (req, res) => {
//   console.log('Serving index.html (catch-all)');
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Servern körs på http://localhost:${port}`);
// });



////////////////////////////// Latest



// import express from 'express';
// import axios from 'axios';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import markdownIt from 'markdown-it';

// const app = express();
// const port = 5080;


// // Middleware to remove old path "/Group-d-assignment/" from all incoming routes
// app.use((req, res, next) => {
//   // Remove /Group-d-assignment/ from URL:s
//   if (req.url.includes('/Group-d-assignment/')) {
//     req.url = req.url.replace('/Group-d-assignment/', '/');
//   }
//   next();
// });

// //  Fetch actual file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// //EJS as template engine 
// app.set('view engine', 'ejs'); 
// app.set('views', path.join(__dirname, 'views')); 

// // Serve static files from dist mapp (vite)
// app.use(express.static(path.join(__dirname, 'dist')));

// //Get list on movies from API 
// app.get('/', async (req,res) => { 
//   try { 
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     const movies = response.data; 
//     res.render('index', {movies});
//   } catch (error) { 
//     console.error('Error fetching movies:', error); 
//     res.status(500).send('Error fetching movies');
//   }
// });

// //Get specific movie from API 
// app.get('/movie/:id', async (req,res) => { 
//   try { 
//     const { id } = req.params; 
//     const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
//     const movie = response.data; 

//     // Render movie intro with Markdown
//     const md = new markdownIt(); 
//     const introHtml = md.render(movie.intro); 
    
//     res.render('movie', { movie, introHtml }); 
//   } catch (error) { 
//     console.error('Error fetching movie:', error); 
//     res.status(404).render('error', { message: 'Movie not found'}); 
//   }
// }); 

// //Error page for wrong routes
// app.get('*', (req, res) => { 
//   res.status(404).render('error', { message: 'Page not found'}); 
// });

// // app.use(express.static(path.join(__dirname, 'dist')));

// // Handle all requests and send index.html
// app.get('/', (req, res) => {
//   console.log('Serving index.html');
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.get('/about', (req, res) => { 
//   console.log('Serving about.html');
//   res.sendFile(path.join(__dirname, 'dist', 'about.html'));
// });

// app.get('/contact', (req, res) => { 
//   console.log('Serving contact.html');
//   res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
// });

// app.get('/cafe', (req, res ) => { 
//   console.log('Serving cafe.html');
//   res.sendFile(path.join(__dirname, 'dist', 'cafe.html'));
// });


// app.listen(port, () => {
//   console.log(`Servern körs på http://localhost:${port}`);
// });

////////////////////////////// Latest


// import express from 'express';
// import axios from 'axios';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import markdownIt from 'markdown-it';

// const app = express();
// const port = 5080;




// // Middleware to remove old path "/Group-d-assignment/" from all incoming routes
// app.use((req, res, next) => {
//   // Remove /Group-d-assignment/ from URL:s
//   if (req.url.includes('/Group-d-assignment/')) {
//     req.url = req.url.replace('/Group-d-assignment/', '/');
//   }
//   next();
// });

// // Fetch actual file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // EJS as template engine 
// app.set('view engine', 'ejs'); 
// app.set('views', path.join(__dirname, 'views')); 

// // Serve static files from dist folder (Vite build)
// app.use(express.static(path.join(__dirname, 'dist')));



// // Proxy for old API path to fetch from new API
// app.use('/Group-d-assignment/database/movies.json', async (req, res) => {
//   try {
//     // Fetch data from the new API
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     res.json(response.data); // Send the response as JSON
//   } catch (error) {
//     console.error('Error proxying movies:', error);
//     res.status(500).send('Error fetching movies');
//   }
// });

// // Get list of movies from the new API
// app.get('/', async (req, res) => {
//   try {
//     // Hämta data från nya API:et
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     const movies = response.data;

//     // Rendera index.ejs med de hämtade filmerna
//     res.render('index', { movies });
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     res.status(500).send('Error fetching movies');
//   }
// });

// // Get specific movie from API
// app.get('/movie/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
//     const movie = response.data;

//     // Rendera movie intro med Markdown
//     const md = new markdownIt();
//     const introHtml = md.render(movie.intro);
    
//     res.render('movie', { movie, introHtml });
//   } catch (error) {
//     console.error('Error fetching movie:', error);
//     res.status(404).render('error', { message: 'Movie not found' });
//   }
// });

// // Error page for wrong routes
// app.get('*', (req, res) => {
//   res.status(404).render('error', { message: 'Page not found' });
// });

// // Handle all requests and send the correct HTML file from dist
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

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



///////////////////////////////////////

// import express from 'express';
// import axios from 'axios';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import markdownIt from 'markdown-it';

// const app = express();
// const port = 5080;

// // Middleware to remove old path "/Group-d-assignment/" from all incoming routes
// app.use((req, res, next) => {
//   // Remove /Group-d-assignment/ from URL:s
//   if (req.url.includes('/Group-d-assignment/')) {
//     req.url = req.url.replace('/Group-d-assignment/', '/');
//   }
//   next();
// });

// // Fetch actual file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // EJS as template engine 
// app.set('view engine', 'ejs'); 
// app.set('views', path.join(__dirname, 'views')); 

// // Serve static files from dist folder (Vite build)
// app.use(express.static(path.join(__dirname, 'dist')));

// // Proxy for old API path to fetch from new API
// app.use('/database/movies.json', async (req, res) => {
//   try {
//     // Fetch data from the new API
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     res.json(response.data); // Send the response as JSON
//   } catch (error) {
//     console.error('Error proxying movies:', error);
//     res.status(500).send('Error fetching movies');
//   }
// });

// // Get list of movies from the new API
// app.get('/', async (req, res) => {
//   try {
//     // Hämta data från nya API:et
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     const movies = response.data;

//     // Rendera index.ejs med de hämtade filmerna
//     res.render('index', { movies });
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     res.status(500).send('Error fetching movies');
//   }
// });

// // Get specific movie from API
// app.get('/movie/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
//     const movie = response.data;

//     // Rendera movie intro med Markdown
//     const md = new markdownIt();
//     const introHtml = md.render(movie.intro);
    
//     res.render('movie', { movie, introHtml });
//   } catch (error) {
//     console.error('Error fetching movie:', error);
//     res.status(404).render('error', { message: 'Movie not found' });
//   }
// });

// // Error page for wrong routes
// app.get('*', (req, res) => {
//   res.status(404).render('error', { message: 'Page not found' });
// });

// // Handle all requests and send the correct HTML file from dist
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

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });




////////////////////////////////////////////

import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import markdownIt from 'markdown-it';

const app = express();
const port = 5080;

// Try if this preventing new api to load
// Middleware to remove old path "/Group-d-assignment/" from all incoming routes
app.use((req, res, next) => {
  if (req.url.includes('/Group-d-assignment/')) {
    req.url = req.url.replace('/Group-d-assignment/', '/');
  }
  next();
});

// Fetch actual file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//////////////
// app.get('/test-api', async (req, res) => {
//   try {
//     const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
//     console.log('API response:', response.data);
//     res.send('API is working!');
//   } catch (error) {
//     console.error('API error:', error);
//     res.status(500).send('API is not working!');
//   }
// });
//////////////////


// EJS as template engine 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// Serve static files from dist folder (Vite build)
// app.use(express.static(path.join(__dirname, 'dist')));
console.log('Server started and route is ready.');
// Fetch movies from API and pass them to EJS view
app.get('/', async (req, res) => {
  try {
    // Fetch movie data from new API
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
    const movies = response.data;

    console.log('API Response:', movies); // Logga ut svaret
    console.log('Is Array:', Array.isArray(movies)); // Kolla om det är en array
  
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

// Error page for wrong routes
app.get('*', (req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});

// Handle all requests and send the correct HTML file from dist
app.get('/about', (req, res) => {
  console.log('Serving about.html');
  res.sendFile(path.join(__dirname, 'dist', 'about.html'));
});

app.get('/contact', (req, res) => {
  console.log('Serving contact.html');
  res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
});

app.get('/cafe', (req, res) => {
  console.log('Serving cafe.html');
  res.sendFile(path.join(__dirname, 'dist', 'cafe.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
