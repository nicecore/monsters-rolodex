import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Mounting is when React puts our component onto the page, when it renders it onto the DOM for the 1st time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // promise comes back with a response, call json method on response to get jsonified response data
      .then((response) => response.json())
      // that gets returned to us as a new promise
      .then((users) => this.setState({ monsters: users }));
  }

  // Arrow functions have a unique property whereby they are scoped automatically/binded to the place where arrow function was defined in 1st place. Since it's definde in our App component it gets lexical scoping (binds the this context to place where it gets defined)

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  // Returns any HTML we want
  render() {

    // Pull the monsters and searchField properties off of state and set them to variables called monsters and searchField
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// Children is a property of every components props object. It is the stuff that gets passed in between the component tags e.g. <CardList> <p>child</p> </CardList - the p tag here is a child of CardList

// By using class component we get access to state. A JS object with properties that we can access at any point inside our class.
// constructor keyword. We call super() inside to call constructor method on the Component class. This gives us access to this.state. It exists on our class App and we can set it to some default value.

// Lifecycle methods - get called at different stages of when this component gets rendered.
