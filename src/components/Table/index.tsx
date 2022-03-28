import { ReactNode } from "react"

type TableProps = {
  children: ReactNode;
}

export function Table({ children }: TableProps){
  return (
    <div className="min-w-1/5 px-8 py-6 rounded-lg bg-primary-100 flex flex-col items-center justify-between">
      {children}
    </div>
  )
}