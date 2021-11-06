import './App.scss';
import React from 'react';
import Todo from './Components/Todo/Todo';

function App() {
	const [todos, setTodos] = React.useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);

	const handelDelete = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;
		const filteredTodo = todos.filter((row) => row.id !== todoId);
		setTodos([...filteredTodo]);

		window.localStorage.setItem('todos', JSON.stringify([...filteredTodo]));
	};

	const handelCoplite = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;
		const foundTodo = todos.find((row) => row.id === todoId);
		foundTodo.isComplet = !foundTodo.isComplet;
		setTodos([...todos]);

		window.localStorage.setItem('todos', JSON.stringify([...todos]));
	};

	return (
		<>
			<div className='container'>
				<h1 className='headding'>My First Todo React App </h1>
				<input
					className='todo-input'
					onKeyUp={(evt) => {
						if (evt.code === 'Enter') {
							const newTodo = {
								id: todos[todos.length - 1]?.id + 1 || 0,
								title: evt.target.value,
								isComplet: false,
							};
							setTodos([...todos, newTodo]);

							window.localStorage.setItem(
								'todos',
								JSON.stringify([...todos, newTodo]),
							);

							evt.target.value = null;
						}
					}}
					type='text'
					placeholder='todos..'
				/>
				<ul className='todo__list'>
					{todos.map((row) => (
						<Todo
							isComplet={row.isComplet}
							key={row.id}
							id={row.id}
							handelDelete={handelDelete}
							handelCoplite={handelCoplite}>
							{row.title}
						</Todo>
					))}
				</ul>

				<button>All</button>
				<button>Completed</button>
				<button>Uncompleted</button>
			</div>
		</>
	);
}

export default App;
