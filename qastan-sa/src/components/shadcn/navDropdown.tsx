"use client"
import { useLocation } from "react-router-dom";
import * as React from "react"
import { cn } from "../../utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../shadcn/navMenu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Plannen via MountQ",
    href: "/Oplossingen/Plannen",
    description:
      "Intelligente planningsystemen (AI-based) en werkplekplanning die het verschil maken.",
  },
  {
    title: "Automatiseren via Cirta ERP",
    href: "/Oplossingen/Automatiseren",
    description:
      "Centraliseer alle logistieke, administratieve en financiële processen in één enkele applicatie.",
  },
  {
    title: "Digitaliseren via FITdoc DMS",
    href: "/Oplossingen/Digitaliseren",
    description:
      "Van kleine tot grote digitaliserings- en scanoplissingen. Op maat of gewoon standaard.",
  },
  {
    title: "IT Management, netwerk & infrastructuur ",
    href: "/Oplossingen/IT",
    description: "Eén aanspreekpunt voor uw volledig IT-gebeuren. Flexibel, snel en transparantie zonder poespas.",
  },
]

export function NavigationMenuDemo() {
    const location = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><a href="/Oplossingen" className="text-base">Oplossingen</a></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
