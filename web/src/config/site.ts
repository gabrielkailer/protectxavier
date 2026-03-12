/**
 * Site-wide metadata and navigation configuration.
 * Single source of truth for site identity and nav links.
 */
export const siteConfig = {
  name: "Protect Xavier Facilite",
  description: "Monitoramento e segurança com tecnologia de ponta para a sua tranquilidade.",
  url: "https://protectxavierfacilite.com",
  email: "adm@protectxavierfacilite.com",
  whatsapp: "https://wa.me/5511962220061",
} as const;

export const navLinks = [
  { name: "Início", href: "/#inicio" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Nossos Clientes", href: "/#clientes" },
  { name: "Quem Somos", href: "/#quem-somos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/#contato" },
] as const;
