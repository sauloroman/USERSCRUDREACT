import { UserAdd, UserList, UserModal, UserPop } from "./components"
import Footer from "./ui/components/Footer";
import { useCRUD, useModal } from './hooks'
import { useState } from "react";

const UsersApp = () => {

      const [pop, setPop] = useState(false);
      const { modal, onShowModal } = useModal();
      const { users, onNewUser, onEditUser, onDeleteUser, targetUser, setTargetUser } = useCRUD();

      return (
            <div className="container">

                  <UserAdd 
                        setTargetUser = { setTargetUser }
                        onShowModal = { onShowModal }/>
                  
                  {
                        modal && 
                        <UserModal 
                              targetUser = {targetUser}
                              setTargetUser = { setTargetUser }
                              onNewUser = { onNewUser }
                              onEditUser = { onEditUser }
                              onShowModal = { onShowModal } />
                  }

                  {
                        pop && 
                        <UserPop 
                              setPop = { setPop }
                              targetUser = { targetUser }
                              setTargetUser = { setTargetUser }
                              onDeleteUser = { onDeleteUser }      
                        />
                  }

                  {
                        users.length 
                        ? (
                              <UserList 
                                    setPop = { setPop }
                                    onShowModal = { onShowModal }
                                    setTargetUser = { setTargetUser }
                                    users = { users }
                              />
                        ) : 
                        (
                              <h2 className="users__alert">Comienza Agregando Usuarios</h2>
                        )
                  }

                  
                  <Footer />

            </div>
      )
}

export default UsersApp