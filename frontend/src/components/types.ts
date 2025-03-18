export interface EventItem {
  date: string;
  title: string;
  time: string;
  location: string;
}

export interface EventSectionProps {
  title: string;
  subtitle?: string;
  events: EventItem[];
}

export interface EventItemProps {
  date: string;
  title: string;
  time: string;
  location: string;
}

export interface BishopsThoughtProps {
  message: string;
}

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}
