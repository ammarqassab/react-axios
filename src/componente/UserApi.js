import axios from "axios";

export const getuser = () => { 
    const responsee = axios.get('https://jsonplaceholder.typicode.com/users');
    return responsee;
};

export const deleteuser = (id) => { 
    const responsee = axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
    return responsee;
};
