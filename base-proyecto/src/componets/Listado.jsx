import Table from "react-bootstrap/Table"

function Listado({colaboradores}) {

    return (
        <Table responsive bordered striped>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador)=>(
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
      </Table>
    )
  }
  
  export default Listado
  