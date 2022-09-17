import { useModal } from "../hooks"
import {UserForm} from "./"

const UserModal = ({ targetUser, setTargetUser, onShowModal, onEditUser, onNewUser }) => {

      const { pop } = useModal;

      return (
            <div className={`modal animate__animated animate__bounceIn`}>
                  <UserForm 
                        targetUser = { targetUser }
                        setTargetUser = { setTargetUser }
                        onNewUser = { onNewUser }
                        onShowModal = { onShowModal }
                        onEditUser = { onEditUser }
                  />
            </div>
      )
}

export default UserModal