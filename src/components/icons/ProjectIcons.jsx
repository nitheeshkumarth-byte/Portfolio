export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v12H8l-4 4V4z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function PotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10a8 8 0 0 1 16 0" />
      <path d="M3 10h18" />
      <path d="M3 10v8a1 1 0 0 0 1 1h1" />
      <path d="M20 10v8a1 1 0 0 1-1 1h-1" />
      <path d="M9 19v-6M12 19v-6M15 19v-6" />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.19a1.5 1.5 0 0 0 1.28-.72l.66-1.08A1.5 1.5 0 0 1 9.9 4.5h4.2a1.5 1.5 0 0 1 1.27.7l.66 1.08a1.5 1.5 0 0 0 1.28.72h2.19A1.5 1.5 0 0 1 21 8.5v8A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-8z" />
      <circle cx="12" cy="12" r="3.4" />
      <rect x="7" y="9.5" width="2.4" height="2.4" rx="0.4" strokeDasharray="1 1.4" />
    </svg>
  );
}

export const iconMap = {
  chat: ChatIcon,
  pot: PotIcon,
  camera: CameraIcon,
};
