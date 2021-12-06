import * as React from "react";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";
import SearchProvider from "../../contexts/SearchContext";
import styles from './styles.module.scss';

function Home() {
	return (
		<div className={styles.container}>
			<SearchProvider>
				<Search />
        <MovieList/>
			</SearchProvider>
		</div>
	);
}
export default Home