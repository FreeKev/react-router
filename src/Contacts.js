import React, { Component } from 'react';
import './App.css';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <h1>Where to find me</h1>
        <ol>
          <li>555-555-5555</li>
          <li>totally_licensed@realdoc.com</li>
          <li>Whisper my name into a pigeons ear</li>
        </ol>
      </div>
    );
  }
}

export default Contacts;
