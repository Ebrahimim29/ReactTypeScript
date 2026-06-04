import ConfirmButton from "./Components/ConfirmButton";
import Counter from "./Components/Hooks/Counter";
import InputElement from "./Components/InputElement";
import Userinfo from "./Components/Userinfo";

const App = () => {
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

      <Counter/>
      
    </div>
  )
};

export default App;