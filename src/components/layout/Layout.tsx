import { ReactNode } from 'react';
import Head from 'next/head';
import VerticalMenu from './VerticalMenu';
import PageTransition from '../animations/PageTransition';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'DabisStudio - Designing the Future of Digital Experience',
  description = 'DabisStudio is a high-end digital design and innovation agency delivering future-forward experiences in UI/UX, brand storytelling, and product design.'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VerticalMenu />

      <main className="content-container">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </>
  );
}
