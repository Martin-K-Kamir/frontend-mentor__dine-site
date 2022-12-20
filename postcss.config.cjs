const path = require('path');

module.exports = () => {
    return {
        plugins: [
            require("postcss-combine-media-query"),
            require('postcss-variable-compress'),
            require("postcss-combine-duplicated-selectors"),
            // require('postcss-extract-media-query') ({
            //     output: {
            //         path: path.join(__dirname, 'public/assets')
            //     },
            //     queries: {
            //         '(width > 20.625em)': 'above-xxs',
            //         '(width > 23.4375em)': 'above-xs',
            //         '(width > 30em)': 'above-sm',
            //         '(width > 48em)': 'above-md',
            //         '(width > 64em)': 'above-lg',
            //         '(width > 90em)': 'above-xl',
            //         '(width > 120em)': 'above-xll',
            //         '(width <= 20.625em)': 'below-xxs',
            //         '(width <= 23.4375em)': 'below-xs',
            //         '(width <= 30em)': 'below-sm',
            //         '(width <= 48em)': 'below-md',
            //         '(width <= 64em)': 'below-lg',
            //         '(width <= 90em)': 'below-xl',
            //         '(width <= 120em)': 'below-xll',
            //     },
            //     extractAll: false,
            //     config: {
            //         plugins: {
            //             'postcss-extract-media-query': {},
            //             'cssnano': {}
            //         }
            //     }
            // }),
        ],
    };
};