interface ConfirmButtonPropsType {
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, params: string[]) => void,
    style: React.CSSProperties
}

const ConfirmButton = ({ handleClick, style }: ConfirmButtonPropsType) => {

    return (
        <button className="bg-amber-600 text-sky-400 cursor-pointer m-2" style={style}
            onClick={(event) => handleClick(event, ["typeScript", "react"])}>
            clickMe
        </button>
    )
};

export default ConfirmButton;