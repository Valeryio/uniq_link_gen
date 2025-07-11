

const allowedOrigins = [
  "154.72.118.26:5174",
	"http://localhost:5174/",
	"http://localhost:5174/login/",
	"http://localhost:5174/register/",
	"https://uniq-link-gen-frontend.onrender.com"
];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

module.exports = corsOptions;