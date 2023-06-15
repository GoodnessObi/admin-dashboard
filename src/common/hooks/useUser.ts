import { useState, useEffect } from 'react';

export default function useUser(id: string) {
	const [user, setUser] = useState([]);
	const [status, setStatus] = useState('unloaded');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users !== null) {
			const json = JSON.parse(users).find((user: any) => user.id === id);
			setUser(json);
		} else {
			fetchUsers();
		}

		async function fetchUsers() {
			setUser([]);
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
			);
			const json = await res.json();
			localStorage.setItem('users', JSON.stringify(json));
			setUser(json);
			setStatus('loaded');
		}
	}, []);

	return [user, status];
}
