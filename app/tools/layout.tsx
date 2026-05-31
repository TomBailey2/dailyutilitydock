import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Daily Utility Hub',
    default: 'Tools | Daily Utility Hub',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
