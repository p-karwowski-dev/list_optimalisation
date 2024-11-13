import { useEffect, useState } from "react";

export function useObserver() {
    const [observer, setObserver] = useState<null | IntersectionObserver>(null)

    useEffect(() => {
        setObserver(new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const node = entry.target
                    const src = node.getAttribute('data-SpriteURL')
                    const img = node.querySelectorAll('img')
                    if(src && !img.length) {
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = 'Sprite';
                        img.loading = 'lazy';
                        node.appendChild(img);
                    }
                }
            })
        }))
    }, [])

    return {observer}
}