"use client";

import { Button, Container, Form, InputGroup, Row, Col } from "react-bootstrap";
import ReturnIcon from "@/components/ReturnIcon";
import { useFormik } from "formik";

interface ProductSearchFormValues {
  productCode: string;
  productDescription: string;
}

export default function ProdutosPage() {
  async function searchProductByCode(values: ProductSearchFormValues) {
    console.log(values);
    if (values.productCode === "000") {
      await formik.setFieldValue("productDescription", "");
    } else {
      await formik.setFieldValue(
        "productDescription",
        "MANTEIGA AMARALINA 200G"
      );
    }
  }

  const formik = useFormik({
    initialValues: {
      productCode: "",
      productDescription: "",
    },
    onSubmit: (values) => searchProductByCode(values),
  });
  const isSubpage = !(window.location.href === "/");

  return (
    <Container>
      {isSubpage && <ReturnIcon path="/" />}
      <h2 className="fs-5 d-inline">Lançamento de Produtos</h2>

      <Container fluid className="mt-2">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Row className="d-flex flex-wrap">
              <Col lg={4}>
                <InputGroup className="mt-2">
                  <Form.Control
                    autoFocus
                    aria-label="Código do produto"
                    aria-describedby="product-code"
                    type="text"
                    name="productCode"
                    className="mr-4"
                    value={formik.values.productCode}
                    onChange={formik.handleChange}
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
                  name="productDescription"
                  value={formik.values.productDescription}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
}
