import { useState } from "react";

const useModal = () => {
      
      const [modal, setModal] = useState( false );
      const onShowModal = () => setModal( !modal );

      return {
            modal,
            onShowModal
      }
}

export default useModal