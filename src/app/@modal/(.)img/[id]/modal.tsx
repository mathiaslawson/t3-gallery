'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
  
      <dialog ref={dialogRef} className="w-screen h-screen bg-zinc-900/50 p-0 m-0 absolute top-0 bottom-0 left-0 right-0" onClose={onDismiss}>
        {children}
        {/* <button onClick={onDismiss} className="close-button" /> */}
      </dialog>
    
,
    document.getElementById('modal-root')!
  );
}