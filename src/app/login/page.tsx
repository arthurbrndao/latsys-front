"use client";

import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { useRouter } from "next/navigation";
import { ArrowRightCircleIcon } from "./styles";
import { Spinner } from "react-bootstrap";

function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Here you would typically handle the login logic, such as sending a request to your backend API
    console.log("Email:", email);
    console.log("Password:", password);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 3000);
  }

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-secondary text-center fs-4 mb-2">
            Bem-vindo(a)!
          </h2>
          <h3 className="text-secondary text-center fs-6 mb-4">
            Faça login para continuar.
          </h3>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-2">
                  <Form.Control
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-4">
                  {isLoading ? (
                    <Spinner animation="grow" size="sm" />
                  ) : (
                    <ArrowRightCircleIcon className="bi-arrow-right-circle" />
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
