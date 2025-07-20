import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <h2>Pantalla de ejemplo</h2>
        </header>
        {/* Aquí se carga el iframe con la aplicación de trame (ver proxy en next.config.ts) */}
        <iframe src="/trame/index.html" width="100%" height="100%" />
      </SidebarInset>
    </SidebarProvider>
  )
}
