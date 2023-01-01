import { useState } from "react"

function UseStateCompnent() {


    const [arr, setArr] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);
    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>Add to arrey</button>
                {JSON.stringify(arr)}
            </div>
            <br />
            <div>
                <button onClick={() => setName('Tolon')}>Add name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateCompnent;