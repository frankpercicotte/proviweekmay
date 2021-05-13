import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  
  const[isNewUser, setIsNewUser] = useState(false)  
  const [user,setUser] = useState();  
  const [users, setUsers] = useState([{   
    name:"", 
    email:"",
    password:"",
    email_other:""
  }])

  const createUser = (dataUser) =>{
      // verificar se ja' existe email
      const checkUser = users.filter((elm) => dataUser.email === user.email)
      console.log('Provider_createUser',checkUser)
      
      if(checkUser){
        // novo user
        setIsNewUser(true)
        setUsers({...users}, [dataUser])  
        return true
      } else {
        // já existente
        setIsNewUser(false)
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
      value={{user, loginUser, createUser, updateUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);