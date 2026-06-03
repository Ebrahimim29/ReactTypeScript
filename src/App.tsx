import Userinfo from "./Components/Userinfo";

const App = () => {
  return (
    <div>
      <Userinfo name="mohammad" family="ebrahimi" age={30} skills={["laravel"]}>
        <div>
          My Name is Mohammad
          <p>I love Programming</p>
        </div>
      </Userinfo>
    </div>
  )
};

export default App;