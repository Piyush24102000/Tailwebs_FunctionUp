import {React,useEffect,useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
  axios.defaults.withCredentials = true;
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/view')
    .then((e)=>{
      setData(e['data'])
    })
    .catch((e)=>{
      console.log(e) 
    })
  },[])

  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:'center',marginTop:'10px'}}>View Students Data</h1>
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

export default View