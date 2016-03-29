exports.codeGenerators = {
    define: require('./code-define'),
    run: require('./code-run'),
    installed: require('./code-installed'),
    main: require('./code-main'),
    remap: require('./code-remap'),
    ready: require('./code-ready'),
    searchPath: require('./code-search-path')
};

exports.getClientPathInfo = require('./getClientPathInfo');
exports.normalizeMain = require('./normalizeMain');