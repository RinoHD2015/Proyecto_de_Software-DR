import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const roles = [
  { name: "Administrador", description: "Rol con todos los permisos", permissions: "Todos" },
  { name: "Editor", description: "Rol para editar contenido", permissions: "Editar" },
  { name: "Visualizador", description: "Rol para ver contenido", permissions: "Ver" },
];

export default function RegistrosPage() {
  return (
    <div className="relative min-h-screen p-4 sm:p-6 md:p-8">
      {/* Fondos difuminados decorativos */}
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
            Roles
          </h1>
          <p className="text-gray-500">Gestiona los roles y permisos de los usuarios.</p>
        </div>
        <SidebarTrigger className="text-gray-700" />
      </header>

      {/* Tabla de roles */}
      <section>
        <Card className="bg-white/50 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b-white/30">
                  <TableHead className="text-gray-500 font-semibold px-6 py-4">Nombre</TableHead>
                  <TableHead className="text-gray-500 font-semibold px-6 py-4">Descripción</TableHead>
                  <TableHead className="text-gray-500 font-semibold px-6 py-4">Permisos</TableHead>
                  <TableHead className="text-gray-500 font-semibold px-6 py-4 text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role, index) => (
                  <TableRow
                    key={role.name}
                    className={index === roles.length - 1 ? "border-none" : "border-b-white/30"}
                  >
                    <TableCell className="font-medium text-gray-800 px-6 py-4">
                      {role.name}
                    </TableCell>
                    <TableCell className="text-gray-600 px-6 py-4">
                      {role.description}
                    </TableCell>
                    <TableCell className="text-gray-600 px-6 py-4">
                      {role.permissions}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <Button
                        variant="link"
                        className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold"
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
