export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="font-mono text-xs tracking-[0.2em] text-accent-blue">
        {label}
      </span>
    </div>
  );
}
