import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import words from "words.json"
import debounce from "lodash.debounce"

const useSearch = () => {
	//Creates new query state for search string.
	const [query, setQuery] = useState<string>("")
	const [matching, setMatching] = useState<string[]>([])
	//Creates a new router from next's useRouter hook.
	const router = useRouter()
	// Creates a memoized debounced function that sets the matching state.
	const debouncedMatching = useCallback(
		debounce((matchingWords: string[]) => setMatching(matchingWords), 300),
		[]
	)

	//Sets query to the value of the input.
	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		// Gets trimmed query from input.
		const trimmedQuery: string = event.target.value.trim()
		if (trimmedQuery.length >= 2) {
			// Gets keys of the words object.
			const keys = Object.keys(words)

			// Filters the keys based on whether they match the trimmed query.
			const matchingWords = keys.filter((key: string) => {
				const regex = new RegExp(`^${trimmedQuery}`, "i")
				return regex.test(key)
			})

			// Sets query state to the trimmed query.
			setQuery(trimmedQuery)

			// Calls the memoized debounced function to set the matching state with the matching words.
			debouncedMatching(matchingWords)
		} else {
			setQuery(trimmedQuery)
			setMatching([])
		}
	}

	//Runs handleSearch on Enter
	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			handleSearch()
		}
	}
	//Runs handleSearch on click of search icon button.
	function handleClick() {
		handleSearch()
	}

	/*
  The handleSearch function stored the trimmed query inside trimmedQuery.
  If trimmedQuery has a value, it moves you to the location. 
  Resets query, and value of input.
  */
	function handleSearch() {
		const trimmedQuery: string = query.trim()
		const keys = Object.keys(words)
		const matchesQuery = keys.some((key: string) => {
			return key === trimmedQuery
		})
		if (matchesQuery) {
			router.push(`/${trimmedQuery}`)
			setQuery("")
		}
	}

	function handleMatchingClick(result: string) {
		router.push(`/${result}`)
		setQuery("")
	}

	//Returns the objects below to be used in components.
	return {
		query,
		setQuery,
		handleInput,
		handleKeyDown,
		handleClick,
		matching,
		handleMatchingClick,
	}
}

export default useSearch
