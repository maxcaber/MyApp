import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { WSAEACCES } from 'constants';

function App() {

  const [customers, setCustomers] = useState([]);
  const [selectedCustId, setSlectedCustId] = useState(-1);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/MyApp/DBGetCustomers');
      setCustomers(res.data);
      
    })();

  }, []);

  const updateCustomer = (e) => {
    const custCopy = { ...customers.find(c => c.id === selectedCustId) };
    custCopy[e.target.name] = e.target.value;
    setCustomers(customers.map(c => c.id === custCopy.id ? custCopy : c));
    axios.post('/api/MyApp/UpdateCustomer',custCopy)

  }

  const addCustomer = async (e) => {
    const newCust = { id:0 , firstName:'',lastName:'' };
    const res = await axios.post('/api/MyApp/AddCustomer',newCust);
    setCustomers([...customers, res.data]);
    setSlectedCustId(res.data.id);
  }

  const selectedCustomer = customers.find(c => c.id === selectedCustId) ;

  return (
    <div className="App">
      <h1>Customers</h1>
      <button onClick={addCustomer}>Add New Customer</button>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => <tr key={c.id} onClick={() => setSlectedCustId(c.id)} >
            <td>{c.id}</td>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
          </tr>)}
        </tbody>
      </table>
      {selectedCustId >= 0 &&
        <div>
          FN: <input name = 'firstName' value={selectedCustomer.firstName} onChange={updateCustomer} />
          LN: <input name = 'lastName' value={selectedCustomer.lastName} onChange={(e) => updateCustomer(e)} />
        </div>
      }
    </div>
  );
}

export default App;
