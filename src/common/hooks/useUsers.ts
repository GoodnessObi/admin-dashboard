import { useState, useEffect } from 'react';
import { Status, User } from '../../types';

export default function useUsers(): [users: User[], status: Status] {
	const [users, setUsers] = useState<User[]>([]);
	const [status, setStatus] = useState<Status>('unloaded');

	const userStatus: string[] = ['active', 'inactive', 'blacklisted', 'pending'];

	useEffect(() => {
		async function fetchUsers() {
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
			);
			const json = await res.json();
			json.forEach((item: User) => {
				item.status =
					userStatus[Math.floor(Math.random() * (userStatus.length - 0) + 0)];
			});

			localStorage.setItem('users', JSON.stringify(json));
			setUsers(json);
			setStatus('loaded');
		}

		fetchUsers();

		//eslint-disable-next-line
	}, []);

	return [users, status];
}
