import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const sizeClassnames = {
   big: 'py-2 px-6 text-sm rounded-lg',
   small: 'px-4 py-1.5 text-sm rounded-md',
   tiny: 'px-1 text-sm rounded-5',
};

const colorClassnames = {
   primary: 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white uppercase',
   secondary: 'bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white uppercase',
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
   size?: keyof typeof sizeClassnames;
   variant?: keyof typeof colorClassnames;
};

export const Button = ({ size = 'small', variant: color = 'primary', ...props }: ButtonProps): JSX.Element => {
   return <button type="button" className={`${sizeClassnames[size]} ${colorClassnames[color]}`} {...props} />;
};
