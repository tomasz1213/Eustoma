import axios from "axios";
import {axiosBaseUrl} from './store/sec';

const baseURL = axiosBaseUrl;

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;