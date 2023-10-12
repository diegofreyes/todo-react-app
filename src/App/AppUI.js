import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
    
          <TodoCounter />
          <TodoSearch />
          
          <TodoList>
            {loading && <p>Estamos cargando</p>}
            {error && <p>Fuck it, it does not fine</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p> }

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}  
                onDelete={() => deleteTodo(todo.text)}  
              />
            ))}
          </TodoList>

          <CreateTodoButton
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </React.Fragment>
      );
}

export { AppUI };