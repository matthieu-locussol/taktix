import React from 'react';

export type LayoutProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Layout = ({ ...props }: LayoutProps): JSX.Element => {
   return <div {...props} />;
};
