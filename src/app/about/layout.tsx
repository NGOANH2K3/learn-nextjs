export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div>
        <p>About Page</p>
        {children}</div>
    );
  }