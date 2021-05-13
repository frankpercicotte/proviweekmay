import { Checkbox } from "@material-ui/core";
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

  
  const [user,setUser] = useState();  
  const [users, setUsers] = useState([dbUsers])

  useEffect(()=> {
      console.log('users_upgrade',users)
  },[users])

  const createUser = (dataUser) =>{
      
    console.log('createUser_in',dataUser)
      // verificar se ja' existe email
      const checkUser = users.filter(elm => {        
        console.log(elm)
        return dataUser.email === elm.email
      });

      console.log('createUser_filter',checkUser)

      if(!checkUser.length){
        // setUsers(...users, dataUser)        
        return true
      } else {
        return false
      }   
  };

  const loginUser = (dataUser) => {
    // Verifica se email/ password existe
    // user.data = users.find((elm) => {
      // elm.email === dataUser.email && elm.password === dataUser.password
    // });
    
    // user.data && setUser(user.data);
    // obs. caso não exista user continua sem dados.
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