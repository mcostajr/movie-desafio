import * as React from "react";
import Search from "../../components/Search";
import SearchProvider from "../../contexts/SearchContext";
import styles from './styles.module.scss';

function Home() {
	return (
		<div className={styles.container}>
			<SearchProvider>
				<Search />
			</SearchProvider>
		</div>
	);
}
export default Home