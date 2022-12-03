
'use client'
import * as React from 'react';
import Link from 'next/link';
import { FC, ReactNode } from "react";
import { Button } from "@mui/material";

export type ButtonProps = {
    children?: ReactNode,
    link?: string,
    color?: string
};

const UiButton: FC<ButtonProps> = (props) => {
    const {
        children,
        link,
        color
    } = props;

    return (
        <Link href={link || "/"}>
            <Button sx={{ mb: 3, background: color || '#1976d2' }} variant="contained">
                {children}
            </Button>
        </Link>
    );
};

export default UiButton;