import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "button-widget inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-slate-900 bg-slate-900 text-white hover:bg-slate-700 focus:ring-slate-900",
        secondary:
          "border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus:ring-slate-400",
        text: "border-transparent bg-transparent px-0 text-slate-900 hover:text-slate-600 focus:ring-slate-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
