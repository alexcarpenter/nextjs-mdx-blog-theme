import { cx } from "@/lib/utils";
import { Prose } from "./Prose";

interface NoteProps {
  emoji?: string;
  children: React.ReactNode;
}

export const Note: React.FC<NoteProps> = ({ emoji, children }) => {
  return (
    <aside
      className={cx(
        "p-4 flex gap-4 border rounded-md",
        "bg-gray-100",
        "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      {emoji ? <span>{emoji}</span> : null}
      <Prose>{children}</Prose>
    </aside>
  );
};
