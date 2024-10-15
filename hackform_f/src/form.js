import React from 'react'
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      srn: '',
    });
const [responseMessage,setResponseMessage] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target; // Extracting name and value
      setFormData({ ...formData, [name]: value }); // Updating state
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await fetch('http://127.0.0.1:8000/register/', {
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(formData),
        })
        if(response.ok){
          const data = await response.json();
          setResponseMessage('data taken successfully for ' + formData.name);
        } else{
          setResponseMessage('else block error' + response.statusText);
        } }
        catch(error){
          setResponseMessage('catch error ' + error.message);
        }
      }
    return (
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
            <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange} // Assigning handleChange to input's onChange event
        />
    </div>
        <div>
        <label>email:</label>
            <input
          label = 'email id'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>srn:</label>
        <input
        label = 'srn'
         type = "text"
         name = "srn"
         value = {formData.srn}
         onChange = {handleChange}
        />
        </div>

        <div>
          <button type = 'submit'>Submit</button>
          </div>
        {/* Other input fields */}
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    );
  }
export default Form;