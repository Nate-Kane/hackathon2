import { Form } from "semantic-ui-react"
import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const ObjectiveForm = ({addObjective}) => {
  const [bonus, setBonus] = useState(false);
  const [points, setPoints] = useState(0)
  const [name, setName] =useState("")

  const handleSubmit = async () => {
    addObjective({ name: name, points: points, bonus:bonus})

    setBonus(false)
    setPoints(0)
    setName("")
  }

  console.log(bonus)

  return(
    <Form onSubmit = {handleSubmit}>
      <Form.Input
        placeholder = "Enter Objective Here"
        onChange = {(e)=> setName(e.target.value)}
        value = {name}
      />
      <Form.Input
        placeholder = "Points"
        onChange = {(e)=> setPoints(e.target.value)}
        value = {points}
      />
      <Form.Checkbox
      label="Bonus"
      onChange = {()=> setBonus(!bonus)}
      />
      <Form.Button type="submit">+</Form.Button>
    </Form>
  )
}

export default ObjectiveForm