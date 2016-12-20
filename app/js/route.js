var route = {
  /**
   * 加载导航菜单模板
   * @param container
   * @param hash
   * @param callback
   */
  loadTemplate: function(container, hash, callback) {
    container.load('tpl/' + hash.substring(1) + '.html', function() {
      if (typeof callback == 'function') {
        callback();
      }
    });
  },

  /**
   * 设置导航菜单选中状态
   * @param nav
   * @param isSub
   */
  setActive: function(nav, hash) {
    nav.find('li').each(function() {
      var self = $(this),
        href = self.children('a').attr('href'),
        mainSelected = hash.split('-').length > 1 && href == hash,
        subSelected = href.indexOf(hash) == 0;

      if (mainSelected || subSelected) {
        self.addClass('active');
        document.title = 'SPA-' + self.text();
      } else {
        self.removeClass('active');
      }
    });
  }
};