var e = "[[b;#66ffff;]root]@lexiethach.com";

// Security utility functions
function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function(char) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };
        return map[char];
    });
}

function isValidRedirectUrl(url) {
    const allowedDomains = [
        'lexicon121.github.io',
        'github.com',
        'medium.com',
        'hmpg.net'
    ];
    try {
        const urlObj = new URL(url);
        return allowedDomains.some(domain => urlObj.hostname.includes(domain));
    } catch {
        return false;
    }
}

function safeRedirect(url) {
    if (isValidRedirectUrl(url)) {
        document.location.href = url;
    }
}

var App = {
    echo: function(text) {
        this.echo('[[b;#66ffff;]' + sanitizeInput(text) + ']');
        if (typeof gtag !== 'undefined') gtag('event', 'echo', { text: sanitizeInput(text) });
    },
    help: function() {
        showHelp(this);
        if (typeof gtag !== 'undefined') gtag('event', 'help');
    },
    ls: function() {
        this.echo('[[b;#66ffff;]autoexec.cfg]');
        this.echo('[[b;#66ffff;]CLASSIFIED.tar.gz]');
        this.echo('[[b;#66ffff;]IAC-2023,80363.matter.pdf]');
        this.echo('[[b;#66ffff;]AlexThachResumev1.docx]');
        this.echo('[[b;#66ffff;]AlexThachFederalResumev1.docx]');
        if (typeof gtag !== 'undefined') gtag('event', 'ls');
    },
    whoami: function() {
        this.echo("root");
        if (typeof gtag !== 'undefined') gtag('event', 'whoami');
    },
    blog: function() {
        if (typeof gtag !== 'undefined') gtag('event', 'blog');
        this.echo("Loading the blog... Wait a sec ...");
        setTimeout(function() { safeRedirect('https://lexicon121.github.io/LexieThachWebsite/'); }, 1000);
    },
    publicPGPkey: function() {
        showPGP(this);
        if (typeof gtag !== 'undefined') gtag('event', 'publicPGPkey');
    },
    donate: function() {
        this.echo("\nBitcoin (BTC) - 3Pgqkda3w8ZTzBGT5DeLDiWdkgNTNjNxvo\n");
        this.echo("Ethereum (ETH) - 0x31Dcb542BA6dDf0b16EcB36B5Aedf14d5CEcB897\n");
        this.echo("Tether (USDT) - 0x96AfE6640a310265D3177eFC3bfEAa0dC6F4e31E\n");
        if (typeof gtag !== 'undefined') gtag('event', 'donate');
    },
    su: function(user) {
        this.echo("Not today, " + sanitizeInput(user));
        if (typeof gtag !== 'undefined') gtag('event', 'su');
    },
    sudo: function(x) {
        this.error("Segmentation fault!");
        if (typeof gtag !== 'undefined') gtag('event', 'sudo');
    },
    cat: function(x) {
        this.error("cat " + sanitizeInput(x) + "?.....If only...");
        if (typeof gtag !== 'undefined') gtag('event', 'cat');
    },
    www: function() {
        this.echo("This page built with <a href='https://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='https://pages.github.com' target='_blank'>GitHub Pages</a>.", { raw: true });
        if (typeof gtag !== 'undefined') gtag('event', 'www');
    },
    id: function() {
        this.echo("uid=0(root) gid=0(root) groups=0(root)");
        if (typeof gtag !== 'undefined') gtag('event', 'id');
    },
    shutdown: function() {
        this.error('SYSTEM HALT!');
        setTimeout(function() { safeRedirect('https://hmpg.net/'); }, 2500);
        if (typeof gtag !== 'undefined') gtag('event', 'shutdown');
    },
    env: function() {
        this.echo("[[b;#66ffff;]NAME=LexieThach\nTITLE=SecurityEngineer;RobotHacker\nMEDIUMBLOG=https://medium.com/@alex.thach3\nGITHUB=https://github.com/Lexicon121\nBLUESKY=@lexiecon.bsky.social\n_=/usr/bin/env]");
        if (typeof gtag !== 'undefined') gtag('event', 'env');
    },
    cv: function() {
        this.echo("Loading my resume");
        setTimeout(function() { safeRedirect('https://lexicon121.github.io/LexieThachWebsite/Alex_Tran_Thach_Resume_v3.pdf'); }, 1000);
        if (typeof gtag !== 'undefined') gtag('event', 'cv');
    },
    oldsite: function() {
        this.echo("Loading my old site...");
        setTimeout(function() { safeRedirect('https://lexicon121.github.io/LexieThachSite/'); }, 1000);
        if (typeof gtag !== 'undefined') gtag('event', 'oldsite');
    },
    github: function() {
        this.echo("Loading my github...");
        setTimeout(function() { safeRedirect('https://github.com/Lexicon121'); }, 1000);
        if (typeof gtag !== 'undefined') gtag('event', 'github');
    },
    clear: function() {
        this.clear();
        if (typeof gtag !== 'undefined') gtag('event', 'clear');
    },
    projects: function() {
        this.echo("Loading my projects...");
        setTimeout(function() { safeRedirect('https://lexicon121.github.io/LexieThachWebsite/Projects.html'); }, 1000);
        if (typeof gtag !== 'undefined') gtag('event', 'projects');
    }
};

