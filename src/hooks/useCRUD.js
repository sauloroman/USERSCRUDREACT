import axios from "axios";
import { useEffect, useState } from "react";


const useCRUD = () => {
      const [users, setUsers] = useState([]);
      const [targetUser, setTargetUser] = useState({});

      const onGetUsers = () => {
            axios.get('http://144.126.218.162:9000/users/')
                  .then( res => setUsers( res.data ) );
      }

      const onNewUser = newUser => {
            axios.post('http://144.126.218.162:9000/users/', newUser )
                  .then( () => onGetUsers() );
      } 

      const onDeleteUser = id => {
            axios.delete(`http://144.126.218.162:9000/users/${id}/`)
                  .then( () => onGetUsers() )
      }

      const onEditUser = (id, user) => {
            axios.put(`http://144.126.218.162:9000/users/${id}/`, user )
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