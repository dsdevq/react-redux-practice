import { CreateUserForm } from "./components/CreateUserForm"
import { UserList } from "./components/UserList"

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "1rem",
			}}
			className='App'>
			<CreateUserForm />
			<UserList />
		</div>
	)
}

export default App
