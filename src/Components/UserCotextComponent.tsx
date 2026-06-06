import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const UserContextComponent = () => {

    const context = useContext(UserContext)

    return(
        <div className="bg-red-300 w-[40%] h-[40%] p-5 text-center mb-3">
            <h3 className="bg-red-800 inline-block p-2">UseContext:</h3>
            <h5>{context?.userInfo?.name}</h5>
            <h5>{context?.userInfo?.family}</h5>
            <h5>{context?.userInfo?.age}</h5>
        </div>
    )
};

export default UserContextComponent;