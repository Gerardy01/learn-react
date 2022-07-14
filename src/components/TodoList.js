


function TodoList(props) {

    return (
        <>
            {
                props.theList.map((data) => {
                    return <li id={data.id}> {data.title} </li>
                })
            }
        </>
    )
}


export default TodoList