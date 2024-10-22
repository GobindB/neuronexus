import './globals.css';

export const metadata = {
  title: 'My Landing Page',
  description: 'Welcome to my landing page!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-image">
        {children}
      </body>
    </html>
  )
}
