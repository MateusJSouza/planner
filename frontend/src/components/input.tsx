import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: 'bg-transparent text-lg outline-none placeholder-zinc-400',

  variants: {
    variant: {
      default: 'flex-1 w-40 text-lg',
    },
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

export function Input({ variant, ...props }: InputProps) {
  return <input className={inputVariants({ variant })} {...props} />
}