function showHelp(consoleObj) {
    consoleObj.echo("Available commands:");
    consoleObj.echo("\t[[b;#66ffff;]blog]              #Visit my blog");
    consoleObj.echo("\t[[b;#66ffff;]clear]             #Clear the console");
    consoleObj.echo("\t[[b;#66ffff;]cv]                #Checkout my resume");
    consoleObj.echo("\t[[b;#66ffff;]donate]            #Support my efforts (BTC)");
    consoleObj.echo("\t[[b;#66ffff;]echo]              #Echo...");
    consoleObj.echo("\t[[b;#66ffff;]env]               #Display environment variables");
    consoleObj.echo("\t[[b;#66ffff;]github]            #Visit my github");
    consoleObj.echo("\t[[b;#66ffff;]help]              #This help message");
    consoleObj.echo("\t[[b;#66ffff;]id]                #Id...");
    consoleObj.echo("\t[[b;#66ffff;]ls]                #Ls...");
    consoleObj.echo("\t[[b;#66ffff;]oldsite]           #Visit my old website");
    consoleObj.echo("\t[[b;#66ffff;]shutdown]          #Shutdown system");
    consoleObj.echo("\t[[b;#66ffff;]whoami]            #Whoami...");
    consoleObj.echo("\t[[b;#66ffff;]www]               #Display information about this site");
}

$(document).ready(function() {
    const isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
    const isTablet = window.matchMedia("only screen and (max-width: 768px)").matches;

    // Simplified greeting for mobile
    const mobileGreeting = "SYSTEM BOOT COMPLETE.............................( OK )\n\n" +
        "Welcome to Lexie Thach's personal website!\n" +
        "Type 'help' for available commands.\n";

    // Full greeting with ASCII art for desktop
    const desktopGreeting = "Starting udev:...................................( OK )\n" +
        "Mount devpts:....................................( OK )\n" +
        "Configure kernel options.........................( OK )\n" +
        "Setting clock: " + Date.now() + ".....................( OK )\n" +
        "SYSTEM BOOT COMPLETE.............................( OK )\n\n\n" +
        "~MOTD~\n" +
        "     ##### /                                                 /###           /  /                             /       \n" +
        "  ######  /                               #                 /  ############/ #/                            #/        \n" +
        " /#   /  /                               ###               /     #########   ##                            ##        \n" +
        "/    /  /                                 #                #     /  #        ##                            ##        \n" +
        "    /  /                                                    ##  /  ##        ##                            ##        \n" +
        "   ## ##              /##   /##    ###  ###       /##          /  ###        ##  /##      /###     /###    ##  /##   \n" +
        "   ## ##             / ### / ###  #### / ###     / ###        ##   ##        ## / ###    / ###  / / ###  / ## / ###  \n" +
        "   ## ##            /   ###   ### /###/   ##    /   ###       ##   ##        ##/   ###  /   ###/ /   ###/  ##/   ### \n" +
        "   ## ##           ##    ###   ##/  ##    ##   ##    ###      ##   ##        ##     ## ##    ## ##         ##     ## \n" +
        "   ## ##           ########     /##       ##   ########       ##   ##        ##     ## ##    ## ##         ##     ## \n" +
        "   #  ##           #######     / ###      ##   #######         ##  ##        ##     ## ##    ## ##         ##     ## \n" +
        "      /            ##         /   ###     ##   ##               ## #      /  ##     ## ##    ## ##         ##     ## \n" +
        "  /##/           / ####    / /     ###    ##   ####    /         ###     /   ##     ## ##    /# ###     /  ##     ## \n" +
        " /  ############/   ######/ /       ### / ### / ######/           ######/    ##     ##  ####/ ## ######/   ##     ## \n" +
        "/     #########      ##### /         ##/   ##/   #####              ###       ##    ##   ###   ## #####     ##    ## \n" +
        "#                                                                                   /                             /  \n" +
        " ##                                                                                /                             /   \n" +
        "                                                                                  /                             /    \n" +
        "                                                                                 /                             /     \n" +
        "Welcome to Lexie Thach's personal website!\n\n" +
        "Quick Commands\n" +
        "\techo          env          help\n" +
        "\tid           ls           whoami\n";

    function startTerminal() {
        try {
            const terminal = $('.terminal').terminal(App, {
                greetings: isMobile ? mobileGreeting : desktopGreeting,
                prompt: function(p) {
                    var path = '~';
                    p(e + ":" + path + "# ");
                },
                onBlur: function() {
                    return false;
                },
                tabcompletion: true,
                scrollOnEcho: true,
                enabled: true,
                onInit: function(term) {
                    // Force resize and repaint
                    term.resize();
                    term.focus();
                }
            });
        } catch(err) {
            console.error('Terminal initialization error:', err);
            // Fallback - show error message
            $('.terminal').html('<div style="color: #0f0; padding: 20px;">Terminal initialization failed. Error: ' + err.message + '</div>');
        }
    }

    // Ensure jQuery Terminal is available before initializing
    if (typeof jQuery !== 'undefined' && jQuery.fn && jQuery.fn.terminal) {
        startTerminal();
    } else {
        console.error('jQuery Terminal is not loaded');
        setTimeout(startTerminal, 500); // Retry after 500ms
    }
});
