import api from "./api";
//------------------------------------------------------
const getBooks = async() => {
    try {
        const res = await api.get('/get/books');
        
        if(res.data.books){
            return res.data.books;
        } else {
            console.log(res.data.error_msg);
        };
    } catch(err){
        console.log('Erro ao buscar livros');
    };
};
//------------------------------------------------------
export default getBooks;