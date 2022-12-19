// const path = require('path');
//
// module.exports = () => {
//     return {
//         plugins: [
//             require("postcss-combine-media-query"),
//             require('postcss-variable-compress'),
//             require("postcss-combine-duplicated-selectors"),
//             require('postcss-extract-media-query') ({
//                 output: {
//                     path: path.join(__dirname, 'public/assets')
//                 },
//                 queries: {
//                     '(min-width : 1024px)': 'desktop'
//                 },
//                 config: {
//                     plugins: {
//                         'postcss-extract-media-query': {},
//                         'cssnano': {}
//                     }
//                 }
//             }),
//         ],
//     };
// };