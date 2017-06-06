import React from 'react';
import Client from './client';
class Clients extends React.Component {

  constructor(){
    super();
    this.state = {
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
        rut: 16327,
        name: "Esteban",
        lastname: "Fajardo"
        }
      ]
    }
  }

  render() {
    return(
      <div className="clients">
        <h1 className="textomasgrande">Clientes</h1>
        <hr/>
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
        <tr>
          <td>{client.rut}</td>
          <td>{client.name}</td>
          <td>{client.lastname}</td>
          <td></td>
        </tr>
      )
    })
  }
}
export default Clients;
