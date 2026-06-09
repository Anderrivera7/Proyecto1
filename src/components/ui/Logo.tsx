export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2L36 10V24C36 34 28.5 40 20 42C11.5 40 4 34 4 24V10L20 2Z"
        className="fill-blue-600"
      />
      <path
        d="M14 18c0-3 2.2-5 6-5s6 2 6 5c0 3.5-1.8 7-6 10.5C15.8 25 14 21.5 14 18z"
        className="fill-white"
      />
    </svg>
  );
}
