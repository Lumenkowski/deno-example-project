import { useEffect } from "preact/hooks"

export default function Effect() {

	useEffect( () => {

		console.log( "useEffect" )

	}, [] )

	return ( <>useEffect</> )
}
