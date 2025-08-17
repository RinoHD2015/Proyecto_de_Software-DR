import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SalesChart } from "@/components/sales-chart";
import { TaskList } from "@/components/task-list";
import { SidebarTrigger } from "@/components/ui/sidebar";

const HomeFruitLogo = () => (
  <div>
    <h1
      className="text-3xl font-bold"
      style={{ fontFamily: "'Pacifico', cursive", color: "#f78a8a" }}
    >
      HomeFruit
    </h1>
    <p className="text-sm text-gray-500 -mt-1">Pulpa de fruta</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen p-4 sm:p-6 md:p-8">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-4 border-white/50 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border-2 border-white/50 rounded-full animate-pulse delay-1000" />
      </div>

      {/* Encabezado */}
      <header className="flex items-center justify-between mb-12">
        <HomeFruitLogo />
        <SidebarTrigger className="text-gray-700" />
      </header>

      {/* Saludo */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          Bienvenido, John.
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Gráfico */}
        <Card className="lg:col-span-3 bg-white/50 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl">
          <CardContent className="pt-6">
            <SalesChart />
          </CardContent>
        </Card>

        {/* Lista de tareas */}
        <Card className="lg:col-span-2 bg-white/50 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700 font-semibold">
              Pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
