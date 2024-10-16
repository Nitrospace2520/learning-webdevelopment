const whiteList = [
  "http://localhost:3500",
  "http://127.0.0.1:5500",
  "https://www.yourdomain.com",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin)
      callback(null, true); //* callback(error, eligibleForCors)
    else callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
