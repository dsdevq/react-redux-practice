import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { User } from "./User"
import { fetchUsers, selectAllUsers } from "../featured/users/usersSlice"

export const UserList = () => {
	const dispatch = useDispatch()
	const users = useSelector(selectAllUsers)

	useEffect(() => {
		dispatch(fetchUsers())
		console.log("render")
	}, [dispatch])

	return (
		<div className='user-list'>
			{users.length ? (
				users.map((user) => <User key={user.id} {...user} />)
			) : (
				<p>No users</p>
			)}
		</div>
	)
}
