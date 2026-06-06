import { createContext, useState, type ReactNode } from "react";

type UserInfoType = {
    name: string,
    family: string,
    age:number
}

type UserContextType = {
    userInfo: UserInfoType | undefined
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>
}

export const UserContext = createContext<UserContextType | null>(null)

const UserContextProvider = ({children} : {children : ReactNode}) => {

    const [userInfo, setUserInfo] = useState<UserInfoType>()

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