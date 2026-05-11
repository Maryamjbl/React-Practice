function CourseList() {
  let courses = ["MERN Stack", "Python", "Java", "Data Science", "React","Node.js"];
  return (
    <div className="p-4">
      <h2 style={{ color: "green" }}>Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item ">{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList;
