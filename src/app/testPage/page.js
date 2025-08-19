import AnyPage from './anyPage';
import UserList from './UserList';
import { useState } from 'react';

export default function TestPage() {
	const [activeTab, setActiveTab] = useState('posts');
	const [theme, setTheme] = useState('light');
	const unusedVar = 'not used';

	const handleTabChange = tab => {
		setActiveTab(tab);
		console.log('Tab changed to:', tab);
	};

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		document.body.style.backgroundColor = theme === 'light' ? '#333' : '#fff';
	};

	const renderContent = () => {
		if (activeTab === 'posts') {
			return <AnyPage />;
		} else if (activeTab === 'users') {
			return <UserList />;
		}
	};

	return (
		<div>
			<nav>
				<button onClick={() => handleTabChange('posts')}>Posts</button>
				<button onClick={() => handleTabChange('users')}>Users</button>
				<button onClick={toggleTheme}>Toggle Theme</button>
			</nav>

			<main>{renderContent()}</main>
		</div>
	);
}
