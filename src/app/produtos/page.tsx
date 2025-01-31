"use client";

import { Button, Container, Form, InputGroup, Row, Col } from "react-bootstrap";
import ReturnIcon from "@/components/ReturnIcon";
import { useFormik } from "formik";
import ButtonWithIcon from "@/components/ButtonWithIcon";

interface ProductSearchFormValues {
  codigo: string;
  descricao: string;
}

interface ProductValues extends ProductSearchFormValues {
  dataValidade: Date;
  dataFabricacao: Date;
}

export default function ProdutosPage() {
  async function searchProductByCode(values: ProductSearchFormValues) {
    if (values.codigo === "000") {
      await codigoSearchFormik.setFieldValue("descricao", "");
    } else {
      await codigoSearchFormik.setFieldValue(
        "descricao",
        "MANTEIGA AMARALINA 200G"
      );
    }
  }

  async function createProduct(values: ProductValues) {
    console.log(values);
  }

  const codigoSearchFormik = useFormik({
    initialValues: {
      codigo: "",
      descricao: "",
    },
    onSubmit: (values) => searchProductByCode(values),
  });

  const productFormik = useFormik({
    initialValues: {
      dataFabricacao: "",
      dataValidade: "",
    },
    onSubmit: (values) =>
      createProduct({
        ...values,
        codigo: codigoSearchFormik.values.codigo,
        descricao: codigoSearchFormik.values.descricao,
      }),
  });

  const isSubpage = !(window.location.href === "/");

  return (
    <Container>
      {isSubpage && <ReturnIcon path="/" />}
      <h2 className="fs-5 d-inline">Lançamento de Produtos</h2>

      <Container fluid className="mt-2">
        <Form onSubmit={codigoSearchFormik.handleSubmit}>
          <Form.Group>
            <Row className="d-flex flex-wrap">
              <Col lg={4}>
                <InputGroup className="mt-2">
                  <Form.Control
                    autoFocus
                    aria-label="Código do produto"
                    aria-describedby="product-code"
                    type="text"
                    name="codigo"
                    className="mr-4"
                    value={codigoSearchFormik.values.codigo}
                    onChange={codigoSearchFormik.handleChange}
                  />

                  <Button
                    type="submit"
                    id="product-code"
                    variant="outline-secondary"
                  >
                    Pesquisar
                  </Button>
                </InputGroup>
              </Col>
              <Col>
                <Form.Control
                  className="mt-2"
                  disabled
                  type="text"
                  name="descricao"
                  value={codigoSearchFormik.values.descricao}
                  onChange={codigoSearchFormik.handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>

      <Container className="my-4">Produção ou compra.</Container>

      <Container>
        <Form onSubmit={productFormik.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Data de fabricação</Form.Label>
                <Form.Control
                  type="date"
                  name="dataFabricacao"
                  value={productFormik.values.dataFabricacao}
                  onChange={productFormik.handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Data de validade</Form.Label>
                <Form.Control
                  type="date"
                  name="dataValidade"
                  value={productFormik.values.dataValidade}
                  onChange={productFormik.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4 d-flex flex-row-reverse">
            <Col lg={4} md={12} className="text-end">
              <ButtonWithIcon
                icon="plus-circle"
                position="left"
                title="Lançar produto"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}
