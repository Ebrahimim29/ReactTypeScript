import { useContext, useEffect } from "react";
import ConfirmButton from "./Components/ConfirmButton";
import HookReducer from "./Components/Hooks/HookReducer";
import HookState from "./Components/Hooks/HookState";
// import InputElement from "./Components/InputElement";
import Userinfo from "./Components/Userinfo";
import { UserContext } from "./Context/UserContext";
import UserContextComponent from "./Components/UserCotextComponent";

const App = () => {

  // const context = useContext(UserContext)
  const {setUserInfo} = useContext(UserContext)

  useEffect(()=>{
    // context?.setUserInfo({
    setUserInfo({
      name:"Mohammad Mehdi",
      family:"Ebrahimi",
      age: 42
    })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <Userinfo name="mohammad" family="ebrahimi" age={30} skills={["laravel"]}>
        <div>
          My Name is Mohammad
          <p>I love Programming</p>
        </div>
      </Userinfo>
      <ConfirmButton style={{background:"magenta", fontSize:"1rem", borderRadius:"5px"}} handleClick={(event) => {
        event.stopPropagation()
        event.preventDefault()
        console.log(event);
      }} />
      {/* <InputElement handleChange={(event) => {
        console.log("input value:", event.target.value);
      }
      } /> */}

      <HookState/>
      <HookReducer/>
      <UserContextComponent/>
      
    </div>
  )
};

export default App;