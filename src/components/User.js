import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { deleteUsers, postUser } from "../featured/users/usersSlice"

export const User = ({ id, name, username, email }) => {
	const dispatch = useDispatch()

	return (
		<div className='user'>
			<div>UserID {id}</div>
			<div>{name}</div>
			<div>{username}</div>
			<div>{email}</div>
			<div>
				<button onClick={() => dispatch(deleteUsers(id))}>delete</button>
				<button
					onClick={() =>
						dispatch(
							postUser({
								id: Date.now(),
								name: name,
								username: username,
								email: email,
							})
						)
					}>
					duplicate
				</button>
			</div>
		</div>
	)
}
