'use client'
import { cn } from "@/lib/utils"
import { forwardRef } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/lib/components/ui/navigation-menu"
import Link from "next/link";

type SubItem = {
  title: string;
  description: string;
  href: string
}
type MenuItem = {
  title: string;
  subItems: SubItem[]
}
type IndexItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  href: string
  subItems: SubItem[]
}
type ExtraItem = {
  title: string;
  href: string;
}
type PropsType = {
  indexItem?: IndexItem
  items: MenuItem[]
  extraItems?: ExtraItem[]
}


export function NavigationMenuDemo({ indexItem, items, extraItems }: PropsType) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {indexItem && <NavigationMenuItem>
          <NavigationMenuTrigger>{indexItem.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={indexItem.href}
                  >
                    {/* {indexItem.icon} */}
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium text-primary-700">
                      {indexItem.subtitle}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {indexItem.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {indexItem.subItems.map(({ title, href, description }, index) => (
                <ListItem key={index} href={href} title={title}>{description}</ListItem>
              ))
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>}

        {items.map(({ title, subItems }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {subItems.map((subItem, index) => (
                  <ListItem
                    key={index}
                    title={subItem.title}
                    href={subItem.href}
                  >
                    {subItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>

          </NavigationMenuItem>
        ))}

        {extraItems && extraItems.map(({href}, index) => (
          <NavigationMenuItem key={index}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<React.ElementRef<"a">,  React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground opacity-60">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"