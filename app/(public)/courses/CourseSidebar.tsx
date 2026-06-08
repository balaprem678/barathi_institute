import React from "react";
import Link from "next/link";

export default function CourseSidebar() {
  const degreeCourses = [
    {
      title: "B.Voc Hotel Management",
      url: "/courses/degree",
    },
    {
      title: "B.Voc Medical Lab Technology",
      url: "/courses/degree",
    },
    {
      title: "B.Voc Emergency Care & Trauma Care Technology",
      url: "/courses/degree",
    },
    {
      title: "B.Voc Operation Theatre Technology",
      url: "/courses/degree",
    },
    {
      title: "B.Voc Hospital Administration",
      url: "/courses/degree",
    },
    {
      title: "B.Sc Hotel Management",
      url: "/courses/degree",
    },
  ];

  const diplomaCourses = [
    {
      title: "Diploma in Hotel Management",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in Food and Beverage Production",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in Food and Beverage Service",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in House Keeping Management",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in Front Office Management",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in Bakery and Confectionery",
      url: "/courses/diploma",
    },
    {
      title: "Health Care Assistant",
      url: "/courses/diploma",
    },
    {
      title: "Diploma in Medical Lab Technician",
      url: "/courses/diploma",
    },
  ];

  return (
    <>
      <style>{`
        .course-sidebar {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: sticky;
          top: 100px;
        }

        .sidebar-main-title {
          background: linear-gradient(135deg, #0d6efd, #0047b3);
          padding: 20px;
          text-align: center;
        }

        .sidebar-main-title h3 {
          margin: 0;
          color: #fff;
          font-size: 24px;
          font-weight: 700;
        }

        .course-section {
          padding: 15px 0;
        }

        .course-heading {
          padding: 0 20px 12px;
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 700;
          color: #0d6efd;
          border-bottom: 2px solid #f1f1f1;
        }

        .course-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .course-list li {
          border-bottom: 1px solid #f7f7f7;
        }

        .course-list li:last-child {
          border-bottom: none;
        }

        .course-list a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          text-decoration: none;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .course-list a:hover {
          background: #f5f9ff;
          color: #0d6efd;
          padding-left: 28px;
        }

        .arrow {
          color: #0d6efd;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .course-list a:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 991px) {
          .course-sidebar {
            position: static;
            margin-bottom: 30px;
          }
        }
      `}</style>

      <div className="course-sidebar">
        <div className="sidebar-main-title">
          <h3>Our Courses</h3>
        </div>

        <div className="course-section">
          <h4 className="course-heading">Degree Courses</h4>

          <ul className="course-list">
            {degreeCourses.map((course, index) => (
              <li key={index}>
                <Link href={course.url}>
                  <span>{course.title}</span>
                  <span className="arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h4 className="course-heading">Diploma Courses</h4>

          <ul className="course-list">
            {diplomaCourses.map((course, index) => (
              <li key={index}>
                <Link href={course.url}>
                  <span>{course.title}</span>
                  <span className="arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}