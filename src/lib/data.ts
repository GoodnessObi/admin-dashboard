import { navItem } from '../types';

type navlinksType = { [key: string]: navItem[] };

const navlinks: navlinksType = {
	customers: [
		{
			label: 'Users',
			icon: 'Calendar',
			link: '/users',
		},
		{
			label: 'Guarantors',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Loans',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Decision Models',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Savings',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Loan Requests',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'White List',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'karma',
			icon: 'Calendar',
			link: '#',
		},
	],

	businesses: [
		{
			label: 'Organization',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Loan Products',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Savings Products',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Fees and Charges',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Transactions',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Services',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Service Account',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Settlements',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Reports',
			icon: 'Calendar',
			link: '#',
		},
	],

	settings: [
		{
			label: 'Preferences',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Fees and Pricing',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Audit Logs',
			icon: 'Calendar',
			link: '#',
		},
		{
			label: 'Systems Messages',
			icon: 'Calendar',
			link: '#',
		},
	],
};

export { navlinks };
