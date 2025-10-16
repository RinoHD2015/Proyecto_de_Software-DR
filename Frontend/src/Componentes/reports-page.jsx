import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ReportsPage() {
  return (
    <div className="relative min-h-screen p-4 sm:p-6 md:p-8">
      {/* Fondos difuminados */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl"></div>
      </div>

      {/* Encabezado */}
      <header className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h1
            className="text-4xl font-bold text-gray-800"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Reportes
          </h1>
          <p className="text-gray-500">Página de reportes en construcción.</p>
        </div>
        <SidebarTrigger className="text-gray-700" />
      </header>

      {/* Contenido */}
      <section className="flex items-center justify-center h-96">
        <h2 className="text-2xl font-semibold text-gray-500">Próximamente...</h2>
      </section>
    </div>
  );
}
