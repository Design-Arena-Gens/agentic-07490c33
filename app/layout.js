import './globals.css';

export const metadata = {
  title: 'Bridge Pose - Yoga Guide',
  description:
    'Learn how to do Bridge Pose (Setu Bandha Sarvangasana) with a simple animated guide and step-by-step instructions.',
  metadataBase: new URL('https://agentic-07490c33.vercel.app')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

