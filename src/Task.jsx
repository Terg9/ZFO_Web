import React from "react"; // Импортируем библиотеку React.
// Определяем компонент ToDo, принимающий props: объект todo, функции toggleTask и removeTask.
const ToDo = ({ todo, toggleTask, removeTask }) => {
    return (
        <div key={todo.id + todo.key} className={`item-todo ${todo.complete ? 'completed' : ''}`}>
            <div
                onClick={() => toggleTask(todo.id)}t
                className={todo.complete ? "item-text strike" : "item-tex"}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                x
            </div>
        </div>
    );
};
export default ToDo;
