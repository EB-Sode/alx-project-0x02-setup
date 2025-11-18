export interface CardProps {
  title: string;
  content: string | React.ReactNode;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  content: string;
}
