import UserCard from "./UserCard";

const UserList = ({ setPop, users, setTargetUser, onShowModal }) => {
      return (
            <div className="user__grid">
                  {
                        users.map( user => (
                              <UserCard 
                                    setPop = { setPop }
                                    onShowModal = { onShowModal }
                                    setTargetUser = { setTargetUser }
                                    key={ user.id} 
                                    user = { user }
                              />
                        ))
                  }
            </div>
      )
}

export default UserList;