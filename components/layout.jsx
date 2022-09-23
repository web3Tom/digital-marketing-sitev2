import Header from './Navigation/Header.component';

export default function Layout({ children }) {
  return (
    <div className="w-full bg-black">
      <Header />
      <main className="md:w-full sm:w-full">{children}</main>
    </div>
  );
}
