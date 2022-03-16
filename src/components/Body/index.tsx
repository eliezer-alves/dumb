import { ReactNode } from "react";

type BodyProps = {
  children?: ReactNode;
}

export function Body({children}: BodyProps) {
  return (
    <div className="h-5/6 flex-center scroll-m-1 overflow-y-auto">
      <main className="w-1/3 h-2/3 flex-col-center">
        {children}
      </main>
    </div>
  )
}