import { useState, useEffect } from 'react';
import { User, Status } from '../../types';

export default function useUser(id: string): [user: User, status: Status] {
	const [user, setUser] = useState<User>({});
	const [status, setStatus] = useState<Status>('unloaded');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users !== null) {
			const json = JSON.parse(users).find((user: User) => user.id === id);
			setUser(json);
		} else {
			fetchUser();
		}

		async function fetchUser() {
			setStatus('loading');
			const res = await fetch(
				`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
			);
			const json = await res.json();
			localStorage.setItem('users', JSON.stringify(json));
			setUser(json);
			setStatus('loaded');
		}
		//eslint-disable-next-line
	}, []);

	return [user, status];
}
