import PlayerMusic from "@/ui/atoms/PlayerMusic";

export default function MusicSection(): React.ReactNode {
  return (
    <section className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-2 w-full">
      <div className="flex gap-2">
        <PlayerMusic
          url="/music/ensename-olvidar.mp3"
          name="Enseñanme olvidar"
        />
      </div>
    </section>
  );
}
