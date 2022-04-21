import "./todo-list.css"



function todoList( {theData} ) {

    return (
        <ul>
            {
                theData.map(data => {
                    const list = data.title;
                    return <li key={data.id} className="todo-item">{list}</li>
                })
            }
        </ul>
    );
}

export default todoList;