const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',

    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        
        new Dotenv({
          path: './frontend.env',

        })

    ],

    resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "os": false,
      }
      },

    module: {

        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                // Disables attributes processing
                attributes: false,
              }
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
        ],
    },
}

//npx webpack serve


// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// {
//     test: /\.css$/i,
//     use: ["style-loader","css-loader"],
//   },

// use: [
//     {
//       loader: MiniCssExtractPlugin.loader,
//       options: {
//         publicPath: (resourcePath, context) => {
//           // publicPath is the relative path of the resource to the context
//           // e.g. for ./css/admin/main.css the publicPath will be ../../
//           // while for ./css/main.css the publicPath will be ../
//           return path.relative(path.dirname(resourcePath), context) + '/';
//         },
//       },
//     },
//     'css-loader',
//   ],

// {
//     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//     use: [
//       {
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//           outputPath: 'fonts/'
//         }
//       }
//     ]
//   }

