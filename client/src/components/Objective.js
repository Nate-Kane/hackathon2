import { Header, Card, Button, Form } from "semantic-ui-react"
import { useState } from "react";

const Objective = ({name, points, bonus,id, removeObjective, editObjective}) => {

  const [bonusNew, setBonusNew] = useState(bonus);
  const [pointsNew, setPointsNew] = useState(points)
  const [nameNew, setNameNew] =useState(name)
  const [editing, setEditing] =useState(false)

  const handleSubmit = () => {
    editObjective(id, {name:nameNew, points:pointsNew, bonusNew})

    setEditing(false)

  }

  const editForm = () => {

    return(
        <Form onSubmit = {handleSubmit}>
        <Form.Input
          value = {nameNew}
          onChange = {(e)=> setNameNew(e.target.value)}
        />
        <Form.Input
          value = {pointsNew}
          onChange = {(e)=> setPointsNew(e.target.value)}
        />
        <Form.Checkbox
        onChange = {()=> setBonusNew(!bonusNew)}
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    )
  }

  if (editing) {
    return editForm()
  }
  return (
    <>
      <Card onClick={()=>setEditing(true)}>
        <Card.Header >
        Name: {name}
        </Card.Header>
        <Card.Description>
        Points: {points}
        </Card.Description>
        <Card.Description>
        {bonus ? "Bonus Objective" : "Standard Objective"}
        </Card.Description>
        <Button onClick={()=>removeObjective(id)}>Delete</Button>
      </Card>
    </>
  )

}

export default Objective