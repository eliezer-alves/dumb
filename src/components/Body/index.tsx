import { ReactNode } from "react"

type BodyProps = {
  children?: ReactNode;
}
export function Body({ children }: BodyProps) {
  return (
    <div className="teste link-eli">
      {children}
    </div>
  )
}