import Header from './Navigation/Header.component';

export default function Layout({ children }) {
  return (
    <div className="bg-darkBlue relative">
      <Header />
      <div className="mx-auto w-full overflow-hidden">{children}</div>
    </div>
  );
}
