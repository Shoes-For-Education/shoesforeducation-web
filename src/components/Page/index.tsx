import clsx from 'clsx';
import React, { ReactChild, useCallback, useEffect, useRef } from 'react';
import { useStyles } from './styles';

type PageProps = {
    children: ReactChild,
    className?: any,
}

const Page : React.FC<PageProps> = ({ children, className }) => {
    const classes = useStyles();

    const page = useRef<any | null>(null);

    const resizePageHandler = useCallback(() => {
        if (!page) return; 

        document.body.addEventListener('resize', () => {
            page.current.style.height = window.innerHeight;  
        });
    }, [ page ]);

    useEffect(resizePageHandler, [ resizePageHandler ]);

    return (
        <section
            ref={page}
            className={clsx(classes.container, className)}
            style={{ minHeight: window.innerHeight }}
        >
            { children }
        </section>
    )
};

export default Page; 