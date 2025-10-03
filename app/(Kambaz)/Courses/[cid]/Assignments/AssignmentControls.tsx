import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>

            <Form className="d-flex float-start">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={"Search"}
                />
          </Form>
        </div>
    );
}
