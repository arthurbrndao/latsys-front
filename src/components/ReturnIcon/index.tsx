import { ReturnIconContainer } from "./styles";

interface ReturnIconProps {
  path: string;
}

export default function ReturnIcon({ path }: ReturnIconProps) {
  return (
    <ReturnIconContainer
      className="bi-arrow-left-circle fs-4"
      as="a"
      href={path}
    />
  );
}
