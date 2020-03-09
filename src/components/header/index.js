import Header from './Header';

/**
 * 如果此处这样写：Vue.component(Header.name, Header)，那么在Header.vue中写name: 'Header'
 * 不然会报错：Uncaught TypeError: Cannot read property 'toLowerCase' of undefined
 */
Header.install = function(Vue) {
    Vue.component('Header', Header);
}

export default Header;