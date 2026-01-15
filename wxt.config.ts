import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        version: "0.0.1",
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
        permissions: [],
    },
});
