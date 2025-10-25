
type Tprops = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}


const CounterWithFunctionalComponent = ({ count, setCount }: Tprops) => {
    return (
        <div className="border border-red-500 m-10 p-4">
            <button
                className="border p-4 bg-blue-400"
                onClick={() => setCount((prev) => prev + 1)}
            >
                {count}
            </button>
        </div>
    );
};

export default CounterWithFunctionalComponent;
