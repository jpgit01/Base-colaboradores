import Form from "react-bootstrap/Form";
function Buscador({ search, handleOnChange }) {
  return (
    <>
      <Form.Control
        id="unico"
        className=" mt-3 mb-3"
        placeholder="busca un colaborador"
        value={search}
        onChange={handleOnChange}
      />
    </>
  );
}

export default Buscador;
