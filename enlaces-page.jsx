import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

// --------------------
// Componente IntegrationCard (sin tipado TS)
// --------------------
const IntegrationCard = ({
  name,
  description,
  logoContent,
  cardClassName = "bg-gray-200",
}) => (
  <div className="text-left">
    <div
      className={`aspect-[4/3] rounded-2xl flex items-center justify-center p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl ${cardClassName}`}
    >
      {logoContent}
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

// --------------------
// Página principal
// --------------------
export default function EnlacesPage() {
  const accountingSystems = [
    {
      name: "QuickBooks",
      description: "Conecta con QuickBooks para gestionar tus finanzas sin problemas.",
      logoContent: <span className="text-5xl font-bold text-white/90">Qu</span>,
      cardClassName: "bg-teal-600",
    },
    {
      name: "Xero",
      description: "Integra con Xero para una contabilidad y reportes eficientes.",
      logoContent: <span className="text-6xl font-thin tracking-wider text-white/90">xero</span>,
      cardClassName: "bg-slate-500",
    },
    {
      name: "FreshBooks",
      description: "Sincroniza tus datos con FreshBooks para una contabilidad simplificada.",
      logoContent: <span className="text-4xl font-semibold text-white/90">FreshBooks</span>,
      cardClassName: "bg-green-700",
    },
  ];

  const ecommercePlatforms = [
    {
      name: "Shopify",
      description: "Conecta tu tienda de Shopify para sincronizar productos y pedidos.",
      logoContent: <span className="text-5xl font-bold text-white/90">Shopify</span>,
      cardClassName: "bg-cyan-600",
    },
    {
      name: "WooCommerce",
      description: "Integra tu sitio de WooCommerce para gestionar tu e-commerce.",
      logoContent: <span className="text-4xl font-bold text-white/90">WooCommerce</span>,
      cardClassName: "bg-teal-500",
    },
    {
      name: "Etsy",
      description: "Sincroniza con tu tienda de Etsy para unificar tus ventas.",
      logoContent: <span className="text-6xl font-serif text-orange-900/80">etsy</span>,
      cardClassName: "bg-orange-300",
    },
  ];

  return (
    <div className="relative min-h-screen p-4 sm:p-6 md:p-8">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between mb-12 relative z-10">
        <div>
          <h1
            className="text-4xl font-bold text-gray-800"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Enlaces
          </h1>
          <p className="text-gray-500 mt-2">
            Conecta HomeFruit con tus sistemas y plataformas para optimizar tus operaciones.
          </p>
        </div>
        <SidebarTrigger className="text-gray-700" />
      </header>

      {/* Contenido principal */}
      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Sistemas de Contabilidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {accountingSystems.map((system) => (
              <IntegrationCard key={system.name} {...system} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Plataformas de E-commerce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {ecommercePlatforms.map((platform) => (
              <IntegrationCard key={platform.name} {...platform} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
