import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCalendar, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { RiBook2Line } from "react-icons/ri";
import { HiOutlineInbox } from "react-icons/hi";
import { VscBeaker } from "react-icons/vsc";
export default function KambazNavigation() {
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }} id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center text-white" as="a" href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
      <img id="wd-NEU-logo" src="/images/NU_PMSu_Notched-N_motto_RW.png" width="50px" />
      <br />Northeastern</ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none"><FaRegCircleUser className="fs-1 text-white" />
          <br />Account</Link><br />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-white text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none"><AiOutlineDashboard className="fs-1 text-danger" />
          <br />Dashboard</Link><br />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Dashboard" id="wd-course-link" className="text-white text-decoration-none"><RiBook2Line className="fs-1 text-danger" />
          <br />Courses</Link><br />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none"><FaRegCalendar className="fs-1 text-danger"/>
        Calendar</Link><br />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none"><HiOutlineInbox className="fs-1 text-danger"/>
      <br />Inbox</Link><br />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none"><VscBeaker className="fs-1 text-danger"/>
      <br />Labs</Link><br />
      </ListGroupItem>
    </ListGroup>
  );
}
