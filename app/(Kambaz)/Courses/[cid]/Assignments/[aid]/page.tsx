"use client";

import { useParams, useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "../reducer"; // make sure this exists
import { ParamValue } from "next/dist/server/request/params";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const assignment = assignments.find((a: { _id: ParamValue; }) => a._id === aid);

  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    points: 0,
    group: "ASSIGNMENTS",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (!assignment) return;
    setFormData({
      title: assignment.title || "",
      description: assignment.description || "",
      points: assignment.points || 0,
      group: assignment.group || "ASSIGNMENTS",
      dueDate: assignment.dueDate?.substring(0, 10) || "",
      availableFrom: assignment.availableFrom?.substring(0, 10) || "",
      availableUntil: assignment.availableUntil?.substring(0, 10) || "",
    });
  }, [assignment]);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    dispatch(updateAssignment({ ...assignment, ...formData }));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="wd-title">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={formData.points}
              onChange={(e) => handleChange("points", Number(e.target.value))}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-group">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={10}>
            <Form.Select
              value={formData.group}
              onChange={(e) => handleChange("group", e.target.value)}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleChange("dueDate", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={formData.availableFrom}
                onChange={(e) => handleChange("availableFrom", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="wd-available-until">
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                type="date"
                value={formData.availableUntil}
                onChange={(e) => handleChange("availableUntil", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
