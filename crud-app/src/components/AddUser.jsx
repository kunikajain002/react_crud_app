import { useState } from 'react';//by which we can use the API for storing DATA.


import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import { addUser } from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
    
`
// & is the css from which we can go in the child component with the parent component and div is a by-default name of FormControl.

const initialValues ={
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser = () =>{

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/');
    }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Add user</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;