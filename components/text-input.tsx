import { cn } from "@/lib/utils";

type TextInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export default function TextInput({
  id,
  label,
  placeholder,
  required = false,
  className,
}: TextInputProps) {
  return (
    <fieldset className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="p-2 border-2 border-neutral-700 rounded-md outline-none"
        placeholder={placeholder}
        required={required}
      />
    </fieldset>
  );
}
