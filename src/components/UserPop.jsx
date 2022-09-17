const UserPop = ({ setPop, setTargetUser, targetUser, onDeleteUser }) => {

      const onDelete = () => {
            onDeleteUser( targetUser.id )
            setPop( false );
      }

      const onClosePop = () => {
            setPop( false );
            setTargetUser({});
      }

      return (
            <div className="modal">
                  <form className="form">
                        <header className="form__header flex justify-between">
                              <h2>Eliminar usuario</h2>
                              <i 
                                    onClick = { onClosePop }
                                    className='bx bx-x form__icon animation-general'></i>
                        </header>

                        <div>
                              <p className="pop_question">¿Desea eliminar al usuario <strong>{ `${targetUser.first_name} ${ targetUser.last_name }`}?</strong></p>

                              <div className="pop__buttons">
                                          
                                    <button 
                                          className="btn animation-general"
                                          onClick={ onDelete }>Aceptar</button>

                                    <button 
                                          onClick = { onClosePop }
                                          className="btn animation-general btn--outline">
                                          Cancelar
                                    </button>
                              </div>

                        </div>
                  </form>
            </div>
      )
}

export default UserPop