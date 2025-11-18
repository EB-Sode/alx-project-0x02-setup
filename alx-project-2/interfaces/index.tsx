export interface CardProps {
  title: string;
  content: string | React.ReactNode;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}