import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center gap-2 px-5 justify-center rounded-lg font-medium',

  variants: {
    variant: {
      primary: 'bg-lime-300 hover:bg-lime-400 text-lime-950',
      secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200',
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={buttonVariants({ variant, size })}
    >
      {children}
    </button>
  )
}
