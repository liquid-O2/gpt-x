import { ReactNode } from 'react'

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`p-5 md:p-10 w-full h-full ${className}`}>{children}</div>
}

export default Container
