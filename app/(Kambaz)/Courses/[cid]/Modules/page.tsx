"use client";
import { useParams } from "next/navigation";
import db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams();
  const courses = db.courses;
  const modules = db.modules;

  // Find the course by _id from the URL param
  const course = courses.find((c: any) => c._id === cid);

  // Filter modules that belong to the course number (e.g. "CS1234")
  const filteredModules = course
    ? modules.filter((module: any) => module.course === course.number)
    : [];

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {filteredModules.length === 0 && (
          <ListGroupItem>No modules available for this course.</ListGroupItem>
        )}
        {filteredModules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
              <ModuleControlButtons />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
