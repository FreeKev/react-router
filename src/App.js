import React, { Component } from 'react';
import './App.css';
// Importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Importing page Components
import Home from './Home.js'
import Blog from './Blog.js'
import FavoriteMovie from './FavoriteMovie.js'
import FavoriteFood from './FavoriteFood.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link><br />
          <Link to="/blog">Blog</Link><br />
          <Link to="/movie">Favorite Movie Info</Link><br />
          <Link to="/food">Favorite Food Info</Link><br />
          <Link to="/about">About Me</Link>

          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/movie" component={FavoriteMovie} />
          <Route exact path="/food" component={FavoriteFood} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
