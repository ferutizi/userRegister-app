import './App.css';
//import { useState } from 'react'
import useFormulario from './hooks/useFormulario';
import Input from './components/Input';

function App() {

  const [formulario, handleChange] = useFormulario({
    name: '',
    surname: '',
    email: '',
  })

  console.log(formulario)
  return (
    <form>
      <Input
      name='name'
      label='Nombre'
      onChange={handleChange}
      value={formulario.name}
      />
      <Input
      name='surname'
      label='Apellido'
      onChange={handleChange}
      value={formulario.surname}
      />
      <Input
      name='email'
      label='Correo'
      onChange={handleChange}
      value={formulario.email}
      />
    </form>
  );
}

export default App;
