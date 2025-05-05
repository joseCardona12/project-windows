interface IContentLetterProps {
  letter: string;
}
export default function ContentLetter({
  letter,
}: IContentLetterProps): React.ReactNode {
  return (
    <div className="bg-[var(--color-black)] w-full h-full text-white rounded-full flex justify-center items-center">
      <p className="font-medium">{letter}</p>
    </div>
  );
}
