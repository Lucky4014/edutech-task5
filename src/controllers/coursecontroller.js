const { courses } = require("../data/mockData");

const getAllCourses = (req, res) => {
  const { category } = req.query;
  const result = category
    ? courses.filter((c) => c.category.toLowerCase() === category.toLowerCase())
    : courses;
  res.json({ success: true, count: result.length, data: result });
};

const getCourseById = (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) return res.status(404).json({ success: false, error: "Course not found" });
  res.json({ success: true, data: course });
};

const createCourse = (req, res) => {
  const { title, instructor, category, price } = req.body;
  if (!title || !instructor) return res.status(400).json({ success: false, error: "title aur instructor required hai" });
  const newCourse = { id: `c${courses.length + 1}`, title, instructor, category: category || "General", price: price || 0, rating: 0 };
  courses.push(newCourse);
  res.status(201).json({ success: true, data: newCourse });
};

module.exports = { getAllCourses, getCourseById, createCourse };