import { ReactNode } from "react"

type TableProps = {
  content: string;
}

export function Table({ content }: TableProps) {
  return (
    <div className="w-1/2 p-8 rounded-lg bg-primary-100 flex-center">
      {content}
    </div>
  )
}