import { useState, useEffect } from 'react'


function TodoList(props) {

    const [listData, setListData] = useState(null);

    useEffect(() => {
        setListData(props.e);
    }, [props.e])

    return (
        <>
            { listData && (
                <li id={listData.id}>{listData.title}</li>
                )
            }
        </>
    )
}


export default TodoList