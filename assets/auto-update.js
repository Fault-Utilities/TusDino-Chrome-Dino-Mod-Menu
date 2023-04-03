            if (tusdino.cheats.objectEsp) {
                document.getElementById('obstacleesp').innerText = "Obstacle ESP - ON ";
                tusdino.msg("Enabled Obstacle ESP");
            } else {
                document.getElementById('obstacleesp').innerText = "Obstacle ESP - OFF";
                tusdino.msg("Disabled Obstacle ESP");
            }
        });
        tusdino.onclick('tracers', function() {
            tusdino.cheats.tracer = !tusdino.cheats.tracer;
            if (tusdino.cheats.tracer) {
                document.getElementById('tracers').innerText = "Tracers - ON ";
                tusdino.msg("Enabled Tracers");
            } else {
                hslStart = false;
                document.getElementById('tracers').innerText = "Tracers - OFF";
                tusdino.msg("Disabled Tracers");
            }
        });
        tusdino.onclick('lazervisonkey', function() {
            tusdino.cheats.lazerv = !tusdino.cheats.lazerv;
            if (tusdino.cheats.lazerv) {
                document.getElementById('lazervisonkey').innerText = "Lazer Vison Key (L) - ON ";
                tusdino.msg("Enabled Lazer Vison Key");
            } else {
                hslStart = false;
                document.getElementById('lazervisonkey').innerText = "Lazer Vison Key (L) - OFF";
                tusdino.msg("Disabled Lazer Vison Key");
            }
        });
        tusdino.onclick('lazervison', function() {
            tusdino.cheats.lazervisual = true;
            tusdino.cheats.lazer = true;
            setTimeout(()=>{tusdino.cheats.lazervisual = false; laz = false;},50);
            tusdino.msg("Shot a lazer");
        });
        tusdino.onclick('esp', function() {
            tusdino.cheats.esp = !tusdino.cheats.esp;
            if (tusdino.cheats.esp) {
                document.getElementById('esp').innerText = "ESP - ON ";
                tusdino.msg("Enabled ESP");
            } else {
                document.getElementById('esp').innerText = "ESP - OFF";
                tusdino.msg("Disabled ESP");
            }
        });
        tusdino.onclick('fly', function() {
            tusdino.cheats.fly = !tusdino.cheats.fly;
            if (tusdino.cheats.fly) {
                y = Runner.instance_.tRex.yPos;
                x = Runner.instance_.tRex.xPos;
                document.getElementById('fly').innerText = "Fly - ON ";
                tusdino.msg("Enabled Fly");
            } else {
                tt = true;
                Runner.instance_.tRex.startJump(0.5);
                y = 96;
                document.getElementById('fly').innerText = "Fly - OFF";
                tusdino.msg("Disabled Fly");
            }
        });
        tusdino.onclick('stormcloud', function() {
            tusdino.cheats.stormcloud = !tusdino.cheats.stormcloud;
            if (tusdino.cheats.stormcloud) {
                document.getElementById('stormcloud').innerText = "Storm Cloud - ON ";
                tusdino.msg("Enabled Storm Cloud");
            } else {
                document.getElementById('stormcloud').innerText = "Storm Cloud - OFF";
                tusdino.msg("Disabled Storm Cloud");
            }
        });
        tusdino.onclick('noobstacle', function() {
            tusdino.cheats.noobstacles = !tusdino.cheats.noobstacles;
            if (tusdino.cheats.noobstacles) {
                document.getElementById('noobstacle').innerText = "No Obstacle - ON ";
                tusdino.msg("Enabled No Obstacle");
            } else {
                 Runner.instance_.horizon.spritePos.CACTUS_LARGE=tusdino.saved.CACTUS_LARGE;
                Runner.instance_.horizon.spritePos.CACTUS_SMALL=tusdino.saved.CACTUS_SMALL;
                Runner.instance_.horizon.spritePos.PTERODACTYL=tusdino.saved.PTERODACTYL;
                document.getElementById('noobstacle').innerText = "No Obstacle - OFF";
                tusdino.msg("Disabled No Obstacle");
            }
        });
        tusdino.onclick('obliterate', function() {
            tusdino.cheats.obliterate = !tusdino.cheats.obliterate;
            if (tusdino.cheats.obliterate) {
                document.getElementById('obliterate').innerText = "Obliterate Obstacles - ON ";
                tusdino.msg("Enabled Obliterate Obstacles");
            } else {
                document.getElementById('obliterate').innerText = "Obliterate Obstacles - OFF";
                tusdino.msg("Disabled Obliterate Obstacles");
            }
        });
        tusdino.onclick('invisibilitycheat', function() {
            tusdino.cheats.invisibility = !tusdino.cheats.invisibility;
            if (tusdino.cheats.invisibility) {
                document.getElementById('invisibilitycheat').innerText = "Invisibility - ON ";
                tusdino.msg("Enabled Invisibility");
            } else {
                Runner.instance_.tRex.spritePos={x: 677, y: 2}
                document.getElementById('invisibilitycheat').innerText = "Invisibility - OFF";
                tusdino.msg("Disabled Invisibility");
            }
        });
        tusdino.onclick('obstacleBypass', function() {
            tusdino.cheats.obstacleBypass = !tusdino.cheats.obstacleBypass;
            if (tusdino.cheats.obstacleBypass) {
                document.getElementById('obstacleBypass').innerText = "Obstacle Bypass - ON ";
                tusdino.msg("Enabled Obstacle Bypass");
            } else {
                Runner.instance_.tRex.spritePos={x: 677, y: 2}
                document.getElementById('obstacleBypass').innerText = "Obstacle Bypass - OFF";
                tusdino.msg("Disabled Obstacle Bypass");
            }
        });
        tusdino.onclick('duckAndJump', function() {
            tusdino.cheats.duckAndJump = !tusdino.cheats.duckAndJump;
            if (tusdino.cheats.duckAndJump) {
                document.getElementById('duckAndJump').innerText = "Duck and Jump - ON ";
                tusdino.msg("Enabled Duck and Jump");
            } else {
                document.getElementById('duckAndJump').innerText = "Duck and Jump - OFF";
                tusdino.msg("Disabled Duck and Jump");
            }
        });
        tusdino.onclick('playingIntro', function() {
            Runner.instance_.playingIntro = !Runner.instance_.playingIntro;
            if (Runner.instance_.playingIntro) {
                document.getElementById('playingIntro').innerText = "Playing Intro - ON ";
                tusdino.msg("Enabled Playing Intro");
            } else {
                document.getElementById('playingIntro').innerText = "Playing Intro - OFF";
                tusdino.msg("Disabled Playing Intro");
            }
        });
        tusdino.onclick('watermark', function() {
            tusdino.cheats.watermark = !tusdino.cheats.watermark;
            if (tusdino.cheats.watermark) {
                document.getElementById('watermark').innerText = "Watermark - ON ";
                tusdino.msg("Enabled Watermark");
            } else {
                document.getElementById('watermark').innerText = "Watermark - OFF";
                tusdino.msg("Disabled Watermark");
            }
        });
        tusdino.onclick('obstacleFloat', function() {
            tusdino.cheats.obstacleFloat = !tusdino.cheats.obstacleFloat;
            if (tusdino.cheats.obstacleFloat) {
                document.getElementById('obstacleFloat').innerText = "Obstacle Float - ON ";
                tusdino.msg("Enabled Obstacle Float");
            } else {
                document.getElementById('obstacleFloat').innerText = "Obstacle Float - OFF";
                tusdino.msg("Disabled Obstacle Float");
            }
        });
        tusdino.onclick('rainbowglow', function() {
            tusdino.cheats.rainbowglow = !tusdino.cheats.rainbowglow;
            if (tusdino.cheats.rainbowglow) {
                document.getElementById('rainbowglow').innerText = "Rainbow Glow - ON ";
                tusdino.msg("Enabled Rainbow Glow");
            } else {
                document.getElementById('rainbowglow').innerText = "Rainbow Glow - OFF";
                tusdino.msg("Disabled Rainbow Glow");
            }
        });
        tusdino.onclick('glow', function() {
            tusdino.cheats.glow = !tusdino.cheats.glow;
            if (tusdino.cheats.glow) {
                document.getElementById('glow').innerText = "Glow - ON ";
                tusdino.msg("Enabled Glow");
            } else {
                document.getElementById('glow').innerText = "Glow - OFF";
                tusdino.msg("Disabled Glow");
            }
        });
        tusdino.onclick('bhop', function() {
            tusdino.cheats.bhop = !tusdino.cheats.bhop;
            if (tusdino.cheats.bhop) {
                document.getElementById('bhop').innerText = "Bhop - ON ";
                tusdino.msg("Enabled Bhop");
            } else {
                document.getElementById('bhop').innerText = "Bhop - OFF";
                tusdino.msg("Disabled Bhop");
            }
        });
        tusdino.onclick('tradingcredits', function() {
            tusdino.alert("TusDino Credits", "Owners & Developers\n_____________________\nLapide: Main Developer & Coder\n\nContributors\n_____________________\ninon13: Created and suggested a few modules.".replaceAll('\n', '<br>'))
        });
        tusdino.onclick('removeallcloud', function() {
            Runner.instance_.horizon.clouds=[];
            tusdino.msg("Removed all clouds");
        });
        tusdino.onclick('addcloud', function() {
            Runner.instance_.horizon.addCloud();
            tusdino.msg("Added one cloud");
        });
        tusdino.onclick('removecloud', function() {
            Runner.instance_.horizon.clouds.length > 0 ? Runner.instance_.horizon.clouds = Runner.instance_.horizon.clouds.slice(0,Runner.instance_.horizon.clouds.length-1) : "";
            tusdino.msg("Removed one cloud");
        });
        tusdino.onclick('removeallobstacle', function() {
            Runner.instance_.horizon.obstacles=[]
            tusdino.msg("Removed all obstacles");
        });
        tusdino.onclick('addobstacle', function() {
            Runner.instance_.horizon.addNewObstacle(Runner.instance_.currentSpeed);
            tusdino.msg("Added one obstacle");
        });
        tusdino.onclick('removeobstacle', function() {
            Runner.instance_.horizon.obstacles.length > 0 ? Runner.instance_.horizon.obstacles = Runner.instance_.horizon.obstacles.slice(1,Runner.instance_.horizon.obstacles.length) : "";
            tusdino.msg("Removed one obstacle");
        });
        tusdino.logs.success("Successfully loaded "+atob("VHVzRGlubw==")+"!");
    }

    setTimeout(()=>{
    // Detects if Runner exists when the script has loaded. If not, it will wait for the page to load.
    if (typeof Runner != typeof undefined) {
        cont();
    } else {
        window.addEventListener('load', function() {
             cont();
        });
    }
    },500);

    // Code to run when page loaded
    window.addEventListener('load', function() {
    });
})();
