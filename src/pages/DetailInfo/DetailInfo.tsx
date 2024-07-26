import { JSX } from 'react';
import './DetailInfo.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function DetailInfo(): JSX.Element {
  const { id } = useParams();

  return (
    <>
      <Header isHomePage={false} />
      <main>
        <div className="wrapper">
          <section className="main__section --search">
            <h1>{id}</h1>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DetailInfo;
