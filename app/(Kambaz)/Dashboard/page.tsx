import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/4550" className="wd-dashboard-course-link">
                    <Image src="/images/webdev.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> CS4550 Web Development </h5>
                        <p className="wd-dashboard-course-title">
                            WebDev
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/4400" className="wd-dashboard-course-link">
                    <Image src="/images/syssec.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> CS4400 Systems Security </h5>
                        <p className="wd-dashboard-course-title">
                            Systems Security
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/1320" className="wd-dashboard-course-link">
                    <Image src="/images/publicspeaking.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> COMM1320 Public Speaking </h5>
                        <p className="wd-dashboard-course-title">
                            Public Speaking
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/3500" className="wd-dashboard-course-link">
                    <Image src="/images/ModernConflicts.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> HIST3500 Modern Conflicts </h5>
                        <p className="wd-dashboard-course-title">
                        Modern Conflicts
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/2200" className="wd-dashboard-course-link">
                    <Image src="/images/arthistory.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> HIST2200 Art History </h5>
                        <p className="wd-dashboard-course-title">
                        Art History
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/4120" className="wd-dashboard-course-link">
                    <Image src="/images/algo.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> CS4120 Algorithms </h5>
                        <p className="wd-dashboard-course-title">
                        Algorithms
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
                <div className="wd-dashboard-course"> <Link href="/Courses/4850" className="wd-dashboard-course-link">
                    <Image src="/images/GameDesign.jpg" width={200} height={150} alt={""} />
                    <div>
                        <h5> CS4850 Game Design </h5>
                        <p className="wd-dashboard-course-title">
                        Game Design
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>
            </div>
        </div>
    );
}
