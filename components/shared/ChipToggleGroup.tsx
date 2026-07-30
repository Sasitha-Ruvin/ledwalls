import { cn } from "@/lib/utils";

interface ChipToggleGroupProps {
  options: readonly string[] | string[];
  value: string[];
  onChange: (next: string[]) => void;
  className?: string;
}

export default function ChipToggleGroup({
  options,
  value,
  onChange,
  className,
}: ChipToggleGroupProps) {
  const toggle = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option]
    );
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const active = value.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active
                ? "border-brand bg-brand text-white"
                : "border-ink-soft text-muted-yc hover:border-brand/60"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
