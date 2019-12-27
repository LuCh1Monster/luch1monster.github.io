/*页面载入完成后，创建复制按钮*/
var initCopyCode = function(){
  var copyHtml = '';
  copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
  //fa fa-globe可以去字体库替换自己想要的图标
  copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
  copyHtml += '</button>';
  
  $(".pjax pre code").wrapInner('<div class="code-block"></div>');
  $(".pjax pre code .code-block").before(copyHtml);

  new ClipboardJS('.btn-copy', {
      target: function(trigger) {
          return trigger.nextElementSibling;
      }
  });
}


!function (e, t, a) { 
  /* code */
  initCopyCode();
}(window, document);


function refreshBtnCopy () {
  setTimeout(function() {
    initCopyCode()
  }, 2000)
}
