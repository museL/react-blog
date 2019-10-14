import axios from 'axios';
export default {
    async login(use){
        console.log(use)
       return await axios.get("/wxapi/home_api/WechatApp");
    }
}