
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
// Minimal demo showing text so user can verify; full content will be heavy.
export default function App(){
  const [count,setCount]=useState(0);
  return (<div className="p-10">
    <h1 className="text-3xl font-bold">Facturas V7.2 – Next</h1>
    <p className="mt-2 text-slate-600">Proyecto base con Next.js + Tailwind listo para Vercel.</p>
    <button className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-white" onClick={()=>setCount(count+1)}>Test {count}</button>
  </div>);
}
