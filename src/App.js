import './App.css';
import { useState } from 'react'
import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  const [usuarios, setUsuarios] = useState([])

  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    surname: '',
    email: '',
  })

  const submit = (e) =>{
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }

  return (
    <div>
      <div>
        <form onSubmit={submit} >
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
          <Button>Enviar</Button>
        </form>
      </div>
      <div>
        <ul>
          {usuarios.map(x =>
            <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
