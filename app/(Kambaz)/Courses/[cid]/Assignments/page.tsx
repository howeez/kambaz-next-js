import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControls from "./AssignmentItemControls";

export default function Assignments() {
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
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Assignment 1
              <AssignmentItemControls/>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Assignment 2
              <AssignmentItemControls/>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Assignment 3
              <AssignmentItemControls/>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Assignment 4
              <AssignmentItemControls/>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>

    // <div id="wd-assignments">
    //   <input placeholder="Search for Assignments"
    //          id="wd-search-assignment" />
    //   <button id="wd-add-assignment-group">+ Group</button>
    //   <button id="wd-add-assignment">+ Assignment</button>
    //   <h3 id="wd-assignments-title">
    //     ASSIGNMENTS 40% of Total <button>+</button> </h3>
    //   <ul id="wd-assignment-list">
    //     <li className="wd-assignment-list-item">
    //       <Link href="/Courses/1234/Assignments/123"
    //          className="wd-assignment-link" >
    //         A1 - ENV + HTML
    //       </Link> </li>
    //     <li className="wd-assignment-list-item">
    //     <Link href="/Courses/1234/Assignments/234"
    //          className="wd-assignment-link" >
    //         A2 - CSS + BOOTSTRAP
    //       </Link>
    //     </li>
    //     <li className="wd-assignment-list-item">
    //     <Link href="/Courses/1234/Assignments/345"
    //          className="wd-assignment-link" >
    //         A3 - JS + REACT
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
}
