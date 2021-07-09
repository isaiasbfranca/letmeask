import { useState } from "react";

export function Button() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }


    return (
        <div>
            <span> contagem { counter} </span>
            <button onClick={ increment }>
                Adicionar
            </button>

            <button onClick={ decrement }>
                Remover
            </button>
        </div>
    )
}