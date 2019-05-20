const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://gregmcleod.dev"
    : "http://localhost:3001";

export default SERVER_URL;
