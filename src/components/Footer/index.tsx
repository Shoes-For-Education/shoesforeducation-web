import { Typography } from "@mui/material";
import clsx from "clsx";
import React, { MouseEvent } from "react";
import DonatePopUp from "../DonatePopUp";

interface FooterHeaderProps {
    children: React.ReactNode;
}

const FooterHeader : React.FC<FooterHeaderProps> = ({ children }) => {
    return (
        <li className="list-none uppercase px-2 text-white my-4 font-bold">
            { children }
        </li>
    )
}

interface FooterItemProps extends React.HTMLProps<HTMLAnchorElement> {
    href?: string; 
    children: React.ReactNode;
}

const FooterItem : React.FC<FooterItemProps> = ({ href = "/", children, ...props }) => {
    return (
        <li className={clsx("list-none w-min hover:bg-black transition-all rounded-md px-2 hover:bg-opacity-20 p-1 text-medium-grey my-2 font-medium")}>
            <a
                href={href}
                className="flex whitespace-nowrap no-underline text-[rgba(255,255,255,0.35)] items-center"
                { ...props }
            >
                { children }
            </a>
        </li>
    );
}

const Footer = () => {
    const [ donateModalOpen, setDonateModalOpen ] = React.useState(false);
    const handleOpenDonateModal = (e:MouseEvent) => {
        e.preventDefault();
        setDonateModalOpen(true);
    }

    return (
        <>
        <DonatePopUp visible={donateModalOpen} handleClose={() => { setDonateModalOpen(!donateModalOpen); }} />
        <footer>
            <div 
                className={clsx(
                    "w-full min-h-[100px] pb-3 bg-complementary-grey border-b-[rgba(255,255,255,0.1)] border-b-2 border-solid grid justify-items-center grid-cols-2 md:grid-cols-4",
                    "[&>ul]:flex [&>ul]:flex-col md:[&>ul]:items-start [&>ul]:items-center"
                )}>
                <ul>
                    <FooterHeader>sitemap</FooterHeader>
                    <FooterItem>Home</FooterItem>
                    <FooterItem href="/about">About</FooterItem>
                </ul>
                <ul>
                    <FooterHeader>Resources</FooterHeader>
                    <FooterItem href="/requests">Shoe Requests</FooterItem>
                    <FooterItem href="/books">Book Choices</FooterItem>
                </ul>
                <ul>
                    <FooterHeader>Support Us</FooterHeader>
                    <FooterItem onClick={handleOpenDonateModal}>Donate</FooterItem>
                </ul>
                <ul>
                    <FooterHeader>Contact</FooterHeader>
                    <FooterItem target="_blank" href="mailto:contact@shoesforeducation.org">Email</FooterItem>
                </ul>
            </div>
            <div className="w-full flex-col items-center p-4 space-y-2 flex justify-center bg-complementary-grey">
                <Typography className="text-[rgba(255,255,255,0.35)] [&>a]:text-[rgba(255,255,255,0.35)]">
                    Developed by 
                    &nbsp;<a href="https://mahitm.com/" target="_blank">mahitm.com</a>
                </Typography>
                <Typography className="text-white !text-sm md:!text-base">
                    ©2025 Shoes For Education 501(c)(3) Non-Profit.
                </Typography>
            </div>
        </footer>
        </>
    )
}

export default Footer;