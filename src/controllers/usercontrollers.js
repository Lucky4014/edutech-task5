const { users } = require("../data/mockData");

// GET /api/users
const getAllUsers = (req, res) => {
  res.json({ success: true, count: users.length, data: users });
};

// GET /api/users/:id
const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ success: false, error: "User not found" });
  res.json({ success: true, data: user });
};

// POST /api/users
const createUser = (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, error: "name aur email required hai" });
  const newUser = { id: users.length + 1, name, email, role: role || "student", enrolled: [] };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
};

// DELETE /api/users/:id
const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, error: "User not found" });
  const deleted = users.splice(index, 1)[0];
  res.json({ success: true, message: `${deleted.name} deleted` });
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
