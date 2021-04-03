const prod = {
    GOOGLE_MAPS_SECRET: '',
};
const dev = {
    GOOGLE_MAPS_SECRET: '',
};
export const secrets = process.env.NODE_ENV === 'development' ? dev : prod;
