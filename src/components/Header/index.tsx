"use client";

import { Col, Container, Row } from "react-bootstrap";
import { HeaderContainer, HeaderTitle, LogoutText } from "./styles";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderContainer className="p-2 mb-4 bg-secondary">
      <Container>
        <Row>
          <Col>
            <HeaderTitle className="fs-4 mb-0 text-white">Latsys</HeaderTitle>
          </Col>
          {pathname !== "/login" && (
            <Col xs={2} className="text-end">
              <LogoutText href="/login" className="text-white">
                sair
              </LogoutText>
            </Col>
          )}
        </Row>
      </Container>
    </HeaderContainer>
  );
}
