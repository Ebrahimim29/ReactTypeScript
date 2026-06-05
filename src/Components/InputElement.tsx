const InputElement = ({handleChange} : {handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>string}) => {
// const InputElement = ({handleChange} : {handleChange:()=>void}) => {

    return(
        <input className="bg-red-300" type="text" onChange={handleChange} />
    )
};

export default InputElement;