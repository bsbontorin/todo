import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { DefaultLayoutProps } from '../types/default-layout';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='default-layout-container'>
      <Header />
      <main className='children'>{children}</main>
      <Footer />
    </div>
  );
};
