import { useQuery } from "@tanstack/react-query";
import fetchData from "../helper/fetch";

function useCountries(query = '') {
	return useQuery(['Countries', query], () => fetchData(`/?q=${query === '' ? undefined : query}`));
}

export default useCountries;