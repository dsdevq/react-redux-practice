import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const userAPI = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	try {
		const response = await fetch(userAPI + "?_limit=10")
		const result = await response.json()
		return result
	} catch (e) {
		console.log("Error!", e)
	}
})
export const postUser = createAsyncThunk("users/postUser", async (action) => {
	const response = await fetch(userAPI, {
		method: "POST",
		body: JSON.stringify(action),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
	const result = await response.json()
	return result
})
export const deleteUsers = createAsyncThunk(
	"users/deleteUsers",
	async (action) => {
		await fetch(`${userAPI}/${action}`, {
			method: "DELETE",
		})
		// Return action because DELETE request return nothing
		return action
	}
)

const initialState = {
	users: [],
	status: "idle",
	error: null,
}

// createSlice is a function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// This API is the standard approach for writing Redux logic.
// Internally, it uses createAction and createReducer , so you may also use Immer to write "mutating" immutable updates:
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		//! GET
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				// Add user to the state array
				const newArray = action.payload
				newArray.forEach((item) =>
					state.users.find((user) => user.id === item.id)
						? item
						: state.users.push(item)
				)
			})
			//! DELETE
			.addCase(deleteUsers.fulfilled, (state, action) => {
				return {
					...state,
					users: state.users.filter((user) => user.id !== action.payload),
				}
			})
			//! POST
			.addCase(postUser.fulfilled, (state, action) => {
				state.users.push({ ...action.payload, id: Date.now() })
			})
	},
})

//!!!! Action creators are generated for each case reducer function

export const selectAllUsers = (state) => state.users.users

export default usersSlice.reducer
