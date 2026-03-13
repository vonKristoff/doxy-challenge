import type { JSX, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Dialog = ({
  open,
  onClose,
  children,
}: DialogProps): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) return dialog.showModal();
    return dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClose = () => onClose();

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) onClose();
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);

  return (
    <dialog ref={ref} aria-label="Menu">
      {children}
    </dialog>
  );
};
