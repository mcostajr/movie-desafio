import * as React from "react";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import SearchProvider from "../../contexts/SearchContext";
import styles from './styles.module.scss';

function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.wrapper}>
				<SearchProvider>
					<Search />
					<MovieList/>
					<Pagination/>
				</SearchProvider>
      </main>
		</div>
	);
}
export default Home