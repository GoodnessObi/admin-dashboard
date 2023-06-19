import { useState, useEffect } from 'react';
import { User, Status } from '../../types';

export default function useUser(id: string): [user: User, status: Status] {
	const [user, setUser] = useState<User>({});
	const [status, setStatus] = useState<Status>('unloaded');
	const userStatus: string[] = ['active', 'inactive', 'blacklisted', 'pending'];

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users !== null) {
			const json = JSON.parse(users).find((user: User) => user.id === id);
			setUser(json);
			setStatus('loaded');
		} else {
			fetchUser();
		}

		async function fetchUser() {
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
			);
			const json = await res.json();
			json.status =
				userStatus[Math.floor(Math.random() * (userStatus.length - 0) + 0)];
			setUser(json);
			setStatus('loaded');
		}
		//eslint-disable-next-line
	}, []);

	return [user, status];
}
