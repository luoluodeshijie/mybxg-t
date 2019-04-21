define(['jquery'], function($) {
    $(document).ajaxStart(function() {
        // 显示遮罩层
        $('.overlay').show()
    })
    $(document).ajaxStop(function() {
        // 关闭遮罩层
        $('.overlay').hide()
    })
})