import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import IconNotes from "./icons/IconNotes";
import IconPlus from "./icons/IconPlus";
import IconCheck from "./icons/IconCheck";
import IconTrash2 from "./icons/IconTrash2";

export default function TodoList() {
  const { todayTodos } = useContext(TodosContext);
  return (
    <div>
      {todayTodos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

function Todo({ todo }) {
  const { dispatch } = useContext(TodosContext);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded)
    return (
      <div
        key={todo.id}
        onDoubleClick={() => {
          setIsExpanded(true);
        }}
      >
        <input className="scale-125" type="checkbox" name="name" id="id" />
        {todo.title.length === 0 ? (
          <span className="ml-3 text-gray-400">New To-Do</span>
        ) : (
          <span className="ml-3 text-gray-600">{todo.title}</span>
        )}
      </div>
    );

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-2">
      <div className="flex items-center py-2 border-b">
        <input className="scale-125" type="checkbox" name="name" id="id" />
        <input
          className="border-none focus:outline-none ml-2"
          placeholder="New To-Do"
          type="text"
          defaultValue={todo.title}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TODO",
              id: todo.id,
              title: e.target.value,
            });
          }}
          aria-autocomplete="list"
        />
        <button onClick={() => setIsExpanded(false)}>Collapse</button>
      </div>

      {/* notes */}
      <div className="flex items-center py-2 border-b">
        <IconNotes width={16} height={16} />
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="Notes"
          type="text"
          defaultValue={todo.notes}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TODO",
              id: todo.id,
              notes: e.target.value,
            });
          }}
        />
      </div>

      {/* subtasks */}
      <div className="py-2 border-b">
        <ul className="mb-4">
          {todo.subTasks.map((subTask) => {
            const toggle = () => {
              dispatch({
                type: "UPDATE_SUBTASK",
                id: todo.id,
                subTaskId: subTask.id,
                isCompleted: !subTask.isCompleted,
              });
            };
            return (
              <li
                className="text-sm text-gray-700 flex items-center justify-between space-x-2"
                key={subTask.id}
              >
                <div>
                  {!subTask.isCompleted ? (
                    <button
                      className="w-3 h-3 border border-gray-500 rounded-full"
                      onClick={toggle}
                    ></button>
                  ) : (
                    <button onClick={toggle}>
                      <IconCheck />
                    </button>
                  )}
                  <input
                    defaultValue={subTask.value}
                    onChange={(e) => {
                      dispatch({
                        type: "UPDATE_SUBTASK",
                        id: todo.id,
                        subTaskId: subTask.id,
                        value: e.target.value,
                      });
                    }}
                    className="border-none focus:outline-none ml-2 text-sm"
                  />
                </div>

                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_SUBTASK",
                      id: todo.id,
                      subTaskId: subTask.id,
                    });
                  }}
                >
                  <IconTrash2 height={12} width={12} />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center">
          <IconPlus width={16} height={16} />
          <input
            className="border-none focus:outline-none ml-2 text-sm"
            placeholder="New Sub Task"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch({
                  type: "ADD_SUBTASK",
                  id: todo.id,
                  value: e.target.value,
                });
              }
            }}
          />
        </div>
      </div>

      {/* tags */}
      <div className="flex items-center py-2 border-b">
        {todo.tags.map((tag) => {
          return (
            <div
              key={tag.id}
              className="px-3 text-sm text-blue-500 bg-blue-100 rounded-xl mr-1"
            >
              <span>{tag.value}</span>
              <button
                className="ml-2"
                onClick={() => {
                  dispatch({
                    type: "DELETE_TAG",
                    id: todo.id,
                    tagId: tag.id,
                  });
                }}
              >
                x
              </button>
            </div>
          );
        })}
        <input
          className="border-none focus:outline-none ml-2 text-base"
          placeholder="Add Tags"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({
                type: "ADD_TAG",
                id: todo.id,
                value: e.target.value,
              });
            }
          }}
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-sm placeholder:text-gray-300"
          placeholder="Set When"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        {/* <img className="w-4 h-4" src="./assets/img/inbox.svg" alt="Inbox" /> */}
        <input
          className="border-none focus:outline-none ml-2"
          placeholder="Inbox"
          type="text"
        />
      </div>
      <div className="flex items-center py-2">
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="Add Deadline"
          type="text"
        />
      </div>
    </div>
  );
}
