// clientHome.tsx (client component)
'use client'

import { useEffect } from "react";
import { updatePrimaryColor } from "@/utils/updatePrimaryColors";

export default function ClientHome() {
  useEffect(() => {
    updatePrimaryColor();
  }, []);

  return null; // Or additional client-side content if needed
}
