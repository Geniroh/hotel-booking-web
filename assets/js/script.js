document.addEventListener('DOMContentLoaded', function(){
    function checkWindowSize() {
        const windowWidth = window.innerWidth;
        return windowWidth < 1000 ? 1 : 2;
    }
  
    const configObj = {
        inline: true,
        mode: "range",
        dateFormat: "Y-m-d",
        disable: [
        {
            from: "2024-01-13",
            to: "2024-01-17"
        },
        {
            from: "2025-09-01",
            to: "2025-12-01"
        }
        ]
    };
  
    function handleResize() {
        const result = checkWindowSize();
        configObj.showMonths = result;
    }
    window.addEventListener('resize', handleResize);

    handleResize();
    
    flatpickr(".my-calendar", configObj);

    function splideInit () {
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
    });
      
    splide.mount();

    // Spinner
    function hideLoadingRooms() {
        var loadingElement = document.querySelector('#loadingScreen');
    
        if (loadingElement) {
        loadingElement.classList.add('hidden');
        }
    }
    
    setTimeout(function() {
        hideLoadingRooms();
    }, 2000); 
      
});
