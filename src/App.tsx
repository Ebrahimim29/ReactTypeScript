import Userinfo from "./Components/Userinfo";

const App = () => {
  return(
    <div>
      <Userinfo name="mohammad" family="ebrahimi" age={30} skills={["laravel"]}/>
    </div>
  )
};

export default App;