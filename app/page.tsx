import { PrismaClient } from "@prisma/client";
import AddTodo from '@/components/shared/AddTodo';
import Todo from "@/components/shared/Todo";
import  InfoDialog  from "@/components/shared/InfoDialog";


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
      // createdAt: "desc",
    },
  });

  return data;
}


const HomePage = async () => {
const data = await getData()

console.log(data);

  return(
    <>
    <InfoDialog />
    <div className="ml-50 mr-50 py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold mb-4">
          Todo list
      </span>
      

      <div className="flex justify-center flex-col items-center w-[800px] ">
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
    </>
  );
};

export default HomePage;
