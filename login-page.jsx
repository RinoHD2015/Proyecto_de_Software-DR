import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldQuestion } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HomeFruitLoginLogo = () => (
  <div className="p-8">
    <h1
      className="text-5xl text-red-500"
      style={{ fontFamily: "'Pacifico', cursive" }}
    >
      HomeFruit
    </h1>
    <p
      className="text-xl text-gray-600 -mt-2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Pulpa de fruta
    </p>
    <p className="text-xs text-yellow-600 ml-1 mt-1 tracking-wider">
      • vive una experiencia saludable •
    </p>
  </div>
);

const Bubble = ({ className, style }) => (
  <div
    className={cn(
      "absolute rounded-full bg-white/10 border border-white/20",
      className
    )}
    style={style}
  />
);

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#E6F4E8] via-[#D9EAF4] to-[#B6E1F2]">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-green-300/90 to-green-300/20"
          style={{
            clipPath: "ellipse(120% 70% at 50% 0%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[20vh] overflow-hidden">
          <div className="absolute -bottom-24 -left-[10%] w-[120%] h-40 bg-cyan-200/50 rounded-[100%]" />
          <div className="absolute -bottom-28 -left-[10%] w-[120%] h-40 bg-blue-300/30 rounded-[100%]" />
        </div>

        {/* Burbujas */}
        <Bubble className="w-40 h-40" style={{ bottom: "5%", left: "10%" }} />
        <Bubble className="w-24 h-24" style={{ bottom: "20%", left: "2%" }} />
        <Bubble className="w-10 h-10" style={{ bottom: "40%", left: "15%" }} />
        <Bubble className="w-16 h-16" style={{ top: "25%", right: "10%" }} />
        <Bubble className="w-8 h-8" style={{ top: "15%", right: "20%" }} />
        <Bubble className="w-32 h-32" style={{ top: "55%", right: "5%" }} />
        <Bubble className="w-5 h-5" style={{ bottom: "15%", right: "45%" }} />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-0 z-20">
        <HomeFruitLoginLogo />
      </div>

      {/* Formulario */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-3xl p-8 pt-6 shadow-2xl">
            <h2
              className="text-3xl font-bold text-center text-green-600 mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Inicia sesión
            </h2>
            <form className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Usuario"
                  className="w-full h-12 pl-4 pr-4 rounded-xl bg-white/90 border-2 border-transparent focus-visible:bg-white focus-visible:border-cyan-400 focus-visible:ring-4 focus-visible:ring-cyan-400/20 transition-all text-base"
                />
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full h-12 pl-4 pr-4 rounded-xl bg-white/90 border-2 border-transparent focus-visible:bg-white focus-visible:border-cyan-400 focus-visible:ring-4 focus-visible:ring-cyan-400/20 transition-all text-base"
                />
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white shadow-lg transform hover:scale-110 transition-transform"
                  size="icon"
                >
                  <ArrowRight className="w-7 h-7" />
                </Button>
              </div>
            </form>
            <p className="mt-8 text-center text-sm">
              <span className="text-gray-600">¿Nuevo aquí? </span>
              <Link
                href="#"
                className="font-semibold text-green-600 hover:underline"
              >
                Crea un usuario
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Botón de ayuda */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 text-gray-700 font-medium">
        <span>¿Necesitas ayuda?</span>
        <div className="bg-blue-500/90 rounded-full p-2 border-2 border-white/60 shadow-lg">
          <ShieldQuestion className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  );
}
