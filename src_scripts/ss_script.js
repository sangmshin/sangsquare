initialize();

var rZ = 'rotationZ';
var a = '0.1';
var b = '0.01deg';

function initialize() {
    t = TweenMax;

    //SET EVERYTHING TO 0 OPACITY
    t.set([
        ms_title_1,
        ms_title_2
    ], {
            alpha: 0
        });

    t.set([ms_title_1,
        ms_title_2
    ], {
            perspective: 1000,
            transformPerspective: 1000
        });

    // t.set(hero, { x: -58, y: -56 })
    // t.set(priceTag, { x: -100, y: -74 })

    start()

}

function start() {

    browserDetect();
    // buttonExit.addEventListener('mouseover', onBGover, false);
    // buttonExit.addEventListener('mouseout', onBGout, false);
    animation1();

}

function animation1() {

    // t.set([ms_title_1, ms_title_2], { opacity: 1 });
    t.to([ms_title_1, ms_title_2], .1, {
        opacity: 1
    });
    // t.staggerFrom([ms_title_1, ms_title_2], .5, { x: half_Window_Width, ease: Expo.easeOut }, .2)

    /* t.fromTo(cta_button, .5, { opacity: 1, scaleY: .05, x: "-=300", backgroundColor: "white" }, { z: a, rZ: b, opacity: 1, scaleY: .05, x: "+=300", backgroundColor: "white", delay: .1 })
    t.to(cta_button, .3, { z: a, rZ: b, scaleY: 1, ease: Back.easeOut, backgroundColor: "#b43631", delay: .6 })

    t.fromTo(hero, 9, { scale: 1 }, { z: a, rZ: b, scale: 0.698, x: -65, y: -53, ease: Linear.easeNone, delay: 0 })

    t.fromTo(f1_copy1, .8, { opacity: 0, x: 300 }, { z: a, rZ: b, opacity: 1, x: 0, transformOrigin: "50% 25%", ease: Power3.easeInOut, delay: 0.2 })
    t.fromTo(f1_copy2, .8, { opacity: 0, x: -300 }, { z: a, rZ: b, opacity: 1, x: 0, transformOrigin: "50% 50%", ease: Power3.easeInOut, delay: 0.7 })

    t.delayedCall(3.5, animation2) */
};

function animation2() {

    t.to([f1_copy1, f1_copy2], .1, {
        opacity: 0
    })

    t.fromTo(f2_copy1, .7, {
        opacity: 0,
        y: -150
    }, {
            z: a,
            rZ: b,
            opacity: 1,
            y: 0,
            transformOrigin: "50% 25%",
            ease: Power3.easeInOut,
            delay: 0.0
        })

    t.delayedCall(2.2, animation3)

};

function animation3() {

    t.to(f2_copy1, .1, {
        opacity: 0
    })

    if (browserDetect() === "firefox") { // firefox only

        t.fromTo(f3_copy1, 1, {
            opacity: 0,
            scale: 10
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 62px",
                ease: Back.easeIn,
                delay: 0.0
            })
        t.fromTo(f3_copy2, 1, {
            opacity: 0,
            scale: 10
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 50%",
                ease: Back.easeIn,
                delay: 0.5
            })
        t.fromTo(f3_copy3, 1, {
            opacity: 0,
            scale: 10
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 162px",
                ease: Back.easeIn,
                delay: 1
            })

    } else { // all other browsers

        t.fromTo(f3_copy1, 1, {
            opacity: 0,
            scale: 30
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 62px",
                ease: Back.easeIn,
                delay: 0.0
            })
        t.fromTo(f3_copy2, 1, {
            opacity: 0,
            scale: 30
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 50%",
                ease: Back.easeIn,
                delay: 0.5
            })
        t.fromTo(f3_copy3, 1, {
            opacity: 0,
            scale: 30
        }, {
                z: a,
                rZ: b,
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transformOrigin: "50% 162px",
                ease: Back.easeIn,
                delay: 1
            })
    }

    t.to(legal, .5, {
        opacity: 1,
        ease: Power1.easeOut,
        delay: 2.2
    })

    t.fromTo(priceTag, .7, {
        opacity: 0,
        scale: 0.10
    }, {
            z: a,
            rZ: b,
            opacity: 1,
            scale: 1,
            transformOrigin: "50% 50%",
            ease: Elastic.easeOut,
            delay: 2.5
        })

    t.delayedCall(3.2, stop)
};


function onBGover(e) {
    t.to(cta_button, .3, {
        backgroundColor: "white"
    })
    t.to(cta, .1, {
        opacity: 0
    })
    t.to(cta_over, .1, {
        opacity: 1
    })
}

