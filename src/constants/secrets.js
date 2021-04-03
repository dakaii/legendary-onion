const prod = {
    GOOGLE_MAPS_SECRET: '',
};
const dev = {
    GOOGLE_MAPS_SECRET: 'AIzaSyBCzwozkwhphRlfvnbNaZ_9gVyz2nCCl2U',
};
export const secrets = process.env.NODE_ENV === 'development' ? dev : prod;
