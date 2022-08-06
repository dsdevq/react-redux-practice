import React from "react"
import { useSelector } from "react-redux/es/exports"
import { User } from "./User"

export const UserList = () => {
	const users = useSelector((state) => state.users)
	return (
		<>
			<div>UserList</div>

			{users.length ? (
				users.map((user) => <User key={user.id} {...user} />)
			) : (
				<p>No users</p>
			)}
		</>
	)
}
