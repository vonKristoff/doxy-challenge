import type { CallControl } from "../callControlBar";

export const videoConfig: CallControl[] = [
  {
    id: "noise-cancellation",
    label: "Noise cancellation",
    active: true,
  },
  {
    id: "hd-video",
    label: "HD video",
    active: true,
  },
  {
    id: "mirror-video",
    label: "Mirror my video",
    active: false,
  },
  {
    id: "background-blur",
    label: "Background blur",
    active: false,
  },
  {
    id: "virtual-background",
    label: "Virtual background",
    active: false,
  },
];
