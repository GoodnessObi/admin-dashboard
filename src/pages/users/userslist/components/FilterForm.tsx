import { useState } from 'react';
import './FilterForm.scss';
import { InputField } from '../../../../common/UIElements/inputField/InputField';

type FilterFormData = Record<
	'orgName' | 'userName' | 'email' | 'createdAt' | 'phoneNumber' | 'status',
	string
>;

interface FilterFormProps {
	onSubmit: (data: FilterFormData) => void;
	onReset: () => void;
}

function FilterForm({ onSubmit, onReset }: FilterFormProps) {
	const formState = {
		orgName: '',
		userName: '',
		email: '',
		createdAt: '',
		phoneNumber: '',
		status: '',
	};
	const [form, setForm] = useState<FilterFormData>(formState);
	return (
		<form className='filter-form'>
			<InputField
				name='Organization'
				value={form.orgName}
				setter={(value) => {
					setForm({ ...form, orgName: value });
				}}
			/>
			<InputField
				name='Username'
				value={form.userName}
				setter={(value) => {
					setForm({ ...form, userName: value });
				}}
			/>
			<InputField
				name='Email'
				value={form.email}
				setter={(value) => {
					setForm({ ...form, email: value });
				}}
			/>
			<InputField
				name='Date'
				value={form.createdAt}
				setter={(value) => {
					setForm({ ...form, createdAt: value });
				}}
			/>
			<InputField
				name='Phone Number'
				value={form.phoneNumber}
				setter={(value) => {
					setForm({ ...form, phoneNumber: value });
				}}
			/>
			<InputField
				name='Status'
				value={form.status}
				setter={(value) => {
					setForm({ ...form, status: value });
				}}
			/>
			<div className='btn-group'>
				<button
					onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
						e.preventDefault();
						onReset();
					}}
					className='btn reset'
				>
					Reset
				</button>
				<button
					onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
						e.preventDefault();
						onSubmit(form);
						setForm(formState);
					}}
					className='btn filter'
				>
					Filter
				</button>
			</div>
		</form>
	);
}

export default FilterForm;
