import { useEffect, useState } from "react"

function UseEffectCompnent() {

    const [val, setVal] = useState<number>(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setVal((v) => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, [])

    return (
        <div>{val}</div>
    )
}
export default UseEffectCompnent;