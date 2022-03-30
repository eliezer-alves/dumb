import { ReactNode } from "react";
import { SideBar } from "../SideBar";
import { TopBar } from "../TopBar";
import { Body } from "./Body";

type BodyProps = {
  children?: ReactNode;
}

export function Page({ children }: BodyProps) {
  return (
    <>
      <SideBar />
      <div className="h-full flex-col-center">
        <TopBar />
        <Body>{children}</Body>
      </div>
    </>
  )
}