import {useEffect} from 'react'

export default function useImageLoad (fn) {
    useEffect(() => {
        window.addEventListener('load', fn)
        return () => window.removeEventListener('load', fn)
    }, [fn])
}

