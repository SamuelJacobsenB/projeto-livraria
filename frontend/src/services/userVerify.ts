import api from "./api";
//------------------------------------------------------
const userVerify = async(token: string) => {
    const res = await api.post('/verify/user', {token: token});
    return res.data;
};
//------------------------------------------------------
export default userVerify;