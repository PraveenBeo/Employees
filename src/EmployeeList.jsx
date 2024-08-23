import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmployeeList = ({ employees, updateEmployee, deleteEmployee }) => {

    const [show, setShow] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({});
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClose = () => setShow(false);

    const handleShow = (index, employee) => {
        setCurrentIndex(index);
        setCurrentEmployee(employee);
        setShow(true);
    };

    const handleSave = () => {
        updateEmployee(currentIndex, currentEmployee);
        handleClose();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEmployee({ ...currentEmployee, [name]: value });
      };
    return (
        <div>
            <h2>Employee List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {employees.map((employee, index) => (
                        <tr key={index} style={{ cursor: 'pointer' }} onClick={() => handleShow(index, employee)}>
                            <td>{employee.name}</td>
                            <td>{employee.jobTitle}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Button variant="danger" onClick={(e) => {
                                    e.stopPropagation();
                                    deleteEmployee(index);
                                }}>
                                    Delete
                                </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee : {currentEmployee.name || ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="jobTitle"
                                value={currentEmployee.jobTitle || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={currentEmployee.email || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EmployeeList;
