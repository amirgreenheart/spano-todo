
'use client'
import * as React from 'react';
import Link from 'next/link';
import { FC, ReactNode } from "react";
import { TextField } from "@mui/material";

export type ButtonProps = {
    id: string,
    fullWidth: boolean,
    label: string,
    type: string,
    shrink?: boolean,
    textFieldChange?: (val: any) => void,
    value?: string | ReactNode
};

const UiTextField: FC<ButtonProps> = (props) => {
    const {
        id,
        label,
        fullWidth,
        type,
        value,
        shrink,
        textFieldChange,
    } = props;

    return (
        <TextField
            onChange={(e) => {
                let value: any = e.target.value;
                if (typeof textFieldChange === "function") textFieldChange(value);
            }}
            value={value}
            id={id}
            label={label}
            type={type}
            fullWidth={fullWidth}
            InputLabelProps={{
                shrink: shrink ? true : false,
            }}
        />
    );
};

export default UiTextField;