import { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  return (
    <div className="w-full px-8 xsm:w-2/3 xsm:px-0 lg:w-3/5 xl:w-2/5 flex-col-center">
      {children}
    </div>
  )
}