import { StringInputProps } from 'sanity';

export function SKUInput(props: StringInputProps) {
  const generateSKU = () => {
    const sku = Math.random().toString(8).substring(2, 8).toUpperCase();
    props.onChange({ type: 'set', value: sku });
  };

  return <div></div>;
}
