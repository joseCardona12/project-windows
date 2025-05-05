import { useRef } from "react";
import { IconPlay, IconStop } from "../../../public/icons";

interface IPlayerMusicProps {
  url: string;
  name: string;
}
export default function PlayerMusic({
  url,
  name,
}: IPlayerMusicProps): React.ReactNode {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // opcional: reinicia al inicio
    }
  };

  return (
    <div className="flex gap-2 justify-center items-center border border-transparent hover:border-[var(--border-gray)] rounded-[var(--border-radius-min)] hover:bg-[var(--color-gray-light-03)] p-2">
      <p>{name}</p>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer border border-transparent hover:border-[var(--border-gray)] p-1 rounded-[var(--border-radius-min)]"
          onClick={playAudio}
        >
          <IconPlay className="text-[.8rem]" />
        </button>
        <button
          className="cursor-pointer border border-transparent hover:border-[var(--border-gray)] p-1 rounded-[var(--border-radius-min)]"
          onClick={stopAudio}
        >
          <IconStop className="text-[.8rem]" />
        </button>
        <audio ref={audioRef} src={url} />
      </div>
    </div>
  );
}
