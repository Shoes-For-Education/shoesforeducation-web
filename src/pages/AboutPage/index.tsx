import React, { ReactChild, useCallback, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import { useStyles } from './styles';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Typography } from '@mui/material';
import Footer from '../../components/Footer';

const Paragraph : React.FC<{ children:string | ReactChild }> = ({ children }) => {
    const { classes } = useStyles();

    const textRef = useRef<HTMLSpanElement | null>(null);

    const bootstrapAnimation = useCallback(() => {
        if (!textRef?.current) return; 

        gsap.fromTo(textRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                scrollTrigger: {
                    trigger: textRef.current,
                }
            } 
        )
    }, [ textRef, gsap ]);

    // useEffect(bootstrapAnimation, [ bootstrapAnimation ]);

    return (
        <Typography ref={textRef} className={classes.text}>
            { children }
        </Typography>
    )
}

const AboutPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    const { classes } = useStyles();

    return (
        <Navbar>
            <>
            <Page>
                <section className={classes.container}>
                    <Typography className={classes.header}>
                        <>
                            <span className={classes.headerHighlight}>About</span> Shoes <span role="img">👞</span> for education
                        </>
                    </Typography>
                    <Typography className={classes.subHeader}>Purpose</Typography>
                    <Paragraph>
                        Shoes for education is meant to empower underprivileged youth with confidence 
                        and abundance mindset. We provide shoes to youth for reading and summarizing 
                        a personal development book so they can challenge the limited belief and 
                        develop abundance mind
                    </Paragraph>
                    <Typography className={classes.subHeader}>People Change People</Typography>
                    <Paragraph>
                        <blockquote>
                            <i>"We become the combined average of the five people we hang around the most"</i> - Jim Rohn
                        </blockquote>
                    </Paragraph>
                    <Paragraph>
                        When it comes to relationships, we are greatly influenced — whether we 
                        like it or not — by those closest to us. It affects our way of thinking,
                        our self-esteem, and our decisions. People we are closely surrounded with
                        have greatest influence and typically set and control the thinking 
                        thermostat of our mind. It is because of them we have limited belief, 
                        abundant mindset or anything in between. More often than not it’s 
                        single biggest factor to influence our decisions and desire to take action.
                        In general life is output of two things decisions we make and actions we take period. 
                    </Paragraph>
                    <Paragraph>
                        While S4E can’t change with whom the youth hangout with, it wants to surround 
                        them with motivating and mind altering books. These books would help cultivate 
                        their minds and encourage  to think the art of possible.
                    </Paragraph>
                    <Paragraph>
                        S4E is striving to set thinking thermostat of these children’s mind on 
                        principles which inevitably leads to success and fulfillment.
                    </Paragraph>
                    <Typography className={classes.subHeader}>Practice</Typography>
                    <Paragraph>
                        <>
                            S4E is reaching out to underprivileged youth and encouraging them to read a 
                            self help or business book 
                            <span role={'img'}>📚</span>
                             and summarize their understanding by writing back
                            on the S4E website or posting a video of their understanding of the book. 
                            Why summarize?  BECAUSE you retain 90% of content if you learn with goal of 
                            telling someone else.
                        </>
                    </Paragraph>
                    <Paragraph>
                        As they submit their understanding of the lessons from the book, 
                        a quality pair of shoes of their size is shipped to their home address. 
                        Every time they wear the shoes it’s intended to remind them that they 
                        earned it via reading the book and hopefully it inspires them to apply 
                        the principles learned in their daily life. They can also brag about it 
                        to their friends hence starting the chain reaction of developing the 
                        abundance mindset.
                    </Paragraph>
                </section>
            </Page>
            <Footer />
            </>
        </Navbar>
    )
}

export default AboutPage;