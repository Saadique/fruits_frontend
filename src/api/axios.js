import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://localhost:8000/';

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Accept'] = 'application/json';

axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.put['Accept'] = 'application/json';

export default axiosInstance;