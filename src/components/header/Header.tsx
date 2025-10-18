"use client";

import { FC, PropsWithChildren } from "react";
import { LabeledLink, LabeledLinkProps } from "../link/Link";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  items: LabeledLinkProps[];
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  items,
  children,
}) => {
  const path = usePathname();
  const segments = path.split("/");
  const last = segments[segments.length - 1];

  return (
    <nav className="m-8 p-4 flex- bg-gray-200 rounded-full">
      <ul className="flex flex-row gap-1">
        <li className="px-4 p-2 mr-12">{children}</li>
        {items.map((item, key) => (
          <li
            key={key}
            className={`px-4 py-2 flex items-center text-center rounded-full  ${item.href.includes(last) ? "underline" : ""}`}
          >
            <LabeledLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
