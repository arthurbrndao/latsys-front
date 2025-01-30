import { Container } from "react-bootstrap";

import Menu from "@/components/Menu";

export default function Home() {
  return (
    <Container>
      <h2>Bem-vindo, Flávio!</h2>
      <p>O que que deseja fazer hoje?</p>

      <Menu />
    </Container>
  );
}
