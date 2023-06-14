import { navItem } from '../types';

type navlinksType = { [key: string]: navItem[] };

const navlinks: navlinksType = {
	customers: [
		{
			label: 'Users',
			icon: 'Users',
			link: '/users',
		},
		{
			label: 'Guarantors',
			icon: 'Guarantors',
			link: '#',
		},
		{
			label: 'Loans',
			icon: '',
			link: '#',
		},
		{
			label: 'Decision Models',
			icon: '',
			link: '#',
		},
		{
			label: 'Savings',
			icon: '',
			link: '#',
		},
		{
			label: 'Loan Requests',
			icon: '',
			link: '#',
		},
		{
			label: 'White List',
			icon: '',
			link: '#',
		},
		{
			label: 'karma',
			icon: '',
			link: '#',
		},
	],

	businesses: [
		{
			label: 'Organization',
			icon: '',
			link: '#',
		},
		{
			label: 'Loan Products',
			icon: '',
			link: '#',
		},
		{
			label: 'Savings Products',
			icon: '',
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
			icon: '',
			link: '#',
		},
		{
			label: 'Settlements',
			icon: '',
			link: '#',
		},
		{
			label: 'Reports',
			icon: '',
			link: '#',
		},
	],

	settings: [
		{
			label: 'Preferences',
			icon: '',
			link: '#',
		},
		{
			label: 'Fees and Pricing',
			icon: '',
			link: '#',
		},
		{
			label: 'Audit Logs',
			icon: '',
			link: '#',
		},
		{
			label: 'Systems Messages',
			icon: '',
			link: '#',
		},
	],
};

export { navlinks };
