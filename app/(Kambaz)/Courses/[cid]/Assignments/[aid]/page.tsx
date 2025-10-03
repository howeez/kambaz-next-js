"use client";

import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-3">
            <Form>
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="wd-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        defaultValue="The assignment is available online."
                    />
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-points">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={100} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-group">
                    <Form.Label column sm={2}>Assignment Group</Form.Label>
                    <Col sm={10}>
                        <Form.Select defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
                    <Form.Label column sm={2}>Display Grade as</Form.Label>
                    <Col sm={10}>
                        <Form.Select defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
                    <Form.Label column sm={2}>Submission Type</Form.Label>
                    <Col sm={10}>
                        <Form.Select defaultValue="Online">
                            <option value="Online">Online</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Online Entry Options</Form.Label>
                    <div>
                        <Form.Check type="checkbox" label="Text Entry" />
                        <Form.Check type="checkbox" label="Website URL" defaultChecked />
                        <Form.Check type="checkbox" label="Media Recordings" />
                        <Form.Check type="checkbox" label="Student Annotation" />
                        <Form.Check type="checkbox" label="File Uploads" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="wd-assign-to">
                    <Form.Label>Assign to</Form.Label>
                    <Form.Select multiple defaultValue="Everyone">
                        <option value="Everyone">Everyone</option>
                    </Form.Select>
                </Form.Group>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="wd-due-date">
                            <Form.Label>Due</Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-13" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="wd-available-from">
                            <Form.Label>Available From</Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-06" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="wd-available-until">
                            <Form.Label>Available Until</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="me-2">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}
