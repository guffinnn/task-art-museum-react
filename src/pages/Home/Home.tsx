import { JSX } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <section className="main__section--search">
            <h1>
              let's find some <span className="text--primary">art</span> here!
            </h1>
            <SearchBar />
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
