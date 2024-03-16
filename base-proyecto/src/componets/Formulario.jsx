import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = ({ onSubmit, setAlert }) => {
  const [ colaborador, setColaborador ] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setAlert({
        bandera: true,
        mensaje: "Completa todos los campos!",
        tipo: "danger",
      });
      return;
    }

    onSubmit(colaborador);

    setAlert({
      bandera: false,
      mensaje: "Colaborador agregado!",
      tipo: "success",
    });

    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            value={colaborador.nombre}
            placeholder="Nombre del colaborador"
            name="nombre"
            className="mb-4"
            onChange={handleChange}
            
          />
          <Form.Control
            type="email"
            value={colaborador.correo}
            placeholder="Email del colaborador"
            name="correo"
            className="mb-4"
            onChange={handleChange}
            
          />
          <Form.Control
            type="text"
            value={colaborador.edad}
            placeholder="Edad del colaborador"
            name="edad"
            className="mb-4"
            onChange={handleChange}
            
          />
          <Form.Control
            type="text"
            value={colaborador.cargo}
            placeholder="Cargo del colaborador"
            name="cargo"
            className="mb-4"
            onChange={handleChange}
            
          />
          <Form.Control
            type="text"
            value={colaborador.telefono}
            placeholder="Teléfono del colaborador"
            name="telefono"
            className="mb-4"
            onChange={handleChange}
            
          />
          <div className="d-grid gap-2">
          <Button variant="primary" className="mb-3" type="submit">
            Agregar colaborador
          </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default Formulario;
