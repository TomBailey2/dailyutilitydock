import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Daily Utility Dock',
    default: 'Tools | Daily Utility Dock',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
