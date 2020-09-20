import axios from "axios";
export async function login(loginInfo){
   var resp = await axios.post("/api/user/login",loginInfo);
    return resp.data;
}