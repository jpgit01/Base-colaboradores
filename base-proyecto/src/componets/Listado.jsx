import Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button';

function Listado({colaboradores, onDelete}) {

    return (
        <Table responsive bordered striped>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Remover</th>
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
                <td><div className="d-grid gap-2"><Button variant="danger" size="sm" onClick={() => onDelete(colaborador.id)}>Eliminar</Button></div></td>
              </tr>
            ))}
          </tbody>
      </Table>
    )
  }
  
  export default Listado
  