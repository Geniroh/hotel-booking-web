// document.addEventListener('DOMContentLoaded', function(){
//     function checkWindowSize() {
//         const windowWidth = window.innerWidth;
//         return windowWidth < 1000 ? 1 : 2;
//     }
      
//     function handleResize() {
//         const result = checkWindowSize();
//     }
      
//     window.addEventListener('resize', handleResize);
      
//     flatpickr(".my-calendar", {
//         inline: true,
//         mode: "range",
//         showMonths:  handleResize,
//         // wrap: true
//     });
// })

document.addEventListener('DOMContentLoaded', function(){
    function checkWindowSize() {
        const windowWidth = window.innerWidth;
        return windowWidth < 1000 ? 1 : 2;
    }

    function handleResize() {
        const result = checkWindowSize();
        flatpickr(".my-calendar", {
            inline: true,
            mode: "range",
            showMonths: result,
        });
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    function testfunc () {
        new Splide('#thumbnail-carousel', {
            fixedWidth : 100,
            fixedHeight: 60,
            gap        : 10,
            rewind     : true,
            pagination : false,
            isNavigation: true,
            focus      : 'center',
            breakpoints: {
              600: {
                fixedWidth : 60,
                fixedHeight: 44,
              },
            },
        } ).mount();
    }

    // document.addEventListener( 'DOMContentLoaded', function () {
    //     var main = new Splide( '#main-carousel', {
    //       type      : 'fade',
    //       rewind    : true,
    //       pagination: false,
    //       arrows    : false,
    //     } );
      
      
    //     var thumbnails = new Splide( '#thumbnail-carousel', {
    //       fixedWidth  : 100,
    //       fixedHeight : 60,
    //       gap         : 10,
    //       rewind      : true,
    //       pagination  : false,
    //       isNavigation: true,
    //       breakpoints : {
    //         600: {
    //           fixedWidth : 60,
    //           fixedHeight: 44,
    //         },
    //       },
    //     } );
      
      
    //     main.sync( thumbnails );
    //     main.mount();
    //     thumbnails.mount();
    //   } );

    var splide = new Splide( '#main-carousel', {
        pagination: false,
      } );
      
      
      var thumbnails = document.getElementsByClassName( 'thumbnail' );
      var current;
      
      
      for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
      }
      
      
      function initThumbnail( thumbnail, index ) {
        thumbnail.addEventListener( 'click', function () {
          splide.go( index );
        } );
      }
      
      
      splide.on( 'mounted move', function () {
        var thumbnail = thumbnails[ splide.index ];
      
      
        if ( thumbnail ) {
          if ( current ) {
            current.classList.remove( 'is-active' );
          }
      
      
          thumbnail.classList.add( 'is-active' );
          current = thumbnail;
        }
      } );
      
      
      splide.mount();

    // testfunc()
});
