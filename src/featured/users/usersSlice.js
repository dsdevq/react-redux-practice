import { createSlice } from "@reduxjs/toolkit"

// const usersUrl = "https://jsonplaceholder.typicode.com/users"

export const usersSlice = createSlice({
	name: "users",
	initialState: [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496",
				},
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
		{
			id: 2,
			name: "Ervin Howell",
			username: "Antonette",
			email: "Shanna@melissa.tv",
			address: {
				street: "Victor Plains",
				suite: "Suite 879",
				city: "Wisokyburgh",
				zipcode: "90566-7771",
				geo: {
					lat: "-43.9509",
					lng: "-34.4618",
				},
			},
			phone: "010-692-6593 x09125",
			website: "anastasia.net",
			company: {
				name: "Deckow-Crist",
				catchPhrase: "Proactive didactic contingency",
				bs: "synergize scalable supply-chains",
			},
		},
		{
			id: 3,
			name: "Clementine Bauch",
			username: "Samantha",
			email: "Nathan@yesenia.net",
			address: {
				street: "Douglas Extension",
				suite: "Suite 847",
				city: "McKenziehaven",
				zipcode: "59590-4157",
				geo: {
					lat: "-68.6102",
					lng: "-47.0653",
				},
			},
			phone: "1-463-123-4447",
			website: "ramiro.info",
			company: {
				name: "Romaguera-Jacobson",
				catchPhrase: "Face to face bifurcated interface",
				bs: "e-enable strategic applications",
			},
		},
	],
	reducers: {
		//! Redux Toolkit allows us to write "mutating" logic in reducers. It
		//# doesn't actually mutate the state because it uses the Immer library,
		//& which detects changes to a "draft state" and produces a brand new
		//* immutable state based off those changes
		create: (state, action) => {
			state.push(action.payload)
		},
		deleteUser: (state, action) => {
			return state.filter((user) => user.id !== action.payload)
		},
	},
})

//!!!! Action creators are generated for each case reducer function
export const { create, deleteUser } = usersSlice.actions

export default usersSlice.reducer
