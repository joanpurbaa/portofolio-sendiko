import { cn } from "@/lib/utils";

type TextInputProps = {
	id: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
	id,
	label,
	placeholder,
	required = false,
	className,
	value,
	onChange,
}: TextInputProps) {
	return (
		<fieldset className={cn("flex flex-col gap-2", className)}>
			<label htmlFor={id} className="font-medium text-xs sm:text-base">
				{label}
			</label>
			<input
				type="text"
				id={id}
				className="p-2 border-2 border-neutral-700 rounded-md outline-none text-xs sm:text-base"
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
			/>
		</fieldset>
	);
}
