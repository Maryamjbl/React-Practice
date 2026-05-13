function CourseObject() {
  let courses = [
    {
      id: 1,
      name: "MERN Stack",
      description:
        "Learn to build web applications using MongoDB, Express.js, React, and Node.js.",
      duration: "3 months",
    },
    {
      id: 2,
      name: "Python",
      description:
        "Learn the basics of Python programming language and its applications.",
      duration: "2 months",
    },
    {
      id: 3,
      name: "Java",
      description:
        "Learn Java programming language and its applications in software development.",
      duration: "4 months",
    },
    {
      id: 4,
      name: "Data Science",
      description:
        "Learn data analysis, visualization, and machine learning techniques using Python.",
      duration: "5 months",
    },
    {
      id: 5,
      name: "React",
      description: "Learn to build user interfaces using React.js library.",
      duration: "3 months",
    },
  ];
  return (
    <div className="p-4">
      <h2 style={{ color: "green" }}>Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item " key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseObject;
