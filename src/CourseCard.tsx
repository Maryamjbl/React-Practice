function CourseCard() {
let courses = [
  {
    id: 1,
    name: "MERN Stack",
    description: "Learn to build web applications using MongoDB, Express.js, React, and Node.js.",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Python",
    description: "Learn the basics of Python programming language and its applications.",
    duration: "2 months", 
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Java",
    description: "Learn Java programming language and its applications in software development.",
    duration: "4 months",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Data Science", 
    description: "Learn data analysis, visualization, and machine learning techniques using Python.",
    duration: "5 months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "React",
    description: "Learn to build user interfaces using React.js library.",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
];

  return (
    <div className="row g-4">
      {courses.map((course) => (
        <div className="col-lg-4" key={course.id}>
          <div className="card h-100 shadow-sm border-1px">
            <img
              src={course.image}
              className="card-img-top fw-bold"
              style={{ height: "200px", objectFit: "cover" }}
              alt={course.name}
            />
            <div className="card-body">
              <h6 className="card-title">{course.name}</h6>
              <span className="text-danger">{course.duration}</span>
              <p className="card-text">{course.description}</p>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
