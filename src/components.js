import React from 'react';

export function Todo(props) {
  const { todo } = props;

  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, deleteTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);
  const deleteClick = id => event => deleteTodo(id);

  return (
    <div className='todo'>
      <input type='text'
             className='todo__entry'
             tabIndex='1'
             placeholder='Add to-do'
             onKeyDown={onSubmit} />
      <ul className='todo__list'>
        {todos.map((t, i) => (
          <li key={t.get('id')}
              className='todo__item'
              tabIndex={i+2}
              onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
            <button
              className="todo__item__button"
              onClick={deleteClick(t.get('id'))}>
            </button>
            <button
              className="todo__item__button todo__item__button--edit"
              onClick={deleteClick(t.get('id'))}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
