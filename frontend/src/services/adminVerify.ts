import api from "./api";
//------------------------------------------------------
const adminVerify = async(token: string) => {
    const res = await api.post('/verify/admin', {token: token});
    return res.data;
};
//------------------------------------------------------
export default adminVerify;