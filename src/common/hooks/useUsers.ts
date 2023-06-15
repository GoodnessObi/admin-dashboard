import { useState, useEffect } from 'react';
import { Status, User } from '../../types';

export default function useUsers(): [users: User[], status: Status] {
	const [users, setUsers] = useState<User[]>([]);
	const [status, setStatus] = useState<Status>('unloaded');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users !== null) {
			const json = JSON.parse(users);
			setUsers(json);
		} else {
			fetchUsers();
		}

		async function fetchUsers() {
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
			);
			const json = await res.json();
			localStorage.setItem('users', JSON.stringify(json));
			setUsers(json);
			setStatus('loaded');
		}
		//eslint-disable-next-line
	}, []);

	return [users, status];
}
