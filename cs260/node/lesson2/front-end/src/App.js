import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");

  const fetchTickets = async() => {
    try {      
      const response = await axios.get("/api/tickets");
      setTickets(response.data);
    } catch(error) {
      setError("error retrieving tickets: " + error);
    }
  }
  const createTicket = async() => {
    try {
      await axios.post("/api/tickets", {name: name, problem: problem});
    } catch(error) {
      setError("error adding a ticket: " + error);
    }
  }
  const deleteOneTicket = async(ticket) => {
    try {
      await axios.delete("/api/tickets/" + ticket.id);
    } catch(error) {
      setError("error deleting a ticket" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchTickets();
  },[]);

  const addTicket = async(e) => {
    e.preventDefault();
    await createTicket();
    fetchTickets();
    setName("");
    setProblem("");
  }

  const deleteTicket = async(ticket) => {
    await deleteOneTicket(ticket);
    fetchTickets();
  }

  // render results
  return (
    <div className="App">
      {error}
      <h1>Create a Ticket</h1>
      <form onSubmit={addTicket}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Problem:
            <textarea value={problem} onChange={e=>setProblem(e.target.value)}></textarea>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h1>Tickets</h1>
      {tickets.map( ticket => (
        <div key={ticket.id} className="ticket">
          <div className="problem">
            <p>{ticket.problem}</p>
            <p><i>-- {ticket.name}</i></p>
          </div>
          <button onClick={e => deleteTicket(ticket)}>Delete</button>
        </div>
      ))}     
    </div>
  );
}

export default App;
