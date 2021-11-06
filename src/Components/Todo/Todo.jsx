import './Todo.scss';

function Todo({ children, id, handelDelete, handelCoplite, isComplet }) {
	return (
		<>
				<li className='todo__item'>
					<input
						className='todo__input'
						checked={isComplet}
						type='checkbox'
						onChange={handelCoplite}
						data-todo-id={id}
					/>

					<span
						style={{ textDecoration: isComplet && 'line-through' }}>
						{children}
					</span>
					<button className='todo__delet' data-todo-id={id} onClick={handelDelete}>
						Delete
					</button>
				</li>
		</>
	);
}

export default Todo;
