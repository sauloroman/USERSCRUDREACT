const UserAdd = ({ onShowModal, setTargetUser }) => {

      const onClickModal = () => {
            onShowModal();
            setTargetUser({})
      }

      return (
            <header className="flex flex-col justify-between header">
                  <h1>Usuarios</h1>
                  <button 
                        onClick={ onClickModal }
                        className="btn animation-general flex">
                        <i className='bx bx-add-to-queue btn__icon'></i>
                        <span>Crear nuevo usuario</span>
                  </button>
            </header>
      )
}

export default UserAdd;