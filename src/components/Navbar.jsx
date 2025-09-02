import React from "react";
export function Navbar({ cartCount=0 }) {
  return (
    <div style={{
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"var(--space-12) var(--space-16)",
      borderBottom:"1px solid var(--color-neutral-300)",
      fontFamily:"var(--font-sans)"
    }}>
      <div style={{fontWeight:700, color:"var(--color-neutral-900)"}}>Buty99</div>
      <input placeholder="搜尋…" style={{
        flex:1, maxWidth:420, margin:"0 var(--space-16)", padding:"8px 12px",
        border:"1px solid var(--color-neutral-300)", borderRadius:"var(--radius-8)"
      }}/>
      <div style={{color:"var(--color-neutral-900)"}}>🛒 {cartCount}</div>
    </div>
  );
}
