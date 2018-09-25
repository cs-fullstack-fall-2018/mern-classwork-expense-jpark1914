import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import BankInputs from "./BankInputs";

const bankEndpoint = "/bank";
//const bankUser = "Jordan";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            password:"",
            accounts: []
        }
    }
    componentDidMount() {
        this.fetchBank();
    }


    fetchBank() {
        console.log("Getting" + bankEndpoint)
        fetch(bankEndpoint)
            .then(response => {
                if(!response.ok) {
                    throw Error("Failed connection to the API")
                }
                console.log("Response:");
                //console.log(response);
                return response
            })
            .then(response => response.json())
            .then(response => {
            this.setState({
                accounts: response
            })
        })
    }
  render() {
        let testArray = this.state.accounts.map(
            (item)=>
            {
                return(<div>
                    <p>{item.accountBalance}</p>
                </div>)
            }
        );
        console.log("Here is the state info");
        console.log(this.state.accounts)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JP's Bank Recorder</h1>
        </header>
          <h2>
              <BankInputs/>
          </h2>
          {testArray}
      </div>
    );
  }
}

export default App;
