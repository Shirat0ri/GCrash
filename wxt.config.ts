import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    zip: {
        name: "microslop",
        excludeSources: ["debub.log", "bun.lock"],
    },
    manifest: {
        version: "0.0.5",
        name: "Microslop",
        short_name: "Microslop",
        description: "An extension that converts Microsoft to Microslop",
        host_permissions: ["*://*/*"],
        browser_specific_settings: {
            gecko: {
                id: "microslop@4o4",
                strict_min_version: "109.0",
                ["data_collection_permissions" as any]: {
                    required: ["none"],
                },
            },
        },
        permissions: ["storage"],
    },

    modules: ["@wxt-dev/module-solid"],
    vite: () => ({
        plugins: [tailwindcss()],
    }),
});
