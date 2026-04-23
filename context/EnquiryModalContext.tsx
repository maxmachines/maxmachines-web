"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type EnquiryModalContextType = {
  isOpen: boolean;
  machineName: string;
  openEnquiryModal: (machineName?: string) => void;
  closeEnquiryModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextType | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [machineName, setMachineName] = useState("");

  function openEnquiryModal(name?: string) {
    setMachineName(name ?? "");
    setIsOpen(true);
  }

  function closeEnquiryModal() {
    setIsOpen(false);
  }

  return (
    <EnquiryModalContext.Provider value={{ isOpen, machineName, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  return ctx;
}
