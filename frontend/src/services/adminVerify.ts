import api from "./api";
//------------------------------------------------------
const adminVerify = async(token: string, router: any) => {
    await api.post('/verify/admin', {token: token})
        .then((res)=>{
            if(res.data.error_msg) router.push('/home');
        })
        .catch((err)=>{
            console.log('Erro na função');
        });
};
//------------------------------------------------------
export default adminVerify;