import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { cn } from "../../utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../shadcn/navMenu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Digitaliseren via FITdoc DMS",
    href: "/Oplossingen/Digitaliseren",
    description: "Van kleine tot grote digitaliserings- en scanoplissingen. Op maat of gewoon standaard.",
  },
  {
    title: "Automatiseren via Cirta ERP",
    href: "/Oplossingen/Automatiseren",
    description: "Centraliseer alle logistieke, administratieve en financiële processen in één enkele applicatie.",
  },
  {
    title: "Plannen via MountQ",
    href: "/Oplossingen/Plannen",
    description: "Intelligente planningsystemen (AI-based) en werkplekplanning die het verschil maken.",
  },
  {
    title: "IT Management, netwerk & infrastructuur ",
    href: "/Oplossingen/IT",
    description: "Eén aanspreekpunt voor uw volledig IT-gebeuren. Flexibel, snel en transparantie zonder poespas.",
  },
];

export function NavigationMenuDemo() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Set the active page based on the current location
    const path = location.pathname;
    setActivePage(path);
  }, [location]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a href="/Oplossingen" className={`text-base m-2 flex items-center ${activePage.startsWith("/Oplossingen") ? "text-orange-500" : ""}`} onClick={handleMenuToggle}>
              Oplossingen
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white grid w-[300] gap-3 p-4 sm:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="hover:bg-orange-100">
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors", className)} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";