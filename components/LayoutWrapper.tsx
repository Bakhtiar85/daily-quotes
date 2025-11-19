"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    if (isAdminPage) {
        return <>{children}</>;
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}