import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const EliminaConfirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
  return (
    <Alert variant="warning">
      <p>{mensaje}</p>
      <div>
        <Button variant="danger" className='m-2' onClick={onConfirmar}>Confirmar</Button>
        <Button variant="secondary" className='m-2' onClick={onCancelar}>Cancelar</Button>
      </div>
    </Alert>
  );
};

export default EliminaConfirmacion;