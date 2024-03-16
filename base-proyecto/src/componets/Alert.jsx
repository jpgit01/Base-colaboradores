import Alert from 'react-bootstrap/Alert';

function AlertPrincipal({tipo, mensaje}) {
  return (
    <>
    <Alert variant={tipo}>
      <Alert.Heading>{mensaje}</Alert.Heading>
    </Alert>
    </>
  );
}

export default AlertPrincipal;