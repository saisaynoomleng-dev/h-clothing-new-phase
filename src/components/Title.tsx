import { TitleProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Title = ({ children, className, as: Comp = 'h2' }: TitleProps) => {
  return <Comp className={clsx('text-balance', className)}>{children}</Comp>;
};

export default Title;
