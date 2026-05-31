import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Daily Utility Hub uses cookies and similar technologies to improve your experience on our website.',
};

export default function CookieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
