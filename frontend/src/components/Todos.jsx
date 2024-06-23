export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.discription}</h2>
                <button>{todo.completed == true ? "Completed":"mark as complete"}</button>
            </div>   
        })}
    </div>
}
