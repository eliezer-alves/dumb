import { ReactNode } from "react"

type TableProps = {
  children: ReactNode;
}

export function Table({ children }: TableProps){
  return (
    <div className="min-w-1/5 px-8 py-6
      flex flex-col items-center justify-between
      rounded-3xl bg-primary-100
      mobile:px-4 mobile:py-4
    ">
      {children}
    </div>
  )
}