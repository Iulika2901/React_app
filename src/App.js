import React from 'react';
import logo from './logo.svg';
import './App.css';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  getNewCaracter() {
    const randomNumber=Math.round(Math.random()*82)
    console.log("Get New Character from a button")
    const url = "https://swapi.dev/api/people/${randomNumber}/"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        });

      })
   
  }

  render() {
    return (
      <div>
        {
          this.state.loadChararcter && 
           <div>
                 <h1>{this.state.name}</h1>
                  <p>{this.state.height} cm</p>
                   <p>Homeworld: {this.state.homeworld}</p>
                   <ul>
                     {this.state.films.map((film, index) => (
                    <li key={index}>{film}</li>
                   ))}
                 </ul>
           </div>
        }
    
        <button
          type="button"
          onClick={() => this.getNewCaracter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
