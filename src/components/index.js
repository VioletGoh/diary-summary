const Components = {};

Components.install = function(Vue) {
    Vue.use(require('./header').default)
        .use(require('./sidebar').default);
}

export default Components;