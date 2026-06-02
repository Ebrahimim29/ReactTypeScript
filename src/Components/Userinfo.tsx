type UserinfoType = {name:string, family:string, age:number, skills?:("php" | "laravel")[]}

const Userinfo = ( {name,family,age,skills} :UserinfoType) => {

    return(
        <div>
            <h1>{name}</h1>
            <h2>{family}</h2>
            <h3>{age}</h3>
            <h4>{skills}</h4>
        </div>
    )
};

export default Userinfo;