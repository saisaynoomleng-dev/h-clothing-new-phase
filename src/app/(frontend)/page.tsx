import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Bounded className="add-padding">
      <Button>CLick me</Button>
      <h1>Hello Next.js!</h1>
    </Bounded>
  );
}
