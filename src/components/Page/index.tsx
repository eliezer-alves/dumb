import { ReactNode } from "react";
import { TopBar } from "../TopBar";
import { Body } from "./Body";

type BodyProps = {
  children?: ReactNode;
}

export function Page({ children }: BodyProps) {
  return (
    <div className="h-full flex-col-center">
      <TopBar />
      <Body>{children}</Body>
    </div>
  )
}