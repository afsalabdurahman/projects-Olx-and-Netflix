const apiUrl = import.meta.env.VITE_API_URL;
const secretKey = import.meta.env.VITE_SECRET_KEY;
 export const  latestMovie=`https://www.omdbapi.com/?s=star&apikey=${secretKey}&page=1`
export const Upcoming=`https://www.omdbapi.com/?s=star&apikey=${secretKey}&page=2`