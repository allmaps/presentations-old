Reveal.initialize({
  controls: false,
  progress: false,
  history: true,
  center: true,
  transition: 'fade',
  width: 1280,
  height: 800,
  dependencies: [
    {
      src: '../assets/reveal/js/prism.js',
      async: true,
      callback: function () {
        // hljs.initHighlightingOnLoad()
      }
    }
    // {
    //   src: 'js/highlight.js',
    //   async: true,
    //   callback: function () {
    //     hljs.initHighlightingOnLoad()
    //   }
    // }
  ]
})
