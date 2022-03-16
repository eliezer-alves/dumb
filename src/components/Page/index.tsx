import { ReactNode } from "react";
import { Body } from "../Body";
import { TopBar } from "../TopBar";

type PageProps = {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className="w-full h-full">
      <TopBar />
      <Body>
        {children}
      </Body>
    </div>
  )
}