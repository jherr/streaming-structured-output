"use client";

import { SquareTerminal, Star } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarContent, SidebarItem } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Vercel-AI",
          url: "/vercel-ai",
          icon: Star,
          description: "Vercel-AI",
        },
        {
          title: "Synchronous Test",
          url: "/synchronous",
          icon: Star,
          description: "Synchronous Test",
        },
        {
          title: "Streaming",
          url: "/streaming",
          icon: Star,
          description: "Streaming",
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarItem>
          <NavMain items={data.navMain} />
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}
