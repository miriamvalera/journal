import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-61497-default-rtdb.firebaseio.com'
})

export default journalApi