import { useEffect, useState } from "react"

import { usePathname, useSearchParams } from 'next/navigation'


export function useReadingProgressBar() {
    const [complition, setComplition] = useState(0)

    // урл
    const pathname = usePathname();

    // параметры урла
    const searchParams = useSearchParams();
    // console.log(searchParams.get('search'));
    

    useEffect(() => {
        const updateScrollComplition = () => {
            const actualPosition = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const percentage = (actualPosition / scrollHeight) * 100;
            setComplition(percentage);

            // console.log('ff', pathname, searchParams.get('search'));
        }

        window.addEventListener('scroll', updateScrollComplition)

        return () => {
            window.removeEventListener('scroll', updateScrollComplition)
        }
    }, [pathname, searchParams])

    return complition;
}