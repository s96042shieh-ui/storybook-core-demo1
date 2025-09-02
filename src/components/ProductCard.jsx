import React from "react";
import { Button } from "./Button";
export function ProductCard({ title, price, image="", hasBadge=false }) {
  return (
    <div style={{
      width:240, border:"1px solid var(--color-neutral-300)", borderRadius:"var(--radius-12)",
      padding:"var(--space-12)", fontFamily:"var(--font-sans)"
    }}>
      <div style={{
        width:"100%", height:160, background:"var(--color-neutral-100)",
        borderRadius:"var(--radius-8)", marginBottom:"var(--space-12)",
        position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        {hasBadge && (
          <span style={{
            position:"absolute", top:8, left:8, background:"var(--color-neutral-900)", color:"#fff",
            padding:"2px 8px", borderRadius:999, fontSize:12
          }}>本週精選</span>
        )}
        {image ? <img src={image} alt="" style={{maxWidth:"90%", maxHeight:"90%", objectFit:"cover"}} /> : "240×160"}
      </div>
      <div style={{color:"var(--color-neutral-900)", fontWeight:600, marginBottom:"var(--space-8)"}}>{title}</div>
      <div style={{color:"var(--color-primary)", fontWeight:700, marginBottom:"var(--space-12)"}}>{price}</div>
      <Button label="加入購物車" size="md" variant="primary" />
    </div>
  );
}
