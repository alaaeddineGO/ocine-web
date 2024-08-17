import { FC ,ReactNode } from 'react'

interface buttonProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean,
  children: ReactNode
}

const Button: FC<buttonProps> = ({variant='primary',isFullSize,children}) => {
  return (
    <button
      className={`btn btn-${variant==='primary'?'primary':
        variant==='secondary'?'secondary':'outline'
      }`}
    >
      {children}
    </button>
  )
}

export default Button