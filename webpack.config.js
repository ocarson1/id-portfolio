const path = require('path');

module.exports = {
  // Your existing config...
  module: {
    rules: [
      // Other rules...
      
      // Rule for loading Markdown files as raw text
      {
        test: /\.md$/,
        type: 'asset/source',  // This is how Webpack 5 handles raw text
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.md'], // Ensure .md is resolvable
  },
  // Other Webpack configurations...
};