function onBGout(e) {
    t.to(cta_button, .3, {
        backgroundColor: "#b43631"
    })
    t.to(cta, .1, {
        opacity: 1
    })
    t.to(cta_over, .1, {
        opacity: 0
    })
}
/* 
var optoins = $('.options');
var radioBtn = $('.radioBtn');
var errorMsg = $('.error-msg');

$(':radio').on('click', removeError);
$('#surveyForm').on('submit', submitForm);

function removeError() {

    $(':radio').removeClass('error')
    errorMsg.addClass('hide');
}
alert('j')
function submitForm(event) {

    var formIsValid = false;

    optoins.each(function (i, v) {

        var $this = $(v),
            isValid = $this.find('input')[0].checkValidity();

        if (isValid) {
            formIsValid = true;
        }
    });

    if (!formIsValid) {
        event.preventDefault();
        radioBtn.addClass('error');
        errorMsg.removeClass('hide');
        console.log('You must choose one');
    } else {
        radioBtn.removeClass('error');
        errorMsg.addClass('hide');
        //console.log($(this).serialize()); 
        //location.href  = "http://google.com"
    }
}


// SEARCH ENGINE AT THE TOP RIGHT //
$('#apachesolr-panels-search-block').on('submit', submitSearch);

function submitSearch(event) {

    event.preventDefault();
    var search_value = $('#apachesolr-panels-search-block input').val();
    window.open("https://www.acuvue.com/search/site/" + search_value, '_blank');
    //    location.href  = "https://www.acuvue.com/search/site/" + search_value;    
}


//AUTOFOCUS SEARCH FIELD WHEN 'search icon' is CLICKED

$('.search-button').on('click', autofocus_search);

function autofocus_search() {

    $('.active-search-dropdown').css("height", "auto");
    $('.apachesolr-autocomplete.form-autocomplete').focus();

}
 */
browserDetect();

if (browserDetect() === "chrome" || browserDetect() === "safari" || browserDetect() === "firefox") { //msie represents IE browsers

    console.log("css for Chrome, Safari and Firefox")

} else { //for IE 

    console.log("css for IE")

}

function browserDetect() {
    var browser;
    var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
        browser;
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
        browser = "msie";
    } else {
        browser = ua[1].toLowerCase();
    }

    return browser;
}




var div_pos = $('#section1').position().top;
var win_height = $(window).height() / 2;
var div_height = $('#section1').height() / 2;
var final_pos = win_height - div_height;
var half_Window_Width = $(window).width() / 2;
$('#section0').offset({
    top: final_pos - $('#section0').height(),
    left: $(window).width() / 2
});
$('#section1').offset({
    top: final_pos,
    left: $(window).width() / 2
});
for (let i = 2; i < $('#fullpage div').length; i++) {
    const section = $('#fullpage div')[i];
    const pre_section = $('#fullpage div')[i - 1];

    $(section).offset({
        top: $(pre_section).position().top + $(pre_section).height(),
        left: $(window).width() / 2
    });

}

$(document).ready(function () {
    $('#section0').offset({
        top: final_pos - $('#section0').height(),
        left: $(window).width() / 2
    });
    $('#section1').offset({
        top: final_pos,
        left: $(window).width() / 2
    });
    for (let i = 2; i < $('#fullpage div').length; i++) {
        const section = $('#fullpage div')[i];
        const pre_section = $('#fullpage div')[i - 1];

        $(section).offset({
            top: $(pre_section).position().top + $(pre_section).height(),
            left: $(window).width() / 2
        });
    }

});

$(window).resize(function () {
    let _win_height = $(window).height() / 2;
    let _div_height = $('#section1').height() / 2;
    half_Window_Width = $(window).width() / 2;
    final_pos = _win_height - _div_height;
    console.log(final_pos);

    $('#section0').offset({
        top: final_pos - $('#section0').height(),
        left: $(window).width() / 2
    });
    $('#section1').offset({
        top: final_pos,
        left: $(window).width() / 2
    });
    for (let i = 2; i < $('#fullpage div').length; i++) {
        const section = $('#fullpage div')[i];
        const pre_section = $('#fullpage div')[i - 1];

        $(section).offset({
            top: $(pre_section).position().top + $(pre_section).height(),
            left: $(window).width() / 2
        });

    }
    $.scrollify({

        offset: -(final_pos),

    });
});
const hash = window.location.hash;
console.log(hash);
if (hash == '#2') {
    console.log('hash is 2');
}

