import { Header } from "semantic-ui-react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ObjectiveForm from "./ObjectiveForm"
import Objective from "./Objective"

const Objectives = () => {

  const { hackathon_id } = useParams()

  const [objectives, setObjectives] = useState([])

  useEffect(()=> {
    getObjectives()
  },[])

  const getObjectives = async () => {
    try {
      let res = await axios.get(`/api/hackathons/${hackathon_id}/objectives`)
      console.log(res.data)
      setObjectives(res.data)

    } catch (err) {
      // debugger
      console.log(err)

    } 
  }

  const addObjective = async (objective) => {
    try {
      let res = await axios.post(`/api/hackathons/${hackathon_id}/objectives`,objective)
      console.log(res.data)
      setObjectives([...objectives,res.data])
      

    } catch (err) {
      // debugger
      console.log(err)

    } finally {
      
    }
  }

  const editObjective = async (id,objective) => {
    try {
      let res = await axios.put(`/api/hackathons/${hackathon_id}/objectives/${id}`,objective)
      console.log(res.data)
      let newObjectives = objectives.map((o)=> o.id !== id ? o : res.data )
      setObjectives(newObjectives)
      

    } catch (err) {
      // debugger
      console.log(err)

    } finally {
      
    }
  }

  const removeObjective = async (id) => {
    try {
      let res = await axios.delete(`/api/hackathons/${hackathon_id}/objectives/${id}`)
      console.log(res.data)
      let newObjectives = objectives.filter((o)=> o.id !== id )
      setObjectives(newObjectives)
      

    } catch (err) {
      // debugger
      console.log(err)

    } finally {
      
    }
  }

  const renderObjectives = () => {
    return objectives.map(o => {
      return (
      <Objective key = {o.id} {...o} removeObjective={removeObjective} editObjective={editObjective}/>
      )
    })

  }

  return (
    <>
      <Header>Objectives</Header> 
      <ObjectiveForm addObjective={addObjective}/>
      {renderObjectives()}
    </>

  )

}

export default Objectives