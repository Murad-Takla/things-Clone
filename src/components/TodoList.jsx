import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

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
  const [title, setTitle] = useState(todo.title);

  if (!isExpanded)
    return (
      <div
        key={todo.id}
        onDoubleClick={() => {
          setIsExpanded(true);
        }}
      >
        <input className="scale-125" type="checkbox" name="name" id="id" />
        <span className="ml-1 text-gray-600">{todo.title}</span>
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: "UPDATE_TODO", id: todo.id, title });
            }
          }}
          aria-autocomplete="list"
        />
        <button onClick={() => setIsExpanded(false)}>Collapse</button>
      </div>
      <div className="flex items-center py-2 border-b">
        {/* <img className="w-4 h-4" src="./assets/img/notes.svg" alt="Inbox" /> */}
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="Notes"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        {/* <img className="w-3 h-3" src="./assets/img/plus.svg" alt="Plus" /> */}
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="New Sub Task"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-base"
          placeholder="Add Tags"
          type="text"
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
