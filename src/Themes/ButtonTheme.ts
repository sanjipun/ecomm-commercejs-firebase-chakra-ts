export const Button = {
    baseStyle: {
        fontWeight: 300,
        textTransform: "uppercase",
        letterSpacing: 2,
        padding: "25px 40px",
        borderRadius: 0
    },
    variants: {
        default: {
            border: "1px solid #000",
            color: "#000",
        },
        primary: {
            bg: "#ED165F",
            color: "white",
        },
        text: {
            bg: "transparent",
            color: "#000",
        },

    },
    defaultProps: {
        size: "md",
        variant: "default",
    },
}