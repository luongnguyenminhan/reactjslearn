import React, { useState } from "react";
import "./HomePage.css"; // Import the CSS file
import DataTable from "../components/ConfirmTable";
import PrimarySearchAppBar from "../components/NavBar";
import SplitButton from "../components/ButtomDrop";

function HomePage() {
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseName = e.target.courseName.value;
    const courseAverage = e.target.courseAverage.value;
    const ID = e.target.ID.value;
    const Major = e.target.Major.value;
    const AbsentSlots = e.target.AbsentSlots.value;
    const CourseStatus = e.target.CourseStatus.value;
    const FailedCourses = e.target.FailedCourses.value;
    const Club = e.target.Club.value;
    const ParttimeJob = e.target.ParttimeJob.value;
    const Scholarship = e.target.Scholarship.value;
    const LearningMethod = e.target.LearningMethod.value;

    const newCourse = {
      id: ID,
      name: courseName,
      average: courseAverage,
      major: Major,
      absent: AbsentSlots,
      status: CourseStatus,
      failed: FailedCourses,
      club: Club,
      job: ParttimeJob,
      scholarship: Scholarship,
      learning: LearningMethod,
    };
    setCourses([...courses, newCourse]);
    e.target.reset();
  };

  return (
    <div className="container">
      {" "}
      {/* Add a class to the outer container */}
      <PrimarySearchAppBar />
      <h1>COUSRE AVERAGE FORM</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            float: "left",
            width: "48%",
          }}
        >
          <label htmlFor="ID">ID:</label>
          <input
            type="text"
            id="ID"
            name="ID"
            required
            placeholder="Enter student ID"
          />
          <br />

          <label htmlFor="Major">Major:</label>
          <input
            type="text"
            id="Major"
            name="Major"
            required
            placeholder="Enter student major"
          />
          <br />

          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            required
            placeholder="Enter course name"
          />
          <br />

          <label htmlFor="AbsentSlots">Absent Slots:</label>
          <input
            type="number"
            id="AbsentSlots"
            name="AbsentSlots"
            required
            placeholder="Enter number of absent slots"
          />
          <br />

          <label htmlFor="courseAverage">Average Score:</label>
          <input
            type="number"
            id="courseAverage"
            name="courseAverage"
            required
            placeholder="Enter average score"
          />
          <br />

          <label htmlFor="CourseStatus">Course Status:</label>
          <select id="CourseStatus" name="CourseStatus" required>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
          <br />
        </div>

        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          float: "right",
          width: "48%",
        }}>
          <label htmlFor="FailedCourses">Failed Courses:</label>
          <input
            type="number"
            id="FailedCourses"
            name="FailedCourses"
            required
            placeholder="Enter number of failed courses"
          />
          <br />

          <label htmlFor="Club">Club Membership:</label>
          <select id="Club" name="Club" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />

          <label htmlFor="ParttimeJob">Part-time Job:</label>
          <select id="ParttimeJob" name="ParttimeJob" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />

          <label htmlFor="Scholarship">Scholarship Percentage:</label>
          <input
            type="text"
            id="Scholarship"
            name="Scholarship"
            required
            placeholder="Enter scholarship percentage"
          />
          <br />

          <label htmlFor="LearningMethod">Learning Method:</label>
          <select id="LearningMethod" name="LearningMethod" required>
            <option value="Self-learning">Self-learning</option>
            <option value="Group study">Group study</option>
            <option value="Tutoring">Tutoring</option>
          </select>
          <br />
        </div>
          <input type="submit" value="Add Data" />
      </form>
      <br />
      <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}>

      <h2>Entered Courses:</h2>
      <DataTable />
      <div
        style={{
          textAlign: "right",
          color: "#FFFFFF",
          margin: "10px",
        }}
      >
        <SplitButton />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
