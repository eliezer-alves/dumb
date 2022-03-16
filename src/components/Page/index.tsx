import { ReactNode } from "react";
import { Body } from "./Body";
import { TopBar } from "./TopBar";

type BodyProps = {
  children?: ReactNode;
}

export function Page({children}: BodyProps) { 
  return (
    <div className="h-full flex-col-center">
      <TopBar/>
      <Body>{children}</Body>    
    </div>
  )
}