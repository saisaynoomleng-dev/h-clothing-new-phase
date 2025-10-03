// Bounded
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

// Title
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
};

// Marquee
export type MarqueeProps = {
  imgURL: string;
};
