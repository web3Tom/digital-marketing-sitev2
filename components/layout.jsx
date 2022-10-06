import Header from './Navigation/Header.component';

export default function Layout({ children }) {
  return (
    <div className="bg-[#0d1e34] relative">
      <Header />
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
}
