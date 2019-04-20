define(['jquery', 'template', 'util', 'bootstrap'], function($, template, util) {
    // 设置导航菜单选中
    util.setMenu('/course/add')
        // 获取课程ID
    var csId = util.qs('cs_id')
        // 获取课时相关数据
    $.ajax({
        type: 'get',
        url: '/api/course/lesson',
        data: { cs_id: csId },
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            // 解析数据，渲染页面
            var html = template('lessonTpl', data.result)
            $('#lessonInfo').html(html);

            // 绑定添加课时事件
            $('#addLesson').click(function() {
                // 解析数据，渲染页面
                var html = template('modalTpl', { operate: '添加课时' })
                $('#modalInfo').html(html)
                    // 显示模态框
                $('#chapterModal').modal()
            });


            // 绑定编辑课时事件
            $('.editBtn').click(function() {
                // 获取课时ID
                var ctId = $(this).attr('data-ctId')
                    // 根据课时ID查询课时数据信息
                $.ajax({
                    type: 'get',
                    url: '/api/course/chapter/edit',
                    data: { ct_id: ctId },
                    dataType: 'json',
                    success: function(data) {
                        // 解析数据，渲染页面
                        data.result.operate = '编辑课时'
                        var html = template('modalTpl', data.result)
                        $('#modalInfo').html(html)
                            // 显示模态框
                        $('#chapterModal').modal()
                    }
                })
            })
        }
    })



})