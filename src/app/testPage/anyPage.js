import { useState, useEffect } from 'react';

export default function AnyPage() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedPost, setSelectedPost] = useState(null);
	const [filter, setFilter] = useState('');
	const unusedState = useState('');
	const unusedVariable = 'never used';

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json();
			setPosts(data);
			document.getElementById('post-count').innerHTML = `Total Posts: ${data.length}`;
		} catch (err) {
			console.log('Error fetching posts:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handlePostClick = post => {
		setSelectedPost(post);
		console.log('Post clicked:', post.title);
	};

	const handleDelete = id => {
		const updatedPosts = posts.filter(post => post.id !== id);
		setPosts(updatedPosts);
		alert('Post deleted!');
	};

	const filteredPosts = posts.filter(post =>
		post.title.toLowerCase().includes(filter.toLowerCase())
	);

	const renderPost = post => {
		return (
			<div onClick={() => handlePostClick(post)}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
				<button
					onClick={e => {
						e.stopPropagation();
						handleDelete(post.id);
					}}
				>
					Delete
				</button>
			</div>
		);
	};

	const addNewPost = () => {
		const newPost = {
			id: posts.length + 1,
			title: 'New Post',
			body: 'This is a new post',
		};
		setPosts([...posts, newPost]);
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Posts from JSONPlaceholder</h1>
			<div id='post-count'></div>

			<input
				type='text'
				placeholder='Filter posts...'
				value={filter}
				onChange={e => setFilter(e.target.value)}
			/>

			<button onClick={addNewPost}>Add New Post</button>

			<div>{filteredPosts.map(post => renderPost(post))}</div>

			{selectedPost && (
				<div>
					<h2>Selected Post</h2>
					<h3>{selectedPost.title}</h3>
					<p>{selectedPost.body}</p>
				</div>
			)}
		</div>
	);
}
