import AdminNav from "@/components/AdminNav";
import { Sidebar } from "@/components/sidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-2xl mx-auto flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-muted">
        <AdminNav />
        {children}
      </main>
    </div>
  );
}
