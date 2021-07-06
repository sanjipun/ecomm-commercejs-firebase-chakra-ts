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
            color: "#fff",
            backgroundColor: "#ED165F",
            transition: "all 0.2s ease",
            letterSpacing: "none",
            _hover: {
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #000"
            }
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