import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const dbUsers = [
    {
      name:"Franklin", 
      email:"frank@email.com",
      password:"123456",
      email_other:""
    }  
  ];

  
  const [user,setUser] = useState('');  
  const [users, setUsers] = useState([dbUsers])

  useEffect(()=> {
      console.log('user',user)
  },[users])

  const createUser = (dataUser) =>{
      // verificar se ja' existe email
      const checkUser = dbUsers.filter(elm =>                 
        dataUser.email === elm.email
      );      

      if(!checkUser.length){        
        dbUsers.push(dataUser)
        return true
      } else {
        return false
      }   
  };

  const loginUser = (dataUser) => {
    // Verifica se email/ password existe
    const check = dbUsers.find((elm) => 
       elm.email === dataUser.email 
       && elm.password === dataUser.password
    );
    console.log(check)
    if(check){
      setUser(check);
      return true;
    }    
    return false;
  };

  const updateUser = (dataUser) => {
    // let listUser = []
    // pelo id pega a posição do user e atualiza no setUser
    // usando foreach()
    // SetUsers(users, listUser)
  };

  return(
    <UserContext.Provider
      value={{user, users, loginUser, createUser, updateUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);