import type {  JSX, ReactNode } from "react";

type UserinfoType = {name:string, family:string, age:number, skills?:("php" | "laravel")[], 
    // children: ReactNode,
    children: JSX.Element
}

const Userinfo = ( {name,family,age,skills,children} :UserinfoType) => {

    return(
        <div>
            <h1>{name}</h1>
            <h2>{family}</h2>
            <h3>{age}</h3>
            <h4>{skills}</h4>
            <h5>{children}</h5>
        </div>
    )
};

export default Userinfo;