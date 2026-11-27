const buttonBase =
  "group inline-flex min-h-11 items-center justify-between gap-6 rounded-full px-5 py-2.5 text-sm transition-colors cursor-pointer sm:min-w-52";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={[
        buttonBase,
        "border border-line bg-transparent text-ink hover:border-accent/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-sans font-normal">{children}</span>

      <svg
        className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </button>
  );
};

export const ButtonSecundario = ({ children, className = "", ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={[
        buttonBase,
        "bg-accent text-page hover:bg-accent/90",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-sans font-medium">{children}</span>

      <svg
        className="h-4 w-4 shrink-0 text-page transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 7 17 17 7 17" />
      </svg>
    </button>
  );
};

export default Button;
