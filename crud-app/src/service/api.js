import axios from 'axios';


//this is a post API

const API_URL ='http://127.0.0.1:3002/users';
//await is used in async function 
export const addUser = async(data) => {
    try{
        return await axios.post(API_URL, data);
    }catch(error){
        console.log('Error while calling addUSer api ', error.message);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log('Error while calling getUsers api ', error.message);
    }
}

export const getUser = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log('Error while calling getUser api ', error.message);
    }
}
// 'put' is used for editing data
export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
        console.log('Error while calling editUser api ', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser api ', error.message);
    }
}