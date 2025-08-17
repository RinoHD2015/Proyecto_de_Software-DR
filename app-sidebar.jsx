"use client"

import {
  Database,
  Link as LinkIcon,
  ClipboardList,
  BarChart2,
  ShieldCheck,
  Settings,
  LogOut,
  Home,
  X,
} from "lucide-react"
import Image from "next/image"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Database, label: "Base de Datos", href: "/database" },
  { icon: LinkIcon, label: "Enlaces", href: "/enlaces" },
  { icon: ClipboardList, label: "Registros", href: "/registros" },
  { icon: BarChart2, label: "Reportes", href: "/reports" },
  { icon: ShieldCheck, label: "Seguridad", href: "#" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar
      side="right"
      variant="floating"
      collapsible="offcanvas"
      className="bg-gradient-to-b from-cyan-400 to-green-400 text-white rounded-l-3xl shadow-2xl border-none w-[280px] group"
    >
      {/* Botón cerrar */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
        onClick={toggleSidebar}
      >
        <X className="h-7 w-7" />
        <span className="sr-only">Cerrar menú</span>
      </Button>

      {/* Header con avatar */}
      <SidebarHeader className="items-center p-8 flex flex-col">
        <div className="relative mb-4">
          <div className="absolute -inset-1.5 border-2 border-dashed border-white/50 rounded-full animate-spin-slow"></div>
          <Image
            src="https://placehold.co/128x128.png"
            alt="User Avatar"
            width={128}
            height={128}
            className="relative rounded-full border-4 border-white/80 shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white">John Doe</h2>
      </SidebarHeader>

      {/* Menú de navegación */}
      <SidebarContent className="px-6">
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="bg-transparent hover:bg-white/20 text-lg justify-start data-[active=true]:bg-white/20"
              >
                <NextLink href={item.href} className="gap-4">
                  <item.icon className="h-7 w-7" />
                  <span>{item.label}</span>
                </NextLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer con ajustes y logout */}
      <SidebarFooter className="p-6">
        <div className="flex items-center justify-between text-white">
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <Settings className="h-7 w-7 transition-transform hover:rotate-45" />
          </Button>
          <Button variant="ghost" asChild className="hover:bg-white/20 text-base">
            <NextLink
              href="/login"
              className="flex items-center space-x-2 group/logout"
            >
              <span>Cerrar Sesión</span>
              <LogOut className="h-7 w-7 transition-transform group-hover/logout:translate-x-1" />
            </NextLink>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
