import axios from "axios";

axios.interceptors.request.use((request) => {
  request.headers["token"] = "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv";
  return request;
});
