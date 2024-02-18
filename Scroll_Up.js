function ScrollToTop() {
    const Deep_Dark_Fantasy = new Audio('./mp3/Deep_Dark_Fantasy.wav');
    var button = document.getElementById('Scroll_Up_Button');
    Deep_Dark_Fantasy.play();

  // 滾動到頂部
  window.scroll(0, 0);
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
}