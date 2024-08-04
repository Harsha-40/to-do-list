import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const updateTodo = () => {
    if (input && editIndex !== null) {
      const updatedTodos = todos.map((todo, index) => 
        index === editIndex ? input : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setInput('');
    }
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={editIndex !== null ? updateTodo : addTodo}>
        {editIndex !== null ? 'Update Todo' : 'Add Todo'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
