import React from "react";
export function Button({ label="加入購物車", size="md", variant="primary", state="default", onClick }) {
  const paddings = { sm:"6px 10px", md:"10px 16px", lg:"12px 20px" };
  const fontSize = { sm:"14px", md:"16px", lg:"16px" };
  const isDisabled = state==="disabled" || state==="loading";
  const bg = variant==="primary" ? "var(--color-primary)" : "var(--color-neutral-900)";
  const opacity = state==="disabled" ? 0.5 : 1;
  return (
    <button
      disabled={isDisabled}
      style={{
        padding: paddings[size], fontSize: fontSize[size],
        borderRadius:"var(--radius-8)", background:bg, color:"#fff",
        border:"none", cursor: isDisabled ? "not-allowed" : "pointer",
        opacity, fontFamily:"var(--font-sans)"
      }}
      onClick={onClick}
    >
      {state==="loading" ? "載入中…" : label}
    </button>
  );
}
