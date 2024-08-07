import { Caption } from '../components/01_atoms/Caption';
import { ComboBox } from '../components/03_organisms/ComboBox';
import mockUsersData from '../mocks/data/sample-options-user.json';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-pink-300 underline">Hello world!</h1>
      <Caption text="Solo podrás elegir a Victor para continuar." />
      <ComboBox
        captionText="Solo podrás elegir a Victor para continuar."
        id="ControlComboBox-Users"
        labelText="Elige un usuario"
        name="combobox-users"
        options={mockUsersData}
      />
    </main>
  );
}
