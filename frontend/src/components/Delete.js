import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Delete = () => {
    axios.defaults.withCredentials = true;

    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const deleteName = (e) => {
        setName(e.target.value)
    }
    const deleteSubject = (e) => {
        setSubject(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        const obj = {
            Name: name,
            Subject: subject
        }
        axios.delete('http://localhost:5000/delete', {data:obj})
            .then(() => toast('Deleted Successfully'))
            .catch((e) => { console.log(e) })
    }
    return (
        <div>
            <Navbar/>
            <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Delete Student Data</h1>

            <form className='createForm addForm'>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" onChange={deleteName} value={name} style={{ width: '400px' }} className="form-control" placeholder="Enter Name " />
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Subject</label>
                    <input type="text" style={{ width: '400px' }} onChange={deleteSubject} value={subject} className="form-control" placeholder="Enter Subject " />
                </div>&nbsp;
                <button type="submit" onClick={submit} className={`btn btn-primary button addButton`}>Submit</button>
            </form>
        </div>
    )
}

export default Delete