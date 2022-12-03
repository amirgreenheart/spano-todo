import Header from "./header/header";
import React, { FC } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Layout: FC<Props> = (props) => {
    const { children, className } = props;
    return (
        <>
            <Header />
            <div className={className}>{children}</div>
        </>
    );
};

export { Layout };