import localFont from 'next/font/local';

export const Lora = localFont({
  src: [
    {
      path: '../app/fonts/lora/Lora-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/lora/Lora-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/lora/Lora-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/lora/Lora-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lora',
});

export const Varela = localFont({
  src: '../app/fonts/varela/Varela-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-varela',
});
