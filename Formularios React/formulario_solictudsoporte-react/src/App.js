import React, { useState } from 'react';
import './App.css';



function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    tipoSoporte: 'fisico',
    descripcionProblema: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  }

  return (
    <div className="App">
      <h1>Solicitud de Soporte</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input 
            type="tel" 
            name="telefono" 
            value={formData.telefono} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Tipo de Soporte:
          <select 
            name="tipoSoporte" 
            value={formData.tipoSoporte} 
            onChange={handleChange} 
            required
          >
            <option value="fisico">Físico</option>
            <option value="presencial">Presencial</option>
          </select>
        </label>
        <br />
        <label>
          Descripción del Problema:
          <textarea 
            name="descripcionProblema" 
            value={formData.descripcionProblema} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
}

export default App;
