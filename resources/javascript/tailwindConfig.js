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
                //Suite Hotel Colors
                whiteGold: "#fdfdf7",
                lighterGold: "#ece9d2",
                lightGold: "#e7e0b9",
                brownGold: "#ab915d",
                brown: "#895602",
                //Korean Restaurant Colors
                darkerTeal: "#479085",
                darkTeal: "#50a195",
                teal: "#6DB7AC",
                lightTeal: "#8fc8bf",
                lighterTeal: "#a0d0c9",
            },
            boxShadow: {
                "inner-2xl": "inset 0 0 2px 4px rgb(0 0 0 / 0.05)",
            },
        },
    },
};
