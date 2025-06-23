'use client';

import React from 'react';
import '../globals.css';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add any context providers or layout wrappers here */}
      {children}
    </>
  );
}
