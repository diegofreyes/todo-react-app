import './CreateTodoButton.css';
import { FaPlus } from "react-icons/fa6";
function CreateTodoButton({setOpenModal}) {
    return (
      <button 
        className='CreateTodoButton'
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
        >
          <FaPlus/>
        </button>
    );
}

export { CreateTodoButton };