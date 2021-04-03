const prod = {
    API_URL: '',
};
const dev = {
    API_URL: 'http://localhost:8081',
};
export const constants = process.env.NODE_ENV === 'development' ? dev : prod;
