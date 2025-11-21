
// Define the shape of a single todo item
interface Todo {
  id: string | number;
  todo: string;
}

// Define the props interface 
interface TodoListProps {
  title: string;
  data: Todo[];
}

// Functional component to display a list of todos
const TodoList = ({ title, data }: TodoListProps) => {
console.log(data);
    return (
        <>
         <h2 className='h2-bold mb-4'>{title}</h2>
         {data.length > 0 ? (
             <div className=''>
               {data.map((item) => (
                <ul key={item.id}>
                 <li>{item.id}</li>
                 <li>{item.todo}</li>
                 </ul>
               ))}
             </div>
         ) : (
           <div>
             <p>No Todos found</p>
           </div>
         )}
       </>
     );
   };

export default TodoList