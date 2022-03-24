import { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  return (
    <div className="w-full h-full px-8 xsm:w-2/3 xsm:px-0 lg:w-3/5 xl:w-2/5 flex flex-col items-center">
      <div className="w-full h-1/6"></div>
      {children}
    </div>
  )
}