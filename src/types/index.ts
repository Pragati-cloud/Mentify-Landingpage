export interface AIBuddy {
  id: string;
  title: string;
  description: {
    compact: string;
    full: string;
  };
  image: string;
  price: string;
  discount?: string;
  isMainBot?: boolean;
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  description: {
    compact: string;
    full: string;
  };
  icon: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}