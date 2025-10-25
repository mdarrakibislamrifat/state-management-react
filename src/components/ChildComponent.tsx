

const ChildComponent = ({ count }: { count: number }) => {
    return (
        <div className="border border-green-400 p-10 m-10">Count : {count}</div>
    )
}

export default ChildComponent