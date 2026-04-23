"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type EnquiryModalContextType = {
  isOpen: boolean;
  machineName: string;
  defaultMessage: string;
  openEnquiryModal: (machineName?: string, defaultMessage?: string) => void;
  closeEnquiryModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextType | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [machineName, setMachineName] = useState("");
  const [defaultMessage, setDefaultMessage] = useState("");

  function openEnquiryModal(name?: string, message?: string) {
    setMachineName(name ?? "");
    setDefaultMessage(message ?? "");
    setIsOpen(true);
  }

  function closeEnquiryModal() {
    setIsOpen(false);
  }

  return (
    <EnquiryModalContext.Provider value={{ isOpen, machineName, defaultMessage, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  return ctx;
}
