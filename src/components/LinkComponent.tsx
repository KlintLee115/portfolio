import Link from "next/link";

export default function LinkComponent({ href, text, icon }: { href: string, text: string, icon: JSX.Element }) {
    return (
        <Link href={href} className='font-bold py-2 px-4 shadow-linkLightTheme dark:shadow-linkDarkTheme flex items-center gap-1' target='_blank'>
            {text}
            {icon}
        </Link>
    )
}