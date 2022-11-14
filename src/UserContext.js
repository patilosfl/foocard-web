import React, {useState} from 'react';

export const UserContext = React.createContext();

 const UserProvider = (props) => {
  const [userDetails, setUserDetails] = useState("");
  return (
    <UserContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;