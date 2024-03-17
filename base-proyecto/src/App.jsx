import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Listado from "./componets/Listado";
import Formulario from "./componets/Formulario";
import Buscador from "./componets/Buscador";
import AlertPrincipal from "./componets/Alert";

import EliminaConfirmacion from "./componets/EliminaConfirmacion";

import { BaseColaboradores } from "./assets/BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ bandera: "", mensaje: "", tipo: "" });
  const [search, setSearch] = useState("");
  const [confirmacion, setConfirmacion] = useState({
    mostrar: false,
    id: null,
    nombre: "",
  });

  const handleSubmit = (nuevoColaborador) => {
    const colaborador = { ...nuevoColaborador, id: Date.now() };
    setColaboradores([...colaboradores, colaborador]);
  };

  const handleEliminarColaborador = (id) => {
    const colaborador = colaboradores.find(
      (colaborador) => colaborador.id === id
    );
    if (colaborador) {
      setConfirmacion({ mostrar: true, id, nombre: colaborador.nombre });
    }
  };

  const handleOnChange = (elem) => {
    setSearch(elem.target.value);
  };

  const confirmarEliminarColaborador = () => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== confirmacion.id
    );
    setColaboradores(nuevosColaboradores);
    setConfirmacion({ mostrar: false, id: null, nombre: "" });
  };

  const cancelarEliminarColaborador = () => {
    setConfirmacion({ mostrar: false, id: null, nombre: "" });
  };

  const filtrar = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      {confirmacion.mostrar && (
        <EliminaConfirmacion
          mensaje={`¿Estás seguro que quieres eliminar a ${confirmacion.nombre}?`}
          onConfirmar={confirmarEliminarColaborador}
          onCancelar={cancelarEliminarColaborador}
        />
      )}
      <Container>
        <Col md="12">
          <h1 className="titulo">Lista de colaboradores</h1>
        </Col>

        <Row>
          <Col md="4">
            <Buscador search={search} handleOnChange={handleOnChange} />
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <Listado
              colaboradores={filtrar}
              onDelete={handleEliminarColaborador}
            />
          </Col>
          <Col md="3">
            <h2 className="mt-1 mb-4 subtitulo">Agregar colaborador</h2>
            <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
            {alert.mensaje && (
              <AlertPrincipal tipo={alert.tipo} mensaje={alert.mensaje} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
