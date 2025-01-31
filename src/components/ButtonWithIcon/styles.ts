import { theme } from "@/theme";
import styled from "styled-components";
import { Position } from ".";

interface IconProps {
  position: Position;
}

export const Icon = styled.i<IconProps>`
  margin-left: ${(props) =>
    props.position === "right" && theme.spacing.inlineIconMargin};
  margin-right: ${(props) =>
    props.position === "left" && theme.spacing.inlineIconMargin};
`;
