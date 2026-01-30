var e = "[[b;#66ffff;]root]@lexiethach.com";
var App = {
    echo: function(text) {
        this.echo(text);
        if (typeof ga !== 'undefined') ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
        showHelp(this);
        if (typeof ga !== 'undefined') ga('send', 'event', 'help');
    },
    ls: function() {
        this.echo('[[b;#66ffff;]autoexec.cfg]');
        this.echo('[[b;#66ffff;]CLASSIFIED.tar.gz]');
        this.echo('[[b;#66ffff;]IAC-2023,80363.matter.pdf]');
        this.echo('[[b;#66ffff;]AlexThachResumev1.docx]');
        this.echo('[[b;#66ffff;]AlexThachFederalResumev1.docx]');
        if (typeof ga !== 'undefined') ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("root");
        if (typeof ga !== 'undefined') ga('send', 'event', 'whoami');
    },
    blog: function() {
        if (typeof ga !== 'undefined') ga('send', 'event', 'blog');
        this.echo("Loading the blog... Wait a sec ...");
        setTimeout(function() { document.location.href = 'https://medium.com/@alex.thach3'; }, 1000);
    },
    publicPGPkey: function() {
        showPGP(this);
        if (typeof ga !== 'undefined') ga('send', 'event', 'publicPGPkey');
    },
    donate: function() {
        this.echo("\nBitcoin (BTC) - 3Pgqkda3w8ZTzBGT5DeLDiWdkgNTNjNxvo\n");
        this.echo("Ethereum (ETH) - 0x31Dcb542BA6dDf0b16EcB36B5Aedf14d5CEcB897\n");
        this.echo("Tether (USDT) - 0x96AfE6640a310265D3177eFC3bfEAa0dC6F4e31E\n");
        if (typeof ga !== 'undefined') ga('send', 'event', 'tip');
    },
    su: function(user) {
        this.echo("Not today, " + user);
        if (typeof ga !== 'undefined') ga('send', 'event', 'su');
    },
    sudo: function(x) {
        this.error("Segmentation fault!");
        if (typeof ga !== 'undefined') ga('send', 'event', 'sudo');
    },
    cat: function(x) {
        this.error("cat " + x + "?.....If only...");
        if (typeof ga !== 'undefined') ga('send', 'event', 'cat');
    },
    www: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>.", { raw: true });
        if (typeof ga !== 'undefined') ga('send', 'event', 'www');
    },
    id: function() {
        this.echo("uid=0(root) gid=0(root) groups=0(root)");
        if (typeof ga !== 'undefined') ga('send', 'event', 'id');
    },
    shutdown: function() {
        this.error('SYSTEM HALT!');
        setTimeout(function() { document.location.href = 'https://hmpg.net/'; }, 2500);
        if (typeof ga !== 'undefined') ga('send', 'event', 'shutdown');
    },
    env: function() {
        this.echo("[[b;#66ffff;]NAME=LexieThach\nTITLE=SecurityEngineer;RobotHacker\nMEDIUMBLOG=https://medium.com/@alex.thach3\nGITHUB=https://github.com/Lexicon121\nBLUESKY=@lexiecon.bsky.social\n_=/usr/bin/env]");
        if (typeof ga !== 'undefined') ga('send', 'event', 'env');
    },
    cv: function() {
        this.echo("Loading my resume");
        setTimeout(function() { document.location.href = 'https://lexicon121.github.io/LexieThachWebsite/Alex_Tran_Thach_Resume_v3.pdf'; }, 1000);
        if (typeof ga !== 'undefined') ga('send', 'event', 'env');
    },
    oldsite: function() {
        this.echo("Loading my old site...");
        setTimeout(function() { document.location.href = 'https://lexicon121.github.io/LexieThachSite/'; }, 1000);
        if (typeof ga !== 'undefined') ga('send', 'event', 'env');
    },
    github: function() {
        this.echo("Loading my github...");
        setTimeout(function() { document.location.href = 'https://github.com/Lexicon121'; }, 1000);
        if (typeof ga !== 'undefined') ga('send', 'event', 'env');
    },
    clear: function() {
        this.clear();
        if (typeof ga !== 'undefined') ga('send', 'event', 'clear');
    },
    projects: function() {
        this.echo("Loading my projects...");
        setTimeout(function() { document.location.href = 'https://lexicon121.github.io/LexieThachWebsite/Projects.html'; }, 1000);
        if (typeof ga !== 'undefined') ga('send', 'event', 'projects');
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

    let termWidth = '600px';
    let termHeight = '400px';

    if (isMobile) {
        termWidth = '100%';
        termHeight = '300px';
    } else if (isTablet) {
        termWidth = '90%';
        termHeight = '400px';
    }

    function startTerminal() {
        const terminal = $('.terminal').terminal(App, {
            width: termWidth,
            height: termHeight,
            greetings: "[[b;#66ffff;]" +
                "Starting udev:...................................( OK )\n" +
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
                "\tid           ls           whoami\n\n" +
                "root]@lexiethach.com:~# env\n[[b;#66ffff;]NAME=LexieThach\nTITLE=SecurityEngineer;RobotHacker\nMEDIUMBLOG=https://medium.com/@alex.thach3\nGITHUB=https://github.com/Lexicon121\nBLUESKY=@lexiecon.bsky.social\n_=/usr/bin/env]",
            prompt: function(p) {
                var path = '~';
                p(e + ":" + path + "# ");
            },
            onBlur: function() {
                // prevent losing focus
                return false;
            },
            tabcompletion: true
        });

        // Automatically focus on the input field
        setTimeout(() => {
            $('.cmd-clipboard').focus();
        }, 100); // slight delay to ensure the focus is applied
    }

    startTerminal();
});
