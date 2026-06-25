import React, { useState } from "react";


const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    // Обработчик поля ввода
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    // Обработчик отправки формы.
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    // Обработчик нажатия клавиш. Позволяет отправлять форму при нажатии Enter.
    const handleKeyPress = (e) => {
        if (e.key === "Enter") { // Проверяем, нажата ли клавиша Enter.
            handleSubmit(e); // Отправляем форму, аналогично submit-у.
        }
    };
    // Возвращаемый JSX-код: форма с полем ввода и кнопкой.
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput} // Текущее значение поля ввода берется из state.
                type="text"
                onChange={handleChange} // Обработчик изменения содержимого ввода.
                onKeyDown={handleKeyPress} // Обработчик нажатия клавиши Enter.
                placeholder="Введите значение..." // Подсказка в поле.
            />
            {/* Кнопка для отправки формы. */}
            <button>Сохранить</button> 
        </form>
    );
};
export default ToDoForm; // Экспорт компонента для дальнейшего использования.