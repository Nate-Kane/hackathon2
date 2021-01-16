import { useState, useEffect } from 'react';
import axios from 'axios';
import Hackathon from './Hackathon';
import HackathonForm from './HackathonForm';

const Hackathons = () => {
  const [hackathons, setHackathons] = useState([])


  const getHackathons = () => {
    axios
      .get('api/hackathons')
      .then((response) => {
        console.log(response.data);
        setHackathons(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

   useEffect (() => {
      getHackathons();
    }, []);

  const addHackathon = (hackathon) => {
    axios.post('api/hackathons/', hackathon)
    .then((response) => {
      console.log(response.data)
      setHackathons([hackathon, ...hackathons])
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const deleteHackathon = (id) => {
    axios.delete(`/api/hackathons/${id}`)
    .then((res)=>{
      setHackathons(hackathons.filter((hackathon)=> hackathon.id !== id))
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
   

    const renderHackathons = () => {
      // debugger
      return hackathons.map((hackathon) => {
        return <Hackathon key={hackathon.id} hackathonId={hackathon.id} hackathonProp={hackathon} deleteHackathon={deleteHackathon}/>
      })
    }

  return (
    <>
      <h1>Hackathons</h1>
       {renderHackathons()}
      <HackathonForm addHackathon={addHackathon} /> {/* eventually pass this through hackathon.js */}
    </>
  )
}

export default Hackathons;