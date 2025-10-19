"use client";
import { useParams } from "next/navigation";
import db from "../../../Database";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControls from "./AssignmentItemControls";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  const { cid } = useParams();
  const courses = db.courses;
  const assignments = db.assignments;
  const course = courses.find((c: any) => c._id === cid);
  const filteredAssignments = course
    ? assignments.filter((a: any) => a.course === course._id)
    : [];

  return (
    <div id="wd-assignments">
      <br />
      <AssignmentControls />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments{" "}
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {filteredAssignments.length === 0 && (
              <ListGroupItem className="wd-lesson p-3 ps-1">
                No assignments available for this course.
              </ListGroupItem>
            )}
            {filteredAssignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id}
                className="wd-lesson p-3 ps-1"
              >
                <BsGripVertical className="me-2 fs-3" />{" "}
                {/* Link to assignment editor with course and assignment id */}
                <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark">
                  {assignment.title}
                </Link>{" "}
                <AssignmentItemControls />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
