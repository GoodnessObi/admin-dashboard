import { expect, test } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import useUser from '../common/hooks/useUser';

test('gives back a user', async () => {
	const user = {
		createdAt: '2072-12-27T03:44:22.522Z',
		orgName: 'labore-dolor-et',
		userName: 'Wilburn.Rice',
		profile: {
			firstName: 'Darian',
			lastName: 'Rolfson',
		},
		guarantor: {
			firstName: 'Darian',
			lastName: 'Rolfson',
		},
		accountBalance: '496.00',
		accountNumber: 'GWQUSEH1',
		socials: {
			facebook: '@lendsqr',
			instagram: '@lendsqr',
			twitter: '@lendsqr',
		},
		education: {
			level: 'Bsc',
			employmentStatus: 'Employed',
			sector: 'FinTech',
		},
		id: '2',
	};
	fetch.mockResponseOnce(JSON.stringify(user));
	const { result } = renderHook(() => useUser(2));

	await waitFor(() => expect(result.current[1]).toBe('loaded'));

	expect(result.current[0]).toEqual(user);
});
