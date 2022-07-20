tailwind.config = {
	theme: {
		screens: {
			xs: "360px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				//Korean Restaurant Colors
				darkerTeal: "#479085",
				darkTeal: "#50a195",
				teal: "#6DB7AC",
				lightTeal: "#8fc8bf",
				lighterTeal: "#a0d0c9",
				//Status Colors
				completed: "#34a835",
				pending: "#ffba01",
				cancelled: "#e91224",
				dining: "#e91224",
			},
			boxShadow: {
				"inner-2xl": "inset 0 0 2px 4px rgb(0 0 0 / 0.05)",
			},
		},
	},
};
