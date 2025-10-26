import { useReducer, type ChangeEvent } from "react"

type Taction = {
    type: string;
    payload: string
}

const initialState = {
    name: "",
    age: "",
    hobbies: [] as string[]
}


const reducer = (currentState: typeof initialState, action: Taction) => {

    switch (action.type) {
        case "addName":
            return {
                ...currentState, name: action.payload
            };
        case "addAge":
            return { ...currentState, age: action.payload };
        case "addHobbies":
            return { ...currentState, hobbies: [...currentState.hobbies, action.payload] };
        default:
            return currentState;
    }

}


const UserInfoWithUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
                className="border border-purple-500 m-10"
                type="text"
                name="name"
                id="name"
                placeholder="Name"

            />
            <input
                onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
                className="border border-purple-500 m-10"
                type="number"
                name="age"
                id="age"
                placeholder="Age"

            />
            <input
                onBlur={(e) => dispatch({ type: "addHobbies", payload: e.target.value })}
                className="border border-purple-500 m-10"
                type="text"
                name="hobbies"
                id="hobbies"
                placeholder="Hobby"

            />
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    )
}

export default UserInfoWithUseReducer