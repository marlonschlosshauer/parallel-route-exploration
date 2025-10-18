import Link from "next/link";
import { FC } from "react";

export interface LabeledLinkProps {
  label: string;
  href: string;
  inNewTab?: boolean;
}

export const LabeledLink: FC<LabeledLinkProps> = ({ label, href }) => (
  <Link href={href}>{label}</Link>
);
