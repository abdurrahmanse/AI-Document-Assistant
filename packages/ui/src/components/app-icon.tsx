export function AppIcon({ letter, gradient }: { letter: string; gradient: string }) {
  return (
    <div
      style={{
        fontSize: 24,
        background: gradient,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "8px",
        fontWeight: 800,
      }}
    >
      {letter}
    </div>
  );
}
