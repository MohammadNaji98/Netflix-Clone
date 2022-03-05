import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';


export default function ModalMonie({ data, show, handleClose }) {


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Image variant="top" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} style={{ width: '18rem', alignItems: 'center', margin: 'auto', display: 'block' }} /></Modal.Body>
                <Modal.Body>
                    <Form>
                        <Form.Group style={{ width: '18rem', alignItems: 'center', margin: 'auto', display: 'block' }}>
                            <Form.Label>Your Comment :</Form.Label>
                            <Form.Control type="Comment" placeholder="Your Comment" />
                            <Button variant="success">Add Your Comment</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}