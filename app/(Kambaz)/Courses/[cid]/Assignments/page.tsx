"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem, Button, Modal } from "react-bootstrap";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; // make sure your assignmentsReducer has this
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useState } from "react";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const course = courses.find((c: any) => c._id === cid);

  const filteredAssignments = course
    ? assignments.filter((a: { course: any }) => a.course === course._id)
    : [];

  const [showModal, setShowModal] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedAssignmentId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedAssignmentId) {
      dispatch(deleteAssignment(selectedAssignmentId));
    }
    setShowModal(false);
    setSelectedAssignmentId(null);
  };

  return (
    <div id="wd-assignments">
      <br />
      <AssignmentControls/>
      <br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {filteredAssignments.length === 0 && (
              <ListGroupItem className="wd-lesson p-3 ps-1">
                No assignments available for this course.
              </ListGroupItem>
            )}
            {filteredAssignments.map((assignment: { _id: Key; title: string | number | ReactElement<any, string | JSXElementConstructor<any>> }) => (
              <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none text-dark"
                  >
                    {assignment.title}
                  </Link>
                </div>
                <BsTrash
                  className="text-danger cursor-pointer"
                  style={{ fontSize: "1.2rem" }}
                  onClick={() => handleDeleteClick(assignment._id as string)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
