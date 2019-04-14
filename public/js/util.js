define(['jquery'], function($) {
    return {
        qs: function(key) {
            // 获取地址的参数，并且截取掉 ?
            var param = location.search.substr(1) // tc_id=1&flag=5
            var result = null
            if (param) {
                var ps = param.split('&') // ['tc_id=1', 'flag=5']
                $.each(ps, function(index, item) {
                    var kv = item.split('=') // ['tc_id', '1', 'flag', '5']
                    if (kv[0] == key) {
                        result = kv[1]
                        return false // 终止 each 循环
                    }
                })
            }
            return result
        },

        setMenu: function(path) {
            $('.aside .navs a[href="' + path + '"]').addClass('active').closest('ul').show()
        }

    }
})