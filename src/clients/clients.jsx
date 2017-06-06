import React from 'react';
import Client from './client';
import firebase from 'firebase';

class Clients extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedClient: {},
      clients: []
    }
    firebase.database().ref('CLIENTES').on('value', snap =>{
      let clientes = snap.val()
      console.log(clientes);
      var arr = []
      for(let p in clientes) {
        let obj = {
          rut: p ,
          name: clientes[p].name ,
          lastname: clientes[p].lastname
        }
        arr.push(obj);
      }
      console.log(arr);
      this.setState({clients: arr});
    })

  }

  render() {
    return(
      <div className="clients">
        <h1 className="textomasgrande">Clientes</h1>
        <hr/>
        <Client client={this.state.selectedClient} />
        <table>
          <thead>
            <tr>
              <td>Rut</td>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Operaciones</td>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
  renderTable() {
    return this.state.clients.map(client => {
      return(
        <tr key={client.rut}>
          <td>{client.rut}</td>
          <td>{client.name}</td>
          <td>{client.lastname}</td>
          <td>
            <button onClick={() =>{
              console.log(client)
              this.setState({selectedClient: client})
            }}>Editar</button>
          </td>
        </tr>
      )
    })
  }
}
export default Clients;
