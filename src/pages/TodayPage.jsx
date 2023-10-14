import Layout from "../components/Layout";
import TodoList from "../components/TodoList";

export default function TodayPage() {
  return (
    <Layout>
      <TodoList />
      <div className="fixed text-2xl text-white bottom-6 right-6 w-12 h-12 bg-sky-500 shadow-md rounded-full flex justify-center items-center cursor-pointer">
        +
      </div>
    </Layout>
  );
}
