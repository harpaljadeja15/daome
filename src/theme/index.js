import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import Button from "./components/Button";
import Heading from "./components/Heading";
import Spinner from "./components/Spinner";

const theme = extendTheme({
	initialColorMode: "light",
	useSystemColorMode: false,
	fonts: {
		body: "Inter",
		heading: "Inter",
	},
	styles: {
		global: (props) => ({
			body: {
				fontFeatureSettings: `"kern" 1,"liga" 1,"calt" 0,"kern"`,
				color: mode("red.800", "white")(props),
			},
		}),
	},
	colors: {
		brand: {
			100: "var(--chakra-colors-red-100)",
			200: "var(--chakra-colors-red-200)",
			300: "var(--chakra-colors-red-300)",
			400: "var(--chakra-colors-red-400)",
			500: "var(--chakra-colors-red-500)",
			600: "var(--chakra-colors-red-600)",
			700: "var(--chakra-colors-red-700)",
			800: "var(--chakra-colors-red-800)",
			900: "var(--chakra-colors-red-900)",
		},
	},
	components: {
		Button,
		Heading,
		Spinner,
	},
});

export default theme;
