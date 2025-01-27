const corsOptions = {
  origin: process.env.FRONTED_URL,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
