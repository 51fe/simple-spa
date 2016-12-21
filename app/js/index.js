$(function() {
  var pills = $('.nav-pills');

  // 改变锚点
  pills.on('click', 'a', function() {
    var href = $(this).attr('href');
    if (href == '#') return;
    location.hash = href;
  });

  // 锚点为空选中一级导航菜单第一项
  if (location.hash == '') {
    pills.find('li a:first').click();
  }

  // 处理锚点改变
  $(window).on('hashchange', function() {
    var hash = $.trim(location.hash).split('-')[0];
    // 设置一级导航菜单选中状态
    route.setActive(pills, hash);
    // 加载模板
    route.loadTemplate($('#mainContent'), hash, function() {
      hash = location.hash;
      // 设置二级导航菜单选中状态
      route.setActive($('.nav-tabs'), hash);
      $('#subContent').load('tpl/' + hash.substring(1) + '.html');
    });
  }).trigger('hashchange');
});
