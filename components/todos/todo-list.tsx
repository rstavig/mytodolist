const TodoList = ({data, title}: {data: any; title?: string}) => {
    console.log(data.todos)
    return (
        <>
         <h2 className='h2-bold mb-4'>{title}</h2>
        


         {data.length > 0 ? (
             <div className=''>
               {data.map((item: any) => (
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