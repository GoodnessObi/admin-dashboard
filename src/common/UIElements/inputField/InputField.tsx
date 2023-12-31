import './InputField.scss';

interface InputFieldProps {
	name: string;
	value?: string;
	setter?: (value: string) => void;
	type?: string;
}

export function InputField({
	name,
	value,
	setter,
	type = 'text',
}: InputFieldProps) {
	return (
		<div className='form-group'>
			<label className='' htmlFor={name}>
				{name}
			</label>
			<input
				type={type}
				name={name}
				className='form-input'
				id={name}
				aria-describedby={name + 'Help'}
				placeholder={name}
				value={value}
				onChange={(event) => {
					if (!setter) return;
					setter(event.target.value);
				}}
			/>
		</div>
	);
}
