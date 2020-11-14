import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';

export default function App() {
  const [formOpen,setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen = {setFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen = {formOpen} setFormOpen = {setFormOpen}/>
      </Container>
      
   </>
  );
}

