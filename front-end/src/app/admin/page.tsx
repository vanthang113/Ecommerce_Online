"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function AdminPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user?.role !== "admin") {
      router.replace("/admin/login");
    } else {
      router.replace("/admin/dashboard");
    }
  }, [user, router]);

  return null;
}
