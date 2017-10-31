const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    // baseUrl: isPro ? 'http://www.vnshop.cn/api/' : 'api/'
    baseUrl: isPro ? 'http://vshop.liuxinhong.shop/api/' : 'api/'

}