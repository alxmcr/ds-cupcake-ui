type Props = {
  text: string;
};

export default function Caption({ text = '' }: Props) {
  return <p className="text-xs font-normal leading-4 text-gray-500">{text}</p>;
}
