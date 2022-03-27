import { useState } from "react"

const useFormulario = (inicial) => {
    const [formulario, setFormulario] = useState(inicial)
        const handleChange = (e) => {
            setFormulario({
                ...formulario,
                [e.target.name]: e.target.value,
            })
        }
    return[formulario, handleChange]
}

export default useFormulario