import { useState, useEffect } from 'react';

export default function useUsers() {
	const [users, setUsers] = useState([]);
	const [status, setStatus] = useState('unloaded');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users !== null) {
			const json = JSON.parse(users);
			setUsers(json);
		} else {
			fetchUsers();
		}

		async function fetchUsers() {
			setUsers([]);
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
			);
			const json = await res.json();
			localStorage.setItem('users', JSON.stringify(json));
			setUsers(json);
			setStatus('loaded');
		}
	}, []);

	return [users, status];
}
