import { Button } from "react-bootstrap";
import { Icon } from "./styles";

interface ButtonWithIconProps {
  title: string;
  position: Position;
  icon: string;
}

export type Position = "left" | "right";

export default function ButtonWithIcon({
  title,
  position,
  icon,
  ...props
}: ButtonWithIconProps) {
  return (
    <Button {...props}>
      {position === "left" && (
        <Icon position={position} className={`bi-${icon}`} />
      )}
      {title}
      {position === "right" && (
        <Icon position={position} className={`bi-${icon}`} />
      )}
    </Button>
  );
}
