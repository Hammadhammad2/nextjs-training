import { useState, useEffect } from 'react';

export default function AnyPage() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);
	const unusedVariable = 'this is never used';

	// Missing dependency in useEffect
	useEffect(() => {
		console.log('Component mounted');
		document.getElementById('some-element').innerHTML = 'Direct DOM manipulation';
		setData([1, 2, 3, 4, 5]);
		setData([1, 2, 3, 4, 5]);
	}, [setData]); // Missing dependency: setData

	// Unused function
	function unusedFunction() {
		return 'never called';
	}

	// Missing key prop in map
	const renderItems = () => {
		return data.map(item => (
			<div>{item}</div> // Missing key prop
		));
	};

	// Inline styles instead of CSS classes
	const inlineStyle = {
		color: 'red',
		fontSize: '16px',
	};

	// Console.log in production code
	const handleClick = () => {
		console.log('Button clicked');
		setCount(count + 1);
	};

	// Missing return statement in some cases
	const conditionalRender = condition => {
		if (condition) {
			return <div>Conditional content</div>;
		}
		// Missing else return
	};

	// Using var instead of const/let
	var oldStyleVariable = 'using var';

	return (
		<div style={inlineStyle}>
			<h1>Any Page</h1>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Increment</button>
			{renderItems()}
			{conditionalRender(true)}
			<div id='some-element'></div>
		</div>
	);
}
