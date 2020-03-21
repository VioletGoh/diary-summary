const codeFilter = {};

codeFilter.install = function(Vue) {
    Vue.filter('code-filter', function(value) {
        console.log(value);
    });
}

export default codeFilter;