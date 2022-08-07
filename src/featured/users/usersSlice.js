import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const userAPI = {
	fetchUsers: "https://jsonplaceholder.typicode.com/users?_limit=10",
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch(userAPI.fetchUsers)
	const result = await response.json()
	return result
})
export const deleteUsers = createAsyncThunk(
	"users/deleteUsers",
	async (action) => {
		await fetch(`https://jsonplaceholder.typicode.com/users/${action}`, {
			method: "DELETE",
		})
		// Return action because DELETE request return nothing
		return new Promise((resolve, reject) => {
			resolve(action)
		})
	}
)

const initialState = {
	users: [],
	status: "idle",
	error: null,
}

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		//! Redux Toolkit allows us to write "mutating" logic in reducers. It
		//# doesn't actually mutate the state because it uses the Immer library,
		//& which detects changes to a "draft state" and produces a brand new
		//* immutable state based off those changes
		create: (state, action) => {
			state.users.push(action.payload)
		},
		deleteUser: (state, action) => {
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			}
		},
	},
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
			// ! DELETE
			.addCase(deleteUsers.fulfilled, (state, action) => {
				// return { ...state }
			})
	},
})

//!!!! Action creators are generated for each case reducer function
export const { create, deleteUser } = usersSlice.actions

export const selectAllUsers = (state) => state.users.users

export default usersSlice.reducer
