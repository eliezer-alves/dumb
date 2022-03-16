import { ReactNode } from "react";

type BodyProps = {
  children?: ReactNode;
}

export function Body({children}: BodyProps) {
  return (
    <div className="h-5/6 w-full flex-center scroll-m-1 overflow-y-auto">
      {children}
    </div>
  )
}