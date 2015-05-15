displaySystem.config({
    //websocket host to listen to
    wsHost: "ws://localhost:13900/",
    //specify the node that is being subscribed to when using mserver
    mserverNode: "overlay",
    //optional chromakey background color
    // background: "lime",
    //modules, order determines z stacking
    modules: {
        'camera': {
            visible: true,
            // audio: true,
        },
        'clock': {
            // visible: true,
            // countdown: 20,
        },
        'time': {
            // visible: true,
            // format: "MM:ss",
        },
        'twitter': {
            // visible: true,
            // speed: 500,
        },
        'lowThird': {
            visible: true,
            line1: 'press \'C\'',
            line2: 'to show the control window',
        },
        'list': {
            // visible: true,
            // header: 'results round 1',
            // data: [
            //     ['foo',1],
            //     ['bar',2],
            //     ['hello',3],
            //     ['what?',4],
            //     ['some',5],
            //     ['minor',6],
            //     ['bear',7],
            //     ['poo',8],
            //     ['cheers',9],
            //     ['mate',10],
            // ]
        },
        'css': {
            href: 'themes/rednblue.css',
            // href: 'themes/default.css',
        },
        'keybindings': {
            'q': 'time.show()',
            'a': 'time.hide()',
            'w': 'clock.show()',
            's': 'clock.hide()',
            'e': 'lowThird.show()',
            'd': 'lowThird.hide()',
            'r': 'twitter.show()',
            'f': 'twitter.hide()',
            't': 'list.show()',
            'g': 'list.hide()',
            'c': function() {
                window.open('controls.html','fllDisplayControlWindow','resize=yes,width=600,height=300');
            }
        }
    },
    //path to the modules, can even be a full url
    modulePath: "modules"
});
