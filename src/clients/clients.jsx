import React from 'react';
import Client from './client';
class Clients extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedClient: {},
      clients: [
        {
          rut: 16327,
          name: "Alejandro",
          lastname: "Rodriguez"
        },
        {
          rut: 16322,
          name: "Gonzalo",
          lastname: "Azocar"
        },
        {
        rut: 163327,
        name: "Esteban",
        lastname: "Fajardo"
        }
      ]
    }
    this.handleClient = this.handleClient.bind(this);
  }

 handleClient(client) {
   var clients = this.state.clients;
   var arr = []

   for(let p in clients) {
     if(clients[p].rut == client.rut) {
       arr.push(client)
     } else {
       arr.push(clients[p])
     }
   }

   this.setState({clients: arr});
 }
  render() {
    return(
      <div className="clients">
        <h1 className="textomasgrande">Clientes</h1>
        <hr/>
        <Client handleClient={this.handleClient} client={this.state.selectedClient} />
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
