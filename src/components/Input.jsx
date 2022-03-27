const Input = ({label, ...rest}) =>{
    return(
        <div>
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}

export default Input