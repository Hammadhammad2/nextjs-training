import { useState, useEffect } from 'react';

export default function UserList() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [isVisible, setIsVisible] = useState(true);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		fetchUsers();
		const interval = setInterval(() => {
			console.log('Component is still mounted');
		}, 1000);
		setTimer(interval);
	}, []);

	useEffect(() => {
		return () => {
			if (timer) clearInterval(timer);
		};
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.log('Failed to fetch users:', error);
		}
	};

	const handleUserSelect = (user) => {
		setSelectedUser(user);
		document.title = `Selected: ${user.name}`;
	};

	const filteredUsers = users.filter(user => 
		user.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const addUser = () => {
		const newUser = {
			id: users.length + 1,
			name: 'New User',
			email: 'newuser@example.com'
		};
		setUsers([...users, newUser]);
	};

	if (!isVisible) return <button onClick={toggleVisibility}>Show Users</button>;

	return (
		<div>
			<h2>Users List</h2>
			<input 
				type="text" 
				placeholder="Search users..." 
				value={searchTerm} 
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button onClick={addUser}>Add User</button>
			<button onClick={toggleVisibility}>Hide Users</button>
			
			<div>
				{filteredUsers.map(user => (
					<div onClick={() => handleUserSelect(user)}>
						<h3>{user.name}</h3>
						<p>{user.email}</p>
					</div>
				))}
			</div>
			
			{selectedUser && (
				<div>
					<h3>Selected User Details</h3>
					<p>Name: {selectedUser.name}</p>
					<p>Email: {selectedUser.email}</p>
					<p>Phone: {selectedUser.phone}</p>
				</div>
			)}
		</div>
	);
}
