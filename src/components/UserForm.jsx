import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks"

const UserForm = ({ targetUser, setTargetUser, onEditUser, onShowModal, onNewUser }) => {

      const [error, setError] = useState(false);

      const { first_name, last_name, email, password, birthday, onInputChange, onResetForm, formState, onSetForm } = useForm( 
            {
                  first_name: '',
                  last_name: '',
                  email: '',
                  password: '',
                  birthday: '' 
            }
      )     

      useEffect( () => {
            if ( Object.keys( targetUser ).length ) {
                  onSetForm(
                        {
                              first_name: targetUser.first_name,
                              last_name: targetUser.last_name,
                              email: targetUser.email,
                              password: targetUser.password,
                              birthday: targetUser.birthday
                        }
                  )
            }
      }, [ targetUser ] )


      const onSubmitUser = e => {

            e.preventDefault();

            if ( [ first_name.trim(), last_name.trim(), email, password.trim(), birthday.trim() ].includes('') ) {
                  setError( true );

                  setTimeout( () => {
                        setError( false );
                  }, 3000 )

                  return;
            }


            if ( targetUser.id ) {
                  // Editing user 
                  onEditUser( targetUser.id, formState );
            } else {
                  // New User
                  onNewUser( formState );
            }

            setTargetUser({});
            setError( false );
            onResetForm();
            onShowModal();
      }

      const onCloseForm = () => {
            onShowModal();
            setTargetUser({});
      }

      return (
            <form 
                  onSubmit = { onSubmitUser }
                  className="form flex-col">

                  <header className="form__header flex justify-between">
                        <h2>{ targetUser.id ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
                        <i 
                              onClick = { onCloseForm }
                              className='bx bx-x form__icon animation-general'></i>
                  </header>

                  { error && <p className="error">Todos los campos son obligatorios</p>}

                  <div className="form__field flex">
                        <label htmlFor="">Nombre</label>
                        <input
                              value={ first_name }
                              onChange={ onInputChange }
                              placeholder="Saulo Román"
                              name="first_name" 
                              type="text" 
                        />
                  </div>

                  <div className="form__field flex">
                        <label htmlFor="">Apellido</label>
                        <input
                              value={ last_name }
                              onChange={ onInputChange }
                              placeholder="Santillán Nava"
                              name="last_name" 
                              type="text" 
                        />
                  </div>

                  <div className="form__field flex">
                        <label htmlFor="">Correo</label>
                        <input
                              value={ email }
                              onChange={ onInputChange }
                              placeholder="correo@correo.com"
                              name="email" 
                              type="email" 
                        />
                  </div>

                  <div className="form__field flex">
                        <label htmlFor="">Contraseña</label>
                        <input
                              value={ password }
                              onChange={ onInputChange }
                              name="password" 
                              type="password" 
                        />
                  </div>

                  <div className="form__field flex">
                        <label htmlFor="">Cumpleaños</label>
                        <input
                              value={ birthday }
                              onChange={ onInputChange }
                              placeholder="correo@correo.com"
                              name="birthday" 
                              type="date" 
                        />
                  </div>

                  <button className="btn btn--full animation-general">
                        { targetUser.id ? 'Guardar cambios' : 'Agregar nuevo usuario'}
                  </button>

            </form>
      )
}

export default UserForm