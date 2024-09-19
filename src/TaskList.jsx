import React from 'react';
import './TaskList.css';
import { AiOutlineFileText, AiFillExclamationCircle } from 'react-icons/ai';

function TaskList({ tasks }) {
  const priorityLabels = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta',
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th className="task-header">
            <AiOutlineFileText className="header-icon" /> Tarefa
          </th>
          <th>
            <AiFillExclamationCircle className="header-icon" /> Prioridade
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td className="task-cell">{task.task}</td>
            <td className="priority-cell">
              <span className={`priority-dot priority-${task.priority}`}></span>
              {priorityLabels[task.priority]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
