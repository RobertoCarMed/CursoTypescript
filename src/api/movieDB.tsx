import axios from "axios";


const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e744a271012e6ae90326d4e2821d8fab',
    language: 'es-ES'
  }
});


export default movieDB;