import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@assets", path.resolve(__dirname, "./src/assets")],
                    ["@components", path.resolve(__dirname, "./src/components")],
                    ["@constants", path.resolve(__dirname, "./src/constants")],
                    ["@context", path.resolve(__dirname, "./src/context")],
                    ["@custom-types", path.resolve(__dirname, "./src/types")],
                    ["@helpers", path.resolve(__dirname, "./src/helpers")],
                    ["@hooks", path.resolve(__dirname, "./src/hooks")],
                    ["@pages", path.resolve(__dirname, "./src/pages")],
                    ["@styles", path.resolve(__dirname, "./src/styles")],
                    ["@utils", path.resolve(__dirname, "./src/utils")]
                ],
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
