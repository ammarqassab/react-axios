import axios from "axios";

export const getuser = () => { 
    const responsee = axios.get('https://jsonplaceholder.typicode.com/users');
    return responsee;
};

export const deleteuser = (id) => { 
    const responsee = axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
    return responsee;
};

export const updateuser = (id, values) => { 
    const responsee = axios.put('https://jsonplaceholder.typicode.com/users/'+id, values);
    return responsee;
};

export const adduser = (values) => { 
    const responsee = axios.post('https://jsonplaceholder.typicode.com/users/',values);
    return responsee;
};