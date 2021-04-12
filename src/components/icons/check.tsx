interface CheckmarkProps {
  className: string;
}

export default function CheckMark({ className = "" }: CheckmarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.27594 11.0205L1.87177 7.6164L0 9.48817L4.49225 13.9804L4.4974 13.9752L5.31751 14.7953L18 2.11273L16.0919 0.20459L5.27594 11.0205Z"
        fill="currentColor"
      />
    </svg>
  );
}
