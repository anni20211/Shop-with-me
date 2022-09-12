import axios from "axios";

const instance= axios.create({
   baseUrl:"http://localhost:5001/clone-e51c6/us-central1/api",   //local api endpoint
})
export default instance;