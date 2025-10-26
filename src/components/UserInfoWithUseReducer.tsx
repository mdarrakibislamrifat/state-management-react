import { useReducer } from "react"


const initialState = {
    name: "",
    age: "",
    hobbies: []
}


const reducer = (currentState, action) => {

    switch (action.type) {
        case "addName":
            return {
                ...currentState, name: "Programming"
            }
        default:
            break;
    }

}


const UserInfoWithUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);





    return (
        <form>
            <input
                onChange={() => dispatch({ type: "addName" })}
                className="border border-purple-500 m-10"
                type="text"
                name="name"
                id="name"
                placeholder="Name"

            />
            <input
                className="border border-purple-500 m-10"
                type="number"
                name="age"
                id="age"
                placeholder="Age"

            />
            <input
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