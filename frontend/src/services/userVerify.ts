import api from "./api";
//------------------------------------------------------
const userVerify = async(token: string, router: any) => {
    await api.post('/verify/user', {token: token})
        .then((res)=>{
            if(res.data.error_msg) router.push('/home');
        })
        .catch((err)=>{
            console.log('Erro na função');
        });
};
//------------------------------------------------------
export default userVerify;