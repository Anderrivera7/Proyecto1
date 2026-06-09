type WaveDividerProps = {
  flip?: boolean;
  className?: string;
};

export function WaveDivider({ flip = false, className = "text-white" }: WaveDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
        className={`block h-12 w-full sm:h-16 ${className}`}
        aria-hidden="true"
      >
        <path d="M0,32 C360,80 720,0 1080,32 C1260,48 1380,64 1440,48 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}
