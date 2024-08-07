import { ComboBox } from '../../../components/03_organisms/ComboBox';
import mockUsersData from '../../../mocks/data/sample-options-user.json';

type Props = {
  title: string;
};

export default function PageTemplateComboBox({ title = '' }: Props) {
  return (
    <div className="flex h-[500px] flex-col gap-4">
      <h1 className="my-4 text-[20px]">{title}</h1>
      <ComboBox
        captionText="Solo podrás elegir a Victor para continuar."
        id="ControlComboBox-Users"
        labelText="Elige un usuario"
        name="combobox-users"
        options={mockUsersData}
      />
    </div>
  );
}
