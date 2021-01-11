class IsImageLoaded {
  checkImage(img) {
    // Во время события load IE и другие браузеры правильно
    // определяют состояние картинки через атрибут complete.
    // Исключение составляют Gecko-based браузеры.
    if (!img.complete) {
      return false;
    }
    // Тем не менее, у них есть два очень полезных свойства: naturalWidth и naturalHeight.
    // Они дают истинный размер изображения. Если какртинка еще не загрузилась,
    // то они должны быть равны нулю.
    if (!img.naturalWidth && !img.naturalWidth) {
      return false;
    }
    // Картинка загружена.
    return true;
  }
}

export {IsImageLoaded}