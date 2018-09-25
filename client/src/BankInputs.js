import React, { Component } from 'react';


class BankInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password:"",
            accountBalance:""
        }
    }

    nameStateChange =(e)=>{
        this.setState({name: e.target.value})
    };

    passStateChange =(e)=>{
        this.setState({password: e.target.value});
    }
    accountStateChange =(e)=>{
        this.setState({accountBalance: e.target.value})
    }

    submitForm = (e)=> {

    }

    render() {


        return (
            <div className="App">
                <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="Enter Name" value={this.state.name} onChange={this.nameStateChange}/>
                    <br/><br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.passStateChange}/>
                    <br/><br/>
                <label htmlFor="accountBalance">Account Balance: </label>
                <input type="text" id="accountBalance" placeholder="Enter Account Balance" value={this.state.accountBalance} onChange={this.accountStateChange}/>
                </form>
            </div>
        );
    }
}

export default BankInputs;
