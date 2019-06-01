"use strict"

const path = require("path")

module.exports = {
    entry: "./source/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "react-dayjs",
        libraryTarget: "umd"
    },
    externals: [
        {
            "react": {
                root: "react",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            },
            "dayjs": {
                root: "dayjs",
                commonjs2: "dayjs",
                commonjs: "dayjs",
                amd: "dayjs"
            },
            "prop-types": {
                "commonjs": "prop-types",
                "commonjs2": "prop-types",
                "amd": "prop-types",
                "root": "PropTypes"
            }
        }
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "source"),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
