import { Button } from "react-bootstrap";

interface MenuOption {
  title: string;
  route: string;
  enabled: boolean;
}

export default function Menu() {
  const menuOptions: MenuOption[] = [
    {
      title: "Lançamento de produtos",
      route: "/produtos",
      enabled: true,
    },
    {
      title: "Lançamento de pedidos",
      route: "/produtos",
      enabled: false,
    },
    {
      title: "Gerar relatórios",
      route: "/produtos",
      enabled: false,
    },
  ];

  return (
    <>
      {menuOptions.map((option) => (
        <Button
          as="a"
          key={option.title}
          href={option.route}
          disabled={!option.enabled}
          className="d-flex my-2"
        >
          {option.title}
        </Button>
      ))}
    </>
  );
}
