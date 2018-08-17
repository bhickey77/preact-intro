import { h, Component } from 'preact';
import logo from './logo.svg';
import './App.css';
import linkState from 'linkstate';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      nameList: [],
    }
  }  

  addName = () => {
    this.setState({
      ...this.state,
      nameList: [
        ...this.state.nameList,
        this.state.name,
      ],
      name: '',
    })
  }
  
  render({}, {name, nameList}) {
    return (
      <div class="App">
        <header class="App-header">
          <img src={logo} class="App-logo" alt="logo" />
          <h1 class="App-title">Welcome to Preact</h1>
        </header>
        <p class="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={name} onInput={linkState(this, 'name')}/>
        <input type="submit" onClick={this.addName}/>
        <ul>
          {
            nameList.map(name => { return <li> {name} </li>})
          }
        </ul>
      </div>
    );
  }
}

export default App;
