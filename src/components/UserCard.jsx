const UserCard = ({
      setPop,
      onShowModal,
      setTargetUser, 
      user }) => {

      const onEditUserItem = () => {
            onShowModal();
            setTargetUser( user );
      }

      const onDeleteUserItem = () => {
            setPop( true );
            setTargetUser( user );
      }

      return (
            <div className="user__card flex flex-col animate__animated animate__zoomIn">
                  <h3> { `${ user.first_name } ${user.last_name}` }</h3>

                  <div className="user__field">
                        <h4>Correo</h4>
                        <p>{ user.email }</p>
                  </div>

                  <div className="user__field">
                        <h4>Cumpleaños</h4>
                        <div className="flex">
                              <i className='bx bx-gift user__icon-birth'></i>
                              <p>{ user.birthday }</p>
                        </div>
                  </div>
                  
                  <div className="user__buttons flex justify-end">
                        <button 
                              onClick={ onDeleteUserItem }
                              className="animation-general">
                              <i className='bx bx-trash' ></i>
                        </button>
                        <button 
                              onClick={ onEditUserItem }
                              className="animation-general">
                              <i className='bx bx-edit-alt' ></i>
                        </button>   
                  </div>

            </div>
      )
}

export default UserCard