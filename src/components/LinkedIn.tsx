import Link from "next/link";

export function LinkedInButton({ url }: { url: string }) {
    return (
        <Link href={url} target='_blank'>
            <LinkedInIcon />
        </Link>
    )
}

export function LinkedInIcon() {
    return (
        <div className='bg-blue-700 dark:bg-cyan-400 rounded-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue-700 dark:stroke-cyan-900 tabler-icon tabler-icon-brand-github">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
            </svg>
        </div>
    )
}