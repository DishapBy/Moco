// console.log(document.documentElement.scrollTop)

$(function () {
    let header = $("#header");
    let introH = $("#intro").innerHeight();

    // let scrollOffSet = document.documentElement.scrollTop;
    let scrollOffSet = $(window).scrollTop(); //current value

    //Fixed Header
    checkScroll(scrollOffSet);

    $(window).on("scroll", function () {
        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);
    });

    function checkScroll(scrollOffSet) {
        if (scrollOffSet >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $(this).data('scroll');
        let blockOffSet = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500)

    })

    // Menu nav toggle
    $("#nav__toggle").on(("click"), function (event) {
        console.log(event)
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav__toggle").toggleClass("active");
    })

    // Collapse
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass("active")
        // $(blockId).slideToggle();
    })

    // Slider
    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});
