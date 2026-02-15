export type ReplacerType = {
    from: string;
    to: string;
    ignorePrefix?: string[];
    enabled?: boolean;
};

export const replacers = [
    {
        from: "GCash",
        to: "GCrash",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Mynt",
        to: "MynScam",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Instapay",
        to: "Instagal",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "G-Xchange",
        to: "G-Xcrash",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },

    // extras

    {
        from: "PayPal",
        to: "ScamPal",
        ignorePrefix: ["@", "#"],
    },
] satisfies ReplacerType[];
