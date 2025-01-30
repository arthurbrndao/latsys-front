"use client";

import { Container } from "react-bootstrap";
import { HeaderContainer, Title } from "./styles";

export default function Header() {
  return (
    <HeaderContainer className="p-2 mb-2 bg-secondary">
      <Container>
        <Title className="fs-4 mb-0 text-white">Latsys</Title>
      </Container>
    </HeaderContainer>
  );
}