$.scrollify({
    section: ".section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: -(final_pos),
    scrollbars: false,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,

    before: function () {
        let hash = window.location.hash;
        var previous_index = $.scrollify.currentIndex() - 1
        console.log('');
        console.log('previous index: ', previous_index);

        if ($.scrollify.currentIndex() !== 12 && $.scrollify.currentIndex() !== 7 || hash == '#7' || hash == '#9' || hash == '#12' || hash == '#14') {

            t.staggerFromTo([ms_title_1, ms_title_2], .5, { opacity: 0, x: half_Window_Width}, { opacity: 1, x: 0, ease: Expo.easeOut }, .2)
        }
        
        
        console.log('current index:', $.scrollify.currentIndex());
        
        if ($.scrollify.currentIndex() == 1) {
            $.scrollify.instantMove("12");

        }else{
            // t.staggerTo([ms_title_1, ms_title_2], .5, { x: half_Window_Width, ease: Expo.easeOut }, .2)
            
        }

        // console.log('middle position:', final_pos);

        for (let i = 0; i < $('#fullpage div').length; i++) {
            let section = $('#fullpage div')[i];

            $(section).removeClass('active')

        }
        if ($.scrollify.currentIndex() == 10 || $.scrollify.currentIndex() == 0) {
            $('#ms_title_1').html('MINDSPHERE.IO 2')
            $('#ms_title_2').html('JURASSIC WORLD')
        } else if ($.scrollify.currentIndex() == 11 || $.scrollify.currentIndex() == 1) {
            $('#ms_title_1').html('MINDSPHERE.IO')
            $('#ms_title_2').html('MINIATURE WORLD')
        } else if ($.scrollify.currentIndex() == 12 || $.scrollify.currentIndex() == 2) {
            $('#ms_title_1').html('WATER IS LIFE')
            $('#ms_title_2').html('HIDDEN DANGERS')
        } else if ($.scrollify.currentIndex() == 13 || $.scrollify.currentIndex() == 3) {
            $('#ms_title_1').html('CURE')
            $('#ms_title_2').html('EPILEPSY')
        } else if ($.scrollify.currentIndex() == 14 || $.scrollify.currentIndex() == 4) {
            $('#ms_title_1').html('EMOTIONAL')
            $('#ms_title_2').html('CONTAGION')
        } else if ($.scrollify.currentIndex() == 15 || $.scrollify.currentIndex() == 5) {
            $('#ms_title_1').html('PAINT')
            $('#ms_title_2').html('ON')
        } else if ($.scrollify.currentIndex() == 16 || $.scrollify.currentIndex() == 6) {
            $('#ms_title_1').html('PNC')
            $('#ms_title_2').html('FINANCIAL EDUCATION')
        } else if ($.scrollify.currentIndex() == 17 || $.scrollify.currentIndex() == 7) {
            $('#ms_title_1').html('PNC')
            $('#ms_title_2').html('TL')
        } else if ($.scrollify.currentIndex() == 18 || $.scrollify.currentIndex() == 8) {
            $('#ms_title_1').html('AMAZON ALEXA SKILL')
            $('#ms_title_2').html('HOLIDAY CHILL')
        } else if ($.scrollify.currentIndex() == 19 || $.scrollify.currentIndex() == 9) {
            $('#ms_title_1').html('GOOGLE HOME')
            $('#ms_title_2').html('NODE.JS')
        }


    },
    after: function () {
        let hash = window.location.hash;

        // MOVE DOWN TO #12
        if ($.scrollify.currentIndex() == 2) {
            $.scrollify.instantMove(12);
        }

        // MOVE UP TO #8
        if ($.scrollify.currentIndex() == 17) {
            $.scrollify.instantMove(7);
        }
        console.log('[done scroll]');
        console.log('current hash: ', hash);
        var currentSection = $.scrollify.current()[0]
        $(currentSection).addClass("active");
        console.log('current section id: ', $(currentSection).attr('id'));
        var sectionID = $(currentSection).attr('id');

        
        /* if (sectionID == 'section7') {
            console.log('almost bottom of carousel, more divs added.');

            let _win_height = $(window).height() / 2;
            let _div_height = $('#section1').height() / 2;
            final_pos = _win_height - _div_height;
            console.log(final_pos);

            $('#section0').offset({
                top: final_pos - $('#section0').height(),
                left: $(window).width() / 2
            });
            $('#section1').offset({
                top: final_pos,
                left: $(window).width() / 2
            });
            for (let i = 2; i < $('#fullpage div').length; i++) {
                const section = $('#fullpage div')[i];
                const pre_section = $('#fullpage div')[i - 1];

                $(section).offset({
                    top: $(pre_section).position().top + $(pre_section).height(),
                    left: $(window).width() / 2
                });

            }
            $.scrollify({

                offset: -(final_pos),

            });
        } else {

        } */
    },
    afterResize: function () {},
    afterRender: function () {}
});

$.scrollify.instantMove(11);

var counter = 0;



