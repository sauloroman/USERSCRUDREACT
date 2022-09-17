import axios from "axios";
import { useEffect, useState } from "react";


const useCRUD = () => {
      const [users, setUsers] = useState([]);
      const [targetUser, setTargetUser] = useState({});

      const onGetUsers = () => {
            axios.get('https://users-crud1.herokuapp.com/users/')
                  .then( res => setUsers( res.data ) );
      }

      const onNewUser = newUser => {
            axios.post('https://users-crud1.herokuapp.com/users/', newUser )
                  .then( () => onGetUsers() );
      } 

      const onDeleteUser = id => {
            axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
                  .then( () => onGetUsers() )
      }

      const onEditUser = (id, user) => {
            axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, user )
                  .then( () => onGetUsers() )
      }

      useEffect( () => {
            onGetUsers();
      }, [] );

      return {
            users,
            targetUser,
            setTargetUser,
            onNewUser,
            onDeleteUser,
            onEditUser
      }

}

export default useCRUD