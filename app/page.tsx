import { PrismaClient } from "@prisma/client";
import AddTodo from '@/components/shared/AddTodo';
import Todo from "@/components/shared/Todo";

// import TodoList from '@/components/todos/todo-list';
// import sampleData from '@/db/sample-data'
// import { todoTypes } from "@/types/todoTypes";

const prisma = new PrismaClient()

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      name: true,
      id: true,
      todo: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}


const HomePage = async () => {
const data = await getData()

console.log(data);

  return(
    <div className="ml-50 py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold">
         My Todo list
      </span>
      <h1 className=" text-3xl mt-3 font-extrabold mb-5">
       Built with 
        <span className="text-orange-700 ml-2">
        Next.js 15
        </span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
             <Todo todo={todo} />
             {/* <h1>{todo.title}</h1> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
