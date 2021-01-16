import React, {useState} from 'react';
import HackathonForm from './HackathonForm';
import { Button } from 'semantic-ui-react';

const Hackathon = ({ hackathonProp, deleteHackathon, hackathonId}) => {
  const [ showEditForm, setShowEditForm ] = useState(false);

  const showEditFormToggle = () => {
    setShowEditForm(!showEditForm)
  }


  return (
    <>
    <div link_to='showHackathon'>
      {/*  or this needs to be a link to the /api/teams page, where it'll, by default, show the hackthon info */}
      <h3>{hackathonProp.name}</h3>
      <p>
        {hackathonProp.active ? "True" : "False"}
      </p>
      <p>
      {hackathonProp.date}
      </p>
      <p>
        {hackathonProp.judges}
      </p>
      <Button color='red' size='small' onClick={() => deleteHackathon(hackathonProp.id)}>delete</Button>
      { showEditForm && <HackathonForm hackathonId={hackathonId} hackathonProp={hackathonProp}/> }
      <Button onClick={showEditFormToggle}>{showEditForm ? "close form" : "show form" }</Button>
    </div>
      
    </>
  )
}

export default Hackathon;