const users = [
  { id: 1, name: "Aarav Sharma",   email: "aarav@example.com",  role: "student",    enrolled: ["c1", "c3"] },
  { id: 2, name: "Priya Mehta",    email: "priya@example.com",  role: "student",    enrolled: ["c2"]       },
  { id: 3, name: "Dr. Neha Singh", email: "neha@example.com",   role: "instructor", enrolled: []           },
];

const courses = [
  { id: "c1", title: "MERN Stack Development", instructor: "Dr. Neha Singh", category: "Web Development", price: 1999, rating: 4.8 },
  { id: "c2", title: "Python for Data Science", instructor: "Dr. Neha Singh", category: "Data Science",   price: 1499, rating: 4.6 },
  { id: "c3", title: "React Advanced Patterns", instructor: "Dr. Neha Singh", category: "Frontend",       price: 2499, rating: 4.9 },
];

const reviews = [
  { id: 1, courseId: "c1", userId: 1, rating: 5, comment: "Excellent course!" },
  { id: 2, courseId: "c2", userId: 2, rating: 4, comment: "Very helpful."     },
];

module.exports = { users, courses, reviews };
