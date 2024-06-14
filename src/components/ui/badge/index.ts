import { type VariantProps, tv } from "tailwind-variants";

export { default as Badge } from "./badge.svelte";
export const badgeVariants = tv({
	base: "inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	variants: {
		variant: {
			default:
				"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
			secondary:
				"bg-secondary dark:bg-neutral-850 p-1 text-sm border-1 outline outline-2 mx-1 outline-neutral-300 dark:outline-neutral-700 text-secondary-foreground hover:bg-secondary/50",
			destructive:
				"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
			outline: "text-foreground",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type Variant = VariantProps<typeof badgeVariants>["variant"];
