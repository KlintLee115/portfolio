"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

type TabOptions = 'projects' | 'articles'

export default function Tabs() {

    const tabs: TabOptions[] = ['projects', 'articles']
    const pathname = usePathname()

    const getClassName = (currentTab: TabOptions) => 
        `cursor-pointer text-3xl mb-10 ${pathname.endsWith(currentTab) ? "underline underline-offset-8" : ""}`;

    return (
        <section className="flex gap-20 mt-20">
            {tabs.map((t) => (
                <Link key={t} href={`./${t}`} className={getClassName(t)}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </Link>
            ))}
        </section>
    )
}