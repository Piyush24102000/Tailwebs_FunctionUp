import { React, useState } from 'react'
import './Get.css'
import Navbar from './Navbar'
import axios from 'axios'

const Get = () => {
    axios.defaults.withCredentials = true;

    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const [data, setData] = useState([])

    const filterName = (e) => {
        setName(e.target.value)
    }
    const filterSubject = (e) => {
        setSubject(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        axios.get('http://localhost:5000/viewFilter', { params: { name: name, subject: subject } })
            .then((e) => { setData(e['data']) })
            .catch((e) => { console.log(e) })
    }
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center', marginTop: '0px' }}>Get Students by Name and Subject </h1>
            <form className='createForm addForm'>

                <div className="form-group ">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" onChange={filterName} value={name} style={{ width: '400px' }} className="form-control" placeholder="Enter Name " />
                </div> &nbsp;
                <div className="form-group" style={{ marginTop: '-20px' }}>
                    <label for="exampleInputEmail1">Subject</label>
                    <input type="text" onChange={filterSubject} value={subject} style={{ width: '400px' }} className="form-control" placeholder="Enter Subject " />
                </div>&nbsp;

                <button type="submit" onClick={submit} className={`btn btn-primary button addButton`}>Submit</button>
            </form>

            <div className='wrapper'>
                {
                    data.map((e, index) => (
                        <div key={index} className="card" style={{ width: '15rem' }}>
                            <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name : {e.Name}</h5>
                                <h5 className="card-title">Subject : {e.Subject}</h5>
                                <h5 className="card-title">Marks : {e.Marks}</h5>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>

    )
}

export default Get