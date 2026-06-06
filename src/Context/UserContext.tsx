import { createContext, useState, type ReactNode } from "react";

type UserInfoType = {
    name: string,
    family: string,
    age:number
}

type UserContextType = {
    // userInfo: UserInfoType | undefined
    userInfo: UserInfoType
    // setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>
}

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType )

const UserContextProvider = ({children} : {children : ReactNode}) => {

    // const [userInfo, setUserInfo] = useState<UserInfoType>()
    const [userInfo, setUserInfo] = useState({} as UserInfoType)

    return(
        <UserContext.Provider value={{
            userInfo,
            setUserInfo
        }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider