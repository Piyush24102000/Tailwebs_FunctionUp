import { React, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Update = () => {
    axios.defaults.withCredentials = true;

    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const [marks, setMarks] = useState()

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateSubject = (e) => {
        setSubject(e.target.value)
    }
    const updateMarks = (e) => {
        setMarks(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        const obj = {
            Name: name,
            Subject: subject,
            Marks: marks
        }
        axios.put('http://localhost:5000/update', obj)
        .then(() =>{toast('Marks Updated Succesfully')} )
        .catch((e)=>{console.log(e)})
    }

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Update Students Marks</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ marginLeft: '45vw' }}>
                Update Here
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Student Marks Update</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='createForm '>
                                <div className="form-group" style={{ marginTop: '5px' }}>
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" onChange={updateName} value = {name} style={{ width: '300px' }} className="form-control" placeholder="Enter Name " />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Subject</label>
                                    <input type="text" onChange={updateSubject} value = {subject} style={{ width: '300px' }} className="form-control" placeholder="Enter Subject " />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Marks</label>
                                    <input type="number" onChange={updateMarks} value = {marks} style={{ width: '300px' }} className="form-control" placeholder="Enter Marks" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={submit} class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        /* <form className='createForm addForm'>

            <div className="form-group ">
                <label for="exampleInputEmail1">Name</label>
                <input type="text"  style={{ width: '400px' }} className="form-control" placeholder="Enter Name " />
            </div> &nbsp;
            <div className="form-group">
                <label for="exampleInputEmail1">Subject</label>
                <input type="text"  style={{ width: '400px' }} className="form-control" placeholder="Enter Subject " />
            </div>&nbsp;
            <div className="form-group">
                <label for="exampleInputPassword1">Marks</label>
                <input type="number" style={{ width: '400px' }} className="form-control" placeholder="Enter Marks" />
            </div>
            <button type="submit"  className={`btn btn-primary button addButton`}>Submit</button>
        </form> */
    )
}

export default Update