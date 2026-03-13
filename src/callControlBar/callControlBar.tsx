import type { JSX, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";

export interface CallControl {
  id: string;
  label: string;
  active: boolean;
  className?: string;
  icons?: [active: ReactNode, inactive: ReactNode];
  onClick?: () => void;
}

interface CallControlBarProps {
  controls: CallControl[];
}

export const CallControlBar = ({
  controls,
}: CallControlBarProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(max-width: 767px)");

    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        el.setAttribute("data-mobile", "");
      } else {
        el.removeAttribute("data-mobile");
      }
    };

    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div ref={ref} data-controls>
      <nav
        ref={nav}
        aria-label="Call controls"
        onMouseEnter={() =>
          nav.current?.style.setProperty("overflow", "visible")
        }
        onMouseLeave={() =>
          nav.current?.style.setProperty("overflow", "hidden")
        }
      >
        <div data-controls-icon aria-hidden="true">
          <Plus color="white" />
        </div>
        <ul role="list">
          {controls.map(({ id, label, icons, active, onClick }) => (
            <li key={id} data-tooltip={label}>
              <button
                data-action={id}
                type="button"
                data-bounce="padding"
                aria-label={label}
                aria-pressed={active}
                onClick={onClick}
              >
                <div data-icon-selector data-active={active}>
                  <span aria-hidden="true">{icons?.[0]}</span>
                  <span aria-hidden="true">{icons?.[1]}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
