import clsx from 'clsx';
import React, { ReactChild, useCallback, useEffect, useRef, useState } from 'react';
import { useStyles } from './styles';

type PageProps = {
    children: ReactChild,
    className?: any,
}

const Page : React.FC<PageProps> = ({ children, className }) => {
    const classes = useStyles();

    const [ pageHeight, setPageHeight ] = useState<number>(window.innerHeight);
    const page = useRef<any | null>(null);

    const resizePageHandler = useCallback(() => {
        if (!page) return; 

        window.addEventListener('resize', () => {
            setPageHeight(window.innerHeight);
        });
    }, [ page ]);

    useEffect(resizePageHandler, [ resizePageHandler ]);

    return (
        <section
            ref={page}
            className={clsx(classes.container, className)}
            style={{ minHeight: 750, height: pageHeight }}
        >
            { children }
        </section>
    )
};

export default Page; 