import Header from './Navigation/Header.component';

export default function Layout({ children }) {
  return (
    <div className="w-full bg-black">
      <Header />
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
}
