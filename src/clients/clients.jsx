import React from 'react';
import Client from './client';
class Clients extends React.Component {
  render() {
    return(
      <div className="clients">
        <h1 className="textomasgrande">Clientes</h1>
        <hr/>
        <Client/>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Clients;
