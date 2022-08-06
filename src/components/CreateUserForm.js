import React from "react"
import { useDispatch } from "react-redux"
import { create } from "../featured/users/usersSlice"

export const CreateUserForm = () => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const newUser = {
			id: Date.now(),
			name: e.target[0].value,
			username: e.target[1].value,
			email: e.target[2].value,
		}

		console.log(newUser)
		dispatch(create(newUser))
		e.target.reset()
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='username'>Username</label>
			<input defaultValue='TBH' type='text' id='username' />
			<label htmlFor='name'>Name</label>
			<input defaultValue='Denis' type='text' id='name' />
			<label htmlFor='email'>Email</label>
			<input defaultValue='test@gmail.com' type='text' id='email' />
			<input type='submit' />
		</form>
	)
}