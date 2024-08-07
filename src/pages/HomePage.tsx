import { Caption } from '../components/01_atoms/Caption';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-pink-300 underline">Hello world!</h1>
      <Caption text="Solo podrás elegir a Victor para continuar." />
    </main>
  );
}
