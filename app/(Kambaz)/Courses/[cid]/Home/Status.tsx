import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport, BiSolidBarChartAlt2 } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { FaRegCalendar } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "350px" }}>
     <h2>Course Status</h2>
     <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br />
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
      <BiSolidBarChartAlt2 className="me-2 fs-5" /> View Course Stream
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
      <BiSolidBarChartAlt2 className="me-2 fs-5" /> Course Analytics
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
      <FaRegCalendar className="me-2 fs-5" /> View Course Calendar
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
      <CiBellOn className="me-2 fs-5" /> View Course Notification
     </Button>
   </div> );}


// export default function CourseStatus() {
//     return (
//       <div id="wd-course-status">
//         <h2>Course Status</h2>
//         <button>Unpublish</button> <button>Publish</button>
//         {/* Complete on your own */}
//         <button>View Course Notifications</button>
//       </div> );}