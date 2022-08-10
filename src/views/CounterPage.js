import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWithValue, minCount, plusCount } from "../redux/features/counter";
import { setName } from "../redux/features/name";



function Counter() {

    const count = useSelector(state => state.counter.count);
    const name = useSelector(state => state.nameP.name);
    const dispatch = useDispatch();
    
    const[nameForm, setNameForm] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (nameForm.length !== 0) {
            dispatch(setName(nameForm));
        }
    }

    return (
        <section className="counter">
            <h1>the count : {count}</h1>
            <button onClick={() => dispatch(plusCount())}>increase</button>
            <button onClick={() => dispatch(minCount())} >decrease</button>
            <button onClick={() => dispatch(addWithValue(20))}>increase 20</button>

            {name === '' ?
                <>
                    <h1>masukan nama anda</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setNameForm(e.target.value)} placeholder="nama" value={nameForm} />
                        <button type="submit">submit</button>
                    </form>
                </> : <>
                    <h1>selamat datang {name}</h1>
                </>
            }

        </section>
    )
}

export default Counter