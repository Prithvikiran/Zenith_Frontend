
const API_BASE_URL=process.env.REACT_APP_BACKEND_API_BASE_URL;

console.log(API_BASE_URL)

const endpoints = {
  register:`${API_BASE_URL}/auth/register`,
  login:`${API_BASE_URL}/auth/login`

};

export default endpoints;
