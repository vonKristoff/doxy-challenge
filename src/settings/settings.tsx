import type { JSX } from "react";
import type { CallControl } from "../callControlBar";

interface SettingsProps {
  controls: CallControl[];
}

export const Settings = ({ controls }: SettingsProps): JSX.Element => {
  return (
    <section data-settings aria-label="Settings">
      <ul role="list">
        {controls.map(({ id, label, icons, active, onClick }) => (
          <li key={id}>
            <button
              type="button"
              aria-label={label}
              aria-pressed={active}
              onClick={onClick}
            >
              <span aria-hidden="true">{active ? icons[0] : icons[1]}</span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
