import React, {Component} from 'react';
import firebase from 'firebase';
export default class Client extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {}
    }



    this.handleForm = this.handleForm.bind(this);
    this.handleRut =   this.handleRut.bind(this);
    this.handleName=   this.handleName.bind(this);
    this.handleLastName =   this.handleLastName.bind(this);
  }



  handleForm(event) {
     event.preventDefault();
     console.log("Se envio el formulario", this.state.client);
     let cliente = this.state.client;
   firebase.database().ref('CLIENTES/' + cliente.rut).set(cliente);
  }

  handleRut(event) {
    let rut = event.target.value;
    var client = this.state.client;
    client.rut = rut;
    this.setState({client: client});

  }
  handleName(event) {
    let name = event.target.value;
    var client = this.state.client;
    client.name = name;
    this.setState({client: client});
  }
  handleLastName(event) {
    let lt = event.target.value;
    var client = this.state.client;
    client.lastname = lt;
    this.setState({client: client});
  }
  render(){
    return(
      <div className="client">
        <h1>Nuevo Clientes</h1>
        <hr/>
        <form onSubmit={this.handleForm}>
          <input
            onChange={this.handleRut}

            type="text"/>
          <input
            onChange={this.handleName}

            type="text"/>
          <input
            onChange={this.handleLastName}

            type="text"/>
          <input type="submit"/>

        </form>
      </div>
    )
  }
}
