import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { deleteUser } from "../featured/users/usersSlice"

export const User = ({ id, name, username, email }) => {
	const dispatch = useDispatch()

	return (
		<div
			style={{
				textAlign: "center",
			}}>
			<div>UserID {id}</div>
			<div>{name}</div>
			<div>{username}</div>
			<div>{email}</div>
			<div>
				<button onClick={() => dispatch(deleteUser(id))}>delete</button>
				<button>duplicate</button>
			</div>
		</div>
	)
}
