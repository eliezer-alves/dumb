import { ReactNode } from "react"

type TableProps = {
  children: ReactNode;
}

export function Table({ children }: TableProps){
  return (
    <div className="w-1/3 h-40 p-12 rounded-lg bg-primary-100 flex-center">
      {children}
    </div>
  )
}