import { React, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Add = () => {
    axios.defaults.withCredentials = true;

    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const [marks, setMarks] = useState()

    const addName = (e) => {
        setName(e.target.value)
    }
    const addSubject = (e) => {
        setSubject(e.target.value)
    }
    const addMarks = (e) => {
        setMarks(e.target.value)
    }

    const addButton = (e) => {
        e.preventDefault()
        const obj = {
            Name: name,
            Subject: subject,
            Marks: marks
        }
        axios.post('http://localhost:5000/add', obj)
            .then(() => { toast('Student Added Successfully') })
            .catch((e) => { console.log(e) })
    }
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Add Students</h1>
            <form className='createForm addForm'>

                <div className="form-group ">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" onChange={addName} value={name} style={{ width: '400px' }} className="form-control" placeholder="Enter Name " />
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Subject</label>
                    <input type="text" onChange={addSubject} value={subject} style={{ width: '400px' }} className="form-control" placeholder="Enter Subject " />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Marks</label>
                    <input type="number" onChange={addMarks} value={marks} style={{ width: '400px' }} className="form-control" placeholder="Enter Marks" />
                </div>
                <button type="submit" onClick={addButton} className={`btn btn-primary button addButton`}>Submit</button>
            </form>
        </div>
    )
}

export default Add