import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"


const Welcome = () => (
    <Container>
        <h1 className="my-4 text-center fw-bold">Benvenuti su EpiBooks</h1>
        <Alert variant='info' className="text-center">
            Prima Applicazione con React!
        </Alert>
    </Container>
)

export default Welcome