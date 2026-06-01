const logger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}]  ${req.method}  ${req.originalUrl}`);
  next(); // aage badhao — zaruri hai warna request ruk jaayegi
};

module.exports = logger;
