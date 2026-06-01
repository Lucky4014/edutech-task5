const { reviews } = require("../data/mockData");

const getReviews = (req, res) => {
  const { courseId } = req.query;
  const result = courseId ? reviews.filter((r) => r.courseId === courseId) : reviews;
  res.json({ success: true, count: result.length, data: result });
};

const createReview = (req, res) => {
  const { courseId, userId, rating, comment } = req.body;
  if (!courseId || !userId || !rating) return res.status(400).json({ success: false, error: "courseId, userId, rating required hai" });
  const newReview = { id: reviews.length + 1, courseId, userId, rating, comment: comment || "" };
  reviews.push(newReview);
  res.status(201).json({ success: true, data: newReview });
};

module.exports = { getReviews, createReview };