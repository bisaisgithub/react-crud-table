import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import './AddEdit.css';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const {name, email, contact} = initialState;

    const history = useNavigate();

    const addContact = async (data)=>{
        const response = await axios.post("http://localhost:3001/user", data)
        if (response.status === 200) {
            toast.success(response.data);
        }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!name || !email || !contact) {
            toast.error('Empty Field/s')
       
        }else{
            addContact(state);
            history.push('/');
        }
        
    }
    const handleInputChange = (e)=>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }
    return (
        <div style={{marginTop: "100px"}}>
            <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name .." onChange={handleInputChange} value={name} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email .." onChange={handleInputChange} value={email} />
                <label htmlFor="contact">Contact</label>
                <input type="number" id="contact" name="contact" placeholder="Enter Contact .." onChange={handleInputChange} value={contact} />
                <input type="submit" value="Add" onClick={handleSubmit}/>
            </form>            
        </div>
    )
}

export default AddEdit
