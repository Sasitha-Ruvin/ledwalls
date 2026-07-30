import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  className?: string;
  labelClassName?: string;
  children: React.ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  className,
  labelClassName,
  children,
}: FormFieldProps) {
  return (
    <label htmlFor={htmlFor} className={cn("flex flex-col gap-1.5", className)}>
      <span
        className={cn(
          "text-xs font-medium tracking-wider text-muted-yc uppercase",
          labelClassName
        )}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

export const DarkInputClass =
  "h-11 w-full rounded-lg border border-ink-soft bg-ink-soft px-4 text-sm text-white outline-none transition-colors focus:border-brand";
export const LightInputClass =
  "h-11 w-full rounded-md border border-line bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-brand";
