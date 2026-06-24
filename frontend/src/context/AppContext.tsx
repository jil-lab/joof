import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextValue {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  newsletterStatus: string | null;
  setNewsletterStatus: (status: string | null) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  const value: AppContextValue = {
    mobileMenuOpen,
    setMobileMenuOpen,
    newsletterStatus,
    setNewsletterStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
