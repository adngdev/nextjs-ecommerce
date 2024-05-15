import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-blue-500 text-white shadow-sm hover:bg-blue-600/90',
                destructive: 'bg-red-400 text-white shadow-sm hover:bg-red-500/90',
                outline: 'border bg-transparent shadow-sm hover:bg-slate-900 hover:text-white',
                secondary: 'bg-slate-900 text-white shadow-sm hover:bg-slate-900/50',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-slate-900 underline-offset-2 hover:underline'
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
