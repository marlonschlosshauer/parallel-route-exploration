import { FC, PropsWithChildren } from "react";
import { LabeledLink, LabeledLinkProps } from "../link/Link";

export interface FooterProps {
  items?: LabeledLinkProps[];
}

export const Footer: FC<PropsWithChildren<FooterProps>> = ({
  items = [],
  children,
}) => {
  return (
    <div className="h-[500px] flex justify-center bg-gray-200">
      <div className="py-24 flex-1 basis-0 flex justify-between max-w-[1440px]">
        <div>{children}</div>
        <nav>
          <ul className="flex flex-col gap-1">
            {items.map((item, key) => (
              <li
                key={key}
                className="px-4 py-2 flex items-center text-center rounded-full"
              >
                <LabeledLink {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
