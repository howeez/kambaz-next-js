"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        // Special case for People route
        const procecced_link = link === "People" ? `${link}/Table` : link;
        const path = `/Courses/${cid}/${procecced_link}`;
        const isActive = pathname === path;
        return (
          <Link
            key={link}
            href={path}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
            {link}
          </Link>
        );
      })}
    </div>
  );
}
