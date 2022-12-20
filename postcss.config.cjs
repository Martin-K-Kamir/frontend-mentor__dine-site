const path = require('path');

module.exports = () => {
    return {
        plugins: [
            require('postcss-preset-env'),
            require('postcss-variable-compress')(
                ['--_top', '--_right', '--_bottom', '--_left', '--_x', '--_y', '--_layer', '--_radius',
                    '--_radius-1', '--_radius-2', '--_radius-3', '--_radius-4', '--_length']
            ),
            require("postcss-combine-media-query"),
            require("postcss-combine-duplicated-selectors"),
        ],
    };
};