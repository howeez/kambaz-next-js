"use client";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, updateCourse, deleteCourse } from "../Courses/reducer";
import { addEnrollment, removeEnrollment } from "../Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments ?? []);

  const [showAll, setShowAll] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isEnrolled = (courseNumber: string) =>
    enrollments.some((e: any) => e.user === currentUser._id && e.course === courseNumber);

  const displayedCourses = showAll ? courses : courses.filter((c: any) => isEnrolled(c.number));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      <Button
        className="mb-3 float-end"
        variant="info"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Enrolled Only" : "Show All Courses"}
      </Button>
      <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {displayedCourses.map((course: any) => (
          <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <CardImg
                src={course.image}
                variant="top"
                width="100%"
                height={160}
                alt={`${course.name} thumbnail`}
              />
              <CardBody className="card-body">
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  {course.number} {course.name}
                </CardTitle>
                <CardText
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  {course.description}
                </CardText>

                {/* Route access */}
                {(currentUser.role === "FACULTY" || isEnrolled(course.number)) ? (
                  <Link href={`/Courses/${course._id}/Home`}>
                    <Button variant="primary">Go</Button>
                  </Link>
                ) : (
                  <Button variant="secondary" disabled>
                    Go
                  </Button>
                )}

                {/* Enroll/Unenroll buttons for students */}
                {currentUser.role !== "FACULTY" && (
                  isEnrolled(course.number) ? (
                    <Button
                      className="float-end ms-2"
                      variant="danger"
                      onClick={() =>
                        dispatch(removeEnrollment({ user: currentUser._id, course: course.number }))
                      }
                    >
                      Unenroll
                    </Button>
                  ) : (
                    <Button
                      className="float-end ms-2"
                      variant="success"
                      onClick={() =>
                        dispatch(addEnrollment({ user: currentUser._id, course: course.number }))
                      }
                    >
                      Enroll
                    </Button>
                  )
                )}

                {/* Faculty controls */}
                {currentUser.role === "FACULTY" && (
                  <>
                    <button
                      className="btn btn-danger float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning me-2 float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
