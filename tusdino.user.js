// ==UserScript==
// @name         ＴｕｓＤｉｎｏ || BEST CHROME DINO GAME T-REX MOD MENU CHEAT - (0.15.1)
// @namespace    https://github.com/nonumbershere/TusDino
// @homepage     https://discord.gg/6eaDrx5J9s
// @version      0.15.1
// @description  THE BEST CHROME DINO HACK: SET SPEED, KILL PLAYER, ESP, NO-CLIP, TRACERS, TELEPORT, FLY +MORE EXPLOITS
// @author       Lapide
// @license      MIT
// @match        *://chromedino.com/*
// @match        *://dino-chrome.com/*
// @match        *://tuckercraig.com/dino/*
// @match        *://elgoog.im/t-rex/*
// @match        *://www.dinogame.net/*
// @match        *://elgoog.im/t-rex/v2/*
// @match        *://nointernetgame.com/*
// @match        *://chromedino.io/
// @match        *://trex-runner.com/*
// @match        *://24glo.com/game/dino-play.html
// @match        *://fivesjs.skipser.com/trex-game/
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @icon         https://github.com/nonumbershere/TusDino/blob/main/assets/Logo.png?raw=true
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
(function() {
    // Loading
 
    // Cheat
    function cont() {
        function applyScript(src) {
            var b = document.createElement('script');
            b.src = src;
            document.body.append(b);
            b.remove();
        }
        const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};
        applyScript('https://cdn.jsdelivr.net/npm/toastify-js');
        var oldKeyDown = Runner.instance_.onKeyDown;
        var oldstartJump = Runner.instance_.tRex.startJump;
        // Addons
        unsafeWindow.tusdino = {
            cheats: {
                autoplayer: false,
                fly: false,
                walk:false,
                allowFlyMode: false,
                rainbowSquarePlayer: false,
                esp: false,
                objectEsp: false,
                tracer: false,
                notifier: false,
                noobstacles: false,
                invisibility: false,
                obstacleBypass: false,
                obstacleFloat: false,
                duckAndJump: false,
                glow: false,
                rainbowglow: false,
                obliterate: false,
                mute: false,
                forcepause: false,
                stormcloud: false,
                airjump: false,
                duckjump: false,
                watermark: true,
                lazervisual: false,
                lazer: false,
                lazerv: false
            },
            onclick: function(id, func) {
                document.getElementById(id).addEventListener('click', function(e) {
                    func(e);
                });
                document.getElementById(id).addEventListener('focus', function() {
                    this.blur();
                })
            },
            saved: {
                clearCanvas: Runner.instance_.clearCanvas,
                gameOver: Runner.instance_.gameOver,
                update: Runner.instance_.update,
                startGame: Runner.instance_.startGame,
                trexDraw: Runner.instance_.tRex.draw,
                playSound: Runner.instance_.playSound,
                addNewObstacle: Runner.instance_.horizon.addNewObstacle,
                CACTUS_LARGE: Runner.instance_.horizon.spritePos.CACTUS_LARGE,
                CACTUS_SMALL: Runner.instance_.horizon.spritePos.CACTUS_SMALL,
                PTERODACTYL: Runner.instance_.horizon.spritePos.PTERODACTYL,
                TREX: Runner.instance_.horizon.spritePos.TREX
            },
            msg: function(text) {
                Toastify({
                    text: text,
                    duration: 2000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#343434",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            },
            setclick: function(id, func) {
                document.getElementById(id, function(e) {
                    func(e);
                })
            },
            config: {
                hotkeys: {
                    togglemenu: "j"
                }
            },
            logs: {
                sent: [],
                default: function(text) {
                    console.log('%c['+'%cTusDino'+'%c] '+'%c'+text, 'color: #2b6eba','color: #2ba5ba','color: #2b6eba', 'color: white');
                    sent.push({type: 'default', text: text});
                },
                success: function(text) {
                    console.log('%c['+'%cTusDinoSuccess'+'%c] '+'%c'+text, 'color: #58ba2b','color: #2bba62','color: #58ba2b', 'color: white');
                    sent.push({type: 'success', text: text});
                },
                error: function(text) {
                    console.log('%c['+'%cTusDinoError'+'%c] '+'%c'+text, 'color: #ba2b2b','color: #ba402b','color: #ba2b2b', 'color: white');
                    sent.push({type: 'error', text: text});
                }
            },
            info: {
                version: '0.15.1',
                description: "The best cheat for almost every chrome dino.",
                name: "TusDino",
            }
        };
        var d = document.createElement('link');
        d.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";
        d.rel = 'stylesheet';
        document.body.append(d);
        var window = unsafeWindow;
        var Update = 2;
        var jum = true;
        var duc = true
        var xSpeed = 1;
        var ySpeed = 1;
        var goflydown = false;
        var goflyup = false;
        var goright = false;
        var goleft = false;
        var tt = true;
        var y = Runner.instance_.tRex.yPos;
        var x = Runner.instance_.tRex.xPos;
        setInterval(function() {
            if (tusdino.cheats.stormcloud) {
                Runner.instance_.horizon.addCloud()
            }
            if (tusdino.cheats.invisibility) {
               Runner.instance_.tRex.spritePos={};
            }
            if (tusdino.cheats.noobstacles) {
                Runner.instance_.horizon.spritePos.CACTUS_LARGE={};
                Runner.instance_.horizon.spritePos.CACTUS_SMALL={};
                Runner.instance_.horizon.spritePos.PTERODACTYL={};
                Runner.instance_.horizon.obstacles = [];
            }
            if (tusdino.cheats.walk) {
                if (goright) {
                    x += xSpeed;
                }
                if (goleft) {
                    x -= xSpeed;
                }
                Runner.instance_.tRex.xPos = x;
            }
            if (tusdino.cheats.fly) {
                if (tt) {
                    if (Runner.instance_.tRex.yPos < 30) {
                        if (Runner.instance_.tRex.yPos != 30) {
                            y += 1
                        } else {
                            tt = false
                        }
                    } else {
                        if (Runner.instance_.tRex.yPos != 30) {
                            y -= 1;
                        } else {
                            tt = false
                        }
                    }
                } else {
                    tusdino.cheats.allowFlyMode = true;
                }
                if (goflyup) {
                    y += ySpeed;
                }
                if (goflydown) {
                    y -= ySpeed;
                }
                Runner.instance_.tRex.yPos = y;
            }
            if (tusdino.cheats.autoplayer) {
                var tRex = Runner.instance_.tRex;
                var obstacles = Runner.instance_.horizon.obstacles;
                if (Runner.instance_.horizon.obstacles[0] && Runner.instance_.horizon.obstacles[0].typeConfig.type == 'PTERODACTYL' && Runner.instance_.horizon.obstacles[0].yPos < 75) {
                    if (!tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                        if (duc) Runner.instance_.tRex.setDuck(true); duc = false;
                        setTimeout(()=>{Runner.instance_.tRex.setDuck(false); duc = true}, 1500);
                    }
                } else {
                    if (obstacles[0] && !tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                        if (jum) {
                            if (duc) duc = false; Runner.instance_.tRex.setDuck(false); duc = true;
                            Runner.instance_.playSound(Runner.instance_.soundFx.BUTTON_PRESS);
                            tRex.startJump(0.5);
                        }
                    }
                }
            }
        }, Update);
 
        Runner.instance_.horizon.addNewObstacle = function(currentSpeed) {
            tusdino.saved.addNewObstacle.bind(this)(currentSpeed);
        }
 
        Runner.instance_.playSound = function(soundBuffer) {
            if (!tusdino.cheats.mute) {
                tusdino.saved.playSound.bind(this)(soundBuffer);
            }
        }
 
        function checkForCollision(obstacle, tRex, opt_canvasCtx) {
        var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos;
        var tRexBox = new CollisionBox(tRex.xPos + 1, tRex.yPos + 1, tRex.config.WIDTH - 2, tRex.config.HEIGHT - 2);
        var obstacleBox = new CollisionBox(obstacle.xPos + 1, obstacle.yPos + 1, obstacle.typeConfig.width * obstacle.size - 2, obstacle.typeConfig.height - 2);
        if (opt_canvasCtx) {
            drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox)
        }
        if (boxCompare(tRexBox, obstacleBox)) {
            var collisionBoxes = obstacle.collisionBoxes;
            var tRexCollisionBoxes = tRex.ducking ? Trex.collisionBoxes.DUCKING : Trex.collisionBoxes.RUNNING;
            for (var t = 0; t < tRexCollisionBoxes.length; t++) {
                for (var i = 0; i < collisionBoxes.length; i++) {
                    var adjTrexBox = createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);
                    var adjObstacleBox = createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);
                    var crashed = boxCompare(adjTrexBox, adjObstacleBox);
                    if (opt_canvasCtx) {
                        drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox)
                    }
                    if (crashed) {
                        return [adjTrexBox, adjObstacleBox]
                    }
                }
            }
        }
        return false
    };
 
    function createAdjustedCollisionBox(box, adjustment) {
        return new CollisionBox(box.x + adjustment.x, box.y + adjustment.y, box.width, box.height)
    };
 
    function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
        canvasCtx.save();
        canvasCtx.strokeStyle = '#f00';
        canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);
        canvasCtx.strokeStyle = '#0f0';
        canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y, obstacleBox.width, obstacleBox.height);
        canvasCtx.restore()
    };
 
    function boxCompare(tRexBox, obstacleBox) {
        var crashed = false;
        var tRexBoxX = tRexBox.x;
        var tRexBoxY = tRexBox.y;
        var obstacleBoxX = obstacleBox.x;
        var obstacleBoxY = obstacleBox.y;
        if (tRexBox.x < obstacleBoxX + obstacleBox.width && tRexBox.x + tRexBox.width > obstacleBoxX && tRexBox.y < obstacleBox.y + obstacleBox.height && tRexBox.height + tRexBox.y > obstacleBox.y) {
            crashed = true
        }
        return crashed
    };
 
    function CollisionBox(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h
    };
        function Trex(canvas, spritePos) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext('2d');
        this.spritePos = spritePos;
        this.xPos = 0;
        this.yPos = 0;
        this.groundYPos = 0;
        this.currentFrame = 0;
        this.currentAnimFrames = [];
        this.blinkDelay = 0;
        this.animStartTime = 0;
        this.timer = 0;
        this.msPerFrame = 1000 / FPS;
        this.config = Trex.config;
        this.status = Trex.status.WAITING;
        this.jumping = false;
        this.ducking = false;
        this.jumpVelocity = 0;
        this.reachedMinHeight = false;
        this.speedDrop = false;
        this.jumpCount = 0;
        this.jumpspotX = 0;
        this.init()
    };
    Trex.config = {
        DROP_VELOCITY: -5,
        GRAVITY: 0.6,
        HEIGHT: 47,
        HEIGHT_DUCK: 25,
        INIITAL_JUMP_VELOCITY: -10,
        INTRO_DURATION: 1500,
        MAX_JUMP_HEIGHT: 30,
        MIN_JUMP_HEIGHT: 30,
        SPEED_DROP_COEFFICIENT: 3,
        SPRITE_WIDTH: 262,
        START_X_POS: 50,
        WIDTH: 44,
        WIDTH_DUCK: 59
    };
    Trex.collisionBoxes = {
        DUCKING: [new CollisionBox(1, 18, 55, 25)],
        RUNNING: [new CollisionBox(22, 0, 17, 16), new CollisionBox(1, 18, 30, 9), new CollisionBox(10, 35, 14, 8), new CollisionBox(1, 24, 29, 5), new CollisionBox(5, 30, 21, 4), new CollisionBox(9, 34, 15, 4)]
    };
    Trex.status = {
        CRASHED: 'CRASHED',
        DUCKING: 'DUCKING',
        JUMPING: 'JUMPING',
        RUNNING: 'RUNNING',
        WAITING: 'WAITING'
    };
    Trex.BLINK_TIMING = 7000;
    Trex.animFrames = {
        WAITING: {
            frames: [44, 0],
            msPerFrame: 1000 / 3
        },
        RUNNING: {
            frames: [88, 132],
            msPerFrame: 1000 / 12
        },
        CRASHED: {
            frames: [220],
            msPerFrame: 1000 / 60
        },
        JUMPING: {
            frames: [0],
            msPerFrame: 1000 / 60
        },
        DUCKING: {
            frames: [262, 321],
            msPerFrame: 1000 / 8
        }
    };
    Trex.prototype = {
        init: function() {
            this.blinkDelay = this.setBlinkDelay();
            this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT - Runner.config.BOTTOM_PAD;
            this.yPos = this.groundYPos;
            this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;
            this.draw(0, 0);
            this.update(0, Trex.status.WAITING)
        },
        setJumpVelocity: function(setting) {
            this.config.INIITAL_JUMP_VELOCITY = -setting;
            this.config.DROP_VELOCITY = -setting / 2
        },
        update: function(deltaTime, opt_status) {
            this.timer += deltaTime;
            if (opt_status) {
                this.status = opt_status;
                this.currentFrame = 0;
                this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
                this.currentAnimFrames = Trex.animFrames[opt_status].frames;
                if (opt_status == Trex.status.WAITING) {
                    this.animStartTime = getTimeStamp();
                    this.setBlinkDelay()
                }
            }
            if (this.playingIntro && this.xPos < this.config.START_X_POS) {
                this.xPos += Math.round((this.config.START_X_POS / this.config.INTRO_DURATION) * deltaTime)
            }
            if (this.status == Trex.status.WAITING) {
                this.blink(getTimeStamp())
            } else {
                this.draw(this.currentAnimFrames[this.currentFrame], 0)
            }
            if (this.timer >= this.msPerFrame) {
                this.currentFrame = this.currentFrame == this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;
                this.timer = 0
            }
            if (this.speedDrop && this.yPos == this.groundYPos) {
                this.speedDrop = false;
                this.setDuck(true)
            }
        },
        draw: function(x, y) {
            var sourceX = x;
            var sourceY = y;
            var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ? this.config.WIDTH_DUCK : this.config.WIDTH;
            var sourceHeight = this.config.HEIGHT;
            if (IS_HIDPI) {
                sourceX *= 2;
                sourceY *= 2;
                sourceWidth *= 2;
                sourceHeight *= 2
            }
            sourceX += this.spritePos.x;
            sourceY += this.spritePos.y;
            if (this.ducking && this.status != Trex.status.CRASHED) {
                this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH_DUCK, this.config.HEIGHT)
            } else {
                if (this.ducking && this.status == Trex.status.CRASHED) {
                    this.xPos++
                }
                this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH, this.config.HEIGHT)
            }
        },
        setBlinkDelay: function() {
            this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING)
        },
        blink: function(time) {
            var deltaTime = time - this.animStartTime;
            if (deltaTime >= this.blinkDelay) {
                this.draw(this.currentAnimFrames[this.currentFrame], 0);
                if (this.currentFrame == 1) {
                    this.setBlinkDelay();
                    this.animStartTime = time
                }
            }
        },
        startJump: function(speed) {
            if (!this.jumping) {
                this.update(0, Trex.status.JUMPING);
                this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
                this.jumping = true;
                this.reachedMinHeight = false;
                this.speedDrop = false
            }
        },
        endJump: function() {
            if (this.reachedMinHeight && this.jumpVelocity < this.config.DROP_VELOCITY) {
                this.jumpVelocity = this.config.DROP_VELOCITY
            }
        },
        updateJump: function(deltaTime, speed) {
            var msPerFrame = Trex.animFrames[this.status].msPerFrame;
            var framesElapsed = deltaTime / msPerFrame;
            if (this.speedDrop) {
                this.yPos += Math.round(this.jumpVelocity * this.config.SPEED_DROP_COEFFICIENT * framesElapsed)
            } else {
                this.yPos += Math.round(this.jumpVelocity * framesElapsed)
            }
            this.jumpVelocity += this.config.GRAVITY * framesElapsed;
            if (this.yPos < this.minJumpHeight || this.speedDrop) {
                this.reachedMinHeight = true
            }
            if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
                this.endJump()
            }
            if (this.yPos > this.groundYPos) {
                this.reset();
                this.jumpCount++
            }
            this.update(deltaTime)
        },
        setSpeedDrop: function() {
            this.speedDrop = true;
            this.jumpVelocity = 1
        },
        setDuck: function(isDucking) {
            if (isDucking && this.status != Trex.status.DUCKING) {
                this.update(0, Trex.status.DUCKING);
                this.ducking = true
            } else if (this.status == Trex.status.DUCKING) {
                this.update(0, Trex.status.RUNNING);
                this.ducking = false
            }
        },
        reset: function() {
            this.yPos = this.groundYPos;
            this.jumpVelocity = 0;
            this.jumping = false;
            this.ducking = false;
            this.update(0, Trex.status.RUNNING);
            this.midair = false;
            this.speedDrop = false;
            this.jumpCount = 0
        }
    };
    function getTimeStamp() {
        //return IS_IOS ? new Date().getTime() : performance.now()
        return new Date().getTime(); // Safari 5.17 Fix 12.06.17
    }
 
        function customUpdate() {
            var sb = document.getElementById("shareBlock");
            sb.style.display = 'none';
            this.drawPending = false;
            var now = getTimeStamp();
            var deltaTime = now - (this.time || now);
            this.time = now;
            if (this.activated) {
                this.clearCanvas();
                if (this.tRex.jumping) {
                    this.tRex.updateJump(deltaTime)
                }
                this.runningTime += deltaTime;
                var hasObstacles = this.runningTime > this.config.CLEAR_TIME;
                if (this.tRex.jumpCount == 1 && !this.playingIntro) {
                    this.playIntro()
                }
                if (this.playingIntro) {
                    this.horizon.update(0, this.currentSpeed, hasObstacles)
                } else {
                    deltaTime = !this.started ? 0 : deltaTime;
                    this.horizon.update(deltaTime, this.currentSpeed, hasObstacles)
                }
                var collision = hasObstacles && checkForCollision(this.horizon.obstacles[0], this.tRex);
                if (!collision) {
                    this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;
                    if (this.currentSpeed < this.config.MAX_SPEED) {
                        this.currentSpeed += this.config.ACCELERATION
                    }
                } else {
                    if (tusdino.cheats.obliterate) {
                        Runner.instance_.horizon.obstacles.length > 0 ? Runner.instance_.horizon.obstacles = Runner.instance_.horizon.obstacles.slice(1,Runner.instance_.horizon.obstacles.length) : "";
                    } else if (tusdino.cheats.obstacleBypass) {
                        Runner.instance_.tRex.xPos+=13
                        setTimeout(()=>{Runner.instance_.tRex.xPos = x;},100);
                    } else {
                        this.gameOver()
                    }
                }
                var playAcheivementSound = this.distanceMeter.update(deltaTime, Math.ceil(this.distanceRan));
                if (playAcheivementSound) {
                    this.playSound(this.soundFx.SCORE)
                }
            }
            if (!this.crashed) {
                this.tRex.update(deltaTime);
                this.raq()
            }
        }
 
        function customRestart() {
            if (!this.raqId) {
                this.playCount++;
                this.runningTime = 0;
                this.activated = true;
                this.crashed = false;
                this.distanceRan = 0;
                this.setSpeed(this.config.SPEED);
                this.time = getTimeStamp();
                this.containerEl.classList.remove(Runner.classes.CRASHED);
                this.clearCanvas();
                this.distanceMeter.reset(this.highestScore);
                this.horizon.reset();
                this.tRex.reset();
                this.playSound(this.soundFx.BUTTON_PRESS);
                this.update();
                x = Runner.instance_.tRex.xPos;
            }
        }
 
        Runner.instance_.restart = function() {
            customRestart.call(Runner.instance_);
        }
 
        if (Runner.instance_.started) {
           Runner.instance_.restart();
        }
 
        Runner.instance_.startGame = function() {
            this.runningTime = 0;
            this.playingIntro = false;
            this.tRex.playingIntro = false;
            this.containerEl.style.webkitAnimation = '';
            this.playCount++;
            document.addEventListener(Runner.events.VISIBILITY, this.onVisibilityChange.bind(this));
            window.addEventListener(Runner.events.BLUR, this.onVisibilityChange.bind(this));
            window.addEventListener(Runner.events.FOCUS, this.onVisibilityChange.bind(this))
            x = Runner.instance_.tRex.xPos;
        }
 
        Runner.instance_.tRex.draw = function(x, y) {
            if (tusdino.cheats.rainbowglow) {
            hslStart = true;
this.canvasCtx.shadowColor=hslCol;
this.canvasCtx.shadowOffsetX=0;
this.canvasCtx.shadowOffsetY=0;
this.canvasCtx.shadowBlur=15;
            }
            if (tusdino.cheats.glow) {
this.canvasCtx.shadowColor='yellow';
this.canvasCtx.shadowOffsetX=0;
this.canvasCtx.shadowOffsetY=0;
this.canvasCtx.shadowBlur=15;
            }
            var sourceX = x;
            var sourceY = y;
            var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ? this.config.WIDTH_DUCK : this.config.WIDTH;
            var sourceHeight = this.config.HEIGHT;
            if (IS_HIDPI) {
                sourceX *= 2;
                sourceY *= 2;
                sourceWidth *= 2;
                sourceHeight *= 2
            }
            sourceX += this.spritePos.x;
            sourceY += this.spritePos.y;
            if (this.ducking && this.status != Trex.status.CRASHED) {
                this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH_DUCK, this.config.HEIGHT)
            } else {
                if (this.ducking && this.status == Trex.status.CRASHED) {
                    this.xPos++
                }
                this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH, this.config.HEIGHT)
            }
            if (tusdino.cheats.rainbowglow) {
this.canvasCtx.shadowColor='';
this.canvasCtx.shadowOffsetX=0;
this.canvasCtx.shadowOffsetY=0;
this.canvasCtx.shadowBlur=0;
            }
            if (tusdino.cheats.glow) {
this.canvasCtx.shadowColor='';
this.canvasCtx.shadowOffsetX=0;
this.canvasCtx.shadowOffsetY=0;
this.canvasCtx.shadowBlur=0;
            }
        }
 
        Runner.instance_.update = function() {
                customUpdate.call(Runner.instance_);
            if (!tusdino.cheats.forcepause) {
                if (tusdino.cheats.obstacleFloat) {
                    if (Runner.instance_.horizon.obstacles[0]) {
                        for (var i in Runner.instance_.horizon.obstacles) {
                            Runner.instance_.horizon.obstacles[i].yPos = 25
                        }
                    }
                }
 
            if (tusdino.cheats.objectEsp) {
                var ctx = Runner.instance_.canvasCtx;
                if (Runner.instance_.horizon.obstacles[0]) {
                   for (var i in Runner.instance_.horizon.obstacles) {
                       ctx.beginPath();
                       ctx.strokeStyle = '#EB5834'
                       ctx.strokeRect(Runner.instance_.horizon.obstacles[i].xPos-8, Runner.instance_.horizon.obstacles[i].yPos-1, Runner.instance_.horizon.obstacles[i].width+2, Runner.instance_.horizon.obstacles[i].typeConfig.height+2);
                       ctx.stroke();
                   }
                }
            }
 
            if (tusdino.cheats.rainbowSquarePlayer) {
                    Runner.instance_.canvasCtx.beginPath();
                hslStart = true;
                Runner.instance_.canvasCtx.fillStyle = hslCol;
                Runner.instance_.canvasCtx.fillRect(Runner.instance_.tRex.xPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.yPos+15 : Runner.instance_.tRex.yPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.WIDTH_DUCK+2 : Runner.instance_.tRex.config.WIDTH+2, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.HEIGHT_DUCK+2 : Runner.instance_.tRex.config.HEIGHT+2);
                    Runner.instance_.canvasCtx.closePath();
            }
 
            if (tusdino.cheats.watermark) {
                var ctx = Runner.instance_.canvasCtx;
                function ff() {
                    ctx.beginPath();
                    ctx.globalAlpha=0.6
                    ctx.fillStyle = '#212121';
                    ctx.fillRect(4,4,70,30);
                    ctx.globalAlpha=1;
                    ctx.closePath();
                }
                function dd() {
                    ctx.beginPath();
                    ctx.globalAlpha=0.6
                    ctx.strokeStyle = "#425AF5";
                    ctx.strokeRect(3,3,72,32);
                    ctx.globalAlpha=1
                    ctx.closePath();
                }
                function hh() {
                    ctx.beginPath();
                    ctx.globalAlpha=1
                    ctx.fillStyle = "#FFFFFF";
                    ctx.font = 'bolder 15px sans-serif'
                    ctx.fillText('TusDino',10, 24, 25252);
                    ctx.globalAlpha=1
                    ctx.closePath();
                }
                dd();
                ff();
                hh()
            }
            if (Runner.instance_.horizon.obstacles[0] && tusdino.cheats.tracer) {
                for (var i in Runner.instance_.horizon.obstacles) {
                    Runner.instance_.canvasCtx.beginPath();
                    hslStart = true;
                    Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+10);
                    Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[i].xPos+10,Runner.instance_.horizon.obstacles[i].yPos+10);
                    Runner.instance_.canvasCtx.strokeStyle = hslCol;
                    Runner.instance_.canvasCtx.stroke();
                }
            }
            if (Runner.instance_.horizon.obstacles[0] && tusdino.cheats.lazervisual) {
                if (!laz) laz = Runner.instance_.horizon.obstacles[0]
                Runner.instance_.canvasCtx.beginPath();
                Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+10);
                Runner.instance_.canvasCtx.lineTo(laz.xPos+10,laz.yPos+10);
                Runner.instance_.canvasCtx.strokeStyle = 'Red';
                Runner.instance_.canvasCtx.stroke();
                if(tusdino.cheats.lazer) Runner.instance_.horizon.obstacles.length > 0 ? Runner.instance_.horizon.obstacles = Runner.instance_.horizon.obstacles.slice(1,Runner.instance_.horizon.obstacles.length) : "";
                tusdino.cheats.lazer = false;
            }
            if (Runner.instance_.horizon.obstacles[0] && tusdino.cheats.notifier) {
                for (var i in Runner.instance_.horizon.obstacles) {
                    Runner.instance_.canvasCtx.beginPath();
                    Runner.instance_.canvasCtx.moveTo(Runner.instance_.horizon.obstacles[i].xPos-70,130);
                    Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[i].xPos-40,130);
                    Runner.instance_.canvasCtx.strokeStyle = 'Blue';
                    Runner.instance_.canvasCtx.stroke();
                }
            }
            if (tusdino.cheats.esp) {
                    Runner.instance_.canvasCtx.beginPath();
                Runner.instance_.canvasCtx.strokeStyle = 'Red';
                Runner.instance_.canvasCtx.rect(Runner.instance_.tRex.xPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.yPos+15 : Runner.instance_.tRex.yPos, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.WIDTH_DUCK+2 : Runner.instance_.tRex.config.WIDTH+2, Runner.instance_.tRex.ducking ? Runner.instance_.tRex.config.HEIGHT_DUCK+2 : Runner.instance_.tRex.config.HEIGHT+2);
                Runner.instance_.canvasCtx.stroke();
            }
            }
        }
 
        // Style and UI
        var StylePanel = document.createElement('style');
        StylePanel.innerHTML = `
        .tradingshow button {
    background: none;
    border: solid 1px #a7a7ff;
    color: #a7a7ff;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    height: 30px;
    float: initial;
    border-radius: 20px;
    padding-left: 18px;
    padding-right: 18px;
        }
#tradingmenuheader {
    line-height: 1.13;
}
        .tradingshow .tradingcheckbox {
            background: none;
    border: solid 1px #1212a5;
    color: #0101ab;
    margin-bottom:5px;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 90px;
    padding-left: 18px;
    padding-right: 18px;
        }
        .tradingshow .tradingcheckbox:hover {
    background: none;
    border: solid 1px #1313b9;
    color: #0404cb;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 90px;
    padding-left: 18px;
    padding-right: 18px;
        }
        .swal2-container {
        z-index: 100000000000000000000;
        }
        .tradingshow button:hover {
    border: solid 1px #7d7dff;
    transition: 0.5s;
    color: #8080ff;
        }
        .tradingshow input::placeholder {
           color: #8272bf;
           opacity:0.8;
           transition:1s;
        }
        .tradingshow input:focus::placeholder {
    color: #86c7ff;
           transition:1s;
        }
        .tradingshow input:focus {
    border-color: #86c7ff;
    transition: 1s;
}
        .tradingshow input {
          padding: 7px;
    transition: 1s;
    outline: none;
    margin-bottom:5px;
          border-radius: 20px;
       border: solid 1px #a7a7ff;
       color: #a7a7ff;
    background: transparent;
    }
        .tradingtab {
    font-weight: 700;
    padding: 0px;
    border-radius: 0px;
    height: -webkit-fill-available;
    width: 100px;
    line-height: 2;
    font-family: system-ui;
                margin:0;
    background: transparent;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-left: solid 1px #9191ff;
    border-right: solid 1px #9191ff;
    color: #855dff;
}
.tradingpage {
    z-index: -1;
    display: none;
}
.tradingshow {
    z-index: 1;
    padding: 10px;
    font-weight: 400;
    display: block;
}
.tradinginputset {
    display: inline-flex;
}
.tradinginputset button {
    margin-bottom:5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.tradinginputset select {
    background: none;
    border: solid 1px #a7a7ff;
    color: #a7a7ff;
    padding: 7px;
    transition: 0.5s;
    cursor: pointer;
    width: 120px;
    outline: none;
    height: 30px;
    float: initial;
    text-align: center;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding-left: 18px;
    padding-right: 18px;
}
#tradingborder {
    background: linear-gradient(45deg, #a9b8ff, #4b10ff);
    height: 2px;
   animation: an 30s ease infinite;
   background-size: 1000% 1000%;
}
 
 
.tradingactive {
 filter: brightness(1.2);
 font-weight: 400;
}
            #tradingmenu {
            color: white;
            font-weight: 400;
            font-size: initial;
            font-family: sans-serif;
            }
            #tradingmenu a {
                color: white;
    text-decoration: underline;
            }
            #tradingmenu *:not(button, input, .tradingtab) {
                cursor:default;
                margin:0;
    box-sizing: revert;
            }
.tradingshow input {
        margin:0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    font-size: 13px;
    box-sizing: revert;
    line-height: 14px;
    cursor: text;
    margin-bottom:5px;
}
        .tradingshow button {
        margin:0;
    font-size: 13px;
    line-height: 14px;
    box-sizing: revert;
        cursor: pointer;
           margin-bottom:5px;
        }`;
        var Panel = document.createElement('div');
        Panel.innerHTML = `<div style="transform: scale(0.8); top: 98px; position: fixed; left: 309px; z-index: 2147483647;" id="tradingmenu">
  <div style="
    height: 353px;
    font-weight: bolder;
    width: 599px;
    background: #1a1a1a;
">
    <div style="">
      <div style="
    font-size: 20px;
    font-family: revert;
    padding-top: 6px;
    padding-left: 6px;
    padding-bottom: 4px;
" id="tradingmenuheader">${tusdino.info.name} - <i style="
    font-size: 16px;
">${tusdino.info.version} [By Lapide]</i><a href="https://discord.gg/6eaDrx5J9s" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 11px;
">Discord</a><a href="https://github.com/nonumbershere/TusDino/" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 10px;
">Github</a><a href="https://www.youtube.com/channel/UCRA3KXViuDmsmfuP0RF45_w?sub_confirmation=1" style="
    font-size: 17px;
    color: lightblue;
    float: right;
    margin-right: 10px;
">YouTube</a>
      </div>
      <div id="tradingborder" style="
"></div>
      <div id="trading_contents" style="">
        <div style="
    height: 44px;
    outline: none;
    display: flex;
    overflow-x: auto;
    background: #16161a;
    border-bottom: solid 2px #6e6dc7;
">
          <button tab="main" title="Cheats that effect the player" class="tradingtab tradingactive">Player</button>
          <button tab="game" title="Cheats that effect the whole game" class="tradingtab">Game</button>
          <button tab="movement" title="Cheats that effect the movement" class="tradingtab">Movement</button>
          <button tab="visual" title="Cheats that effect the visuals of the game" class="tradingtab">Visuals</button>
          <button tab="other" title="Cheats that are unkown or are experimental and random, basically just stuff I made for fun. [WORK IN PROGRESS]" class="tradingtab">Misc</button>
          <button tab="settings" title="Change the settings of cheats or the UI. Or TusDino in general [COMING SOON]" class="tradingtab">Settings</button>
        </div>
        <div style="
    background: #161616;
    height: 265px;
    overflow-y: auto;
" id="tradingtabs">
 
          <div class="tradingshow" id="tradingpagemain" style="">
     <button id="invisibilitycheat" class="tradingcheckbox" title="Makes the player invisible">Invisibility - OFF</button>
    <div class="tradinginputset"><button id="setxaxis" title="Changes the players X axis">Teleport X axis</button><input id="setxaxischeatinput" style="
    width: 78px;" value = "0" placeholder="0"></div>
    <div class="tradinginputset"><button id="setyaxis" title="Changes the players Y axis">Teleport Y axis</button><input id="setyaxischeatinput" style="
    width: 78px;" value = "93" placeholder="93"></div>
 <button id="killplayer" title="Instantly kills your T-Rex player">Kill Player</button>
 <button id="autoplayer" class="tradingcheckbox" title="Make a bot play for you">Autoplayer - OFF</button>
  <div class="tradinginputset"><button id="setgravity" title="Change the gravity of the tRex to whatever you want">Set Gravity</button><input id="setgravitycheatinput" style="
    width: 78px;" value = "0.6" placeholder="0.6"></div>
      <div class="tradinginputset"><button id="setskin" title="Changes the dino skin to a list of skins, this will soon be customizable">Set Skin (Buggy)</button><select id="setskincheatselect">
      <option value="default">Default</option>
      <option value="batman">Batman Colored</option>
      <option value="sonic">Sonic</option>
      <option value="soniccol">Sonic Colored</option>
      <option value="soniccol2">Sonic Colored (2)</option>
      <option value="dinocol">Dino Colored</option>
      <option value="dinocol2">Dino Colored (2)</option>
      <option value="godzilla">Godzilla Colored</option>
      <option value="joker">Joker Colored</option>
      <option value="mario">Mario</option>
      <option value="mariocol">Mario Colored</option>
      <option value="mario2">Mario (2)</option>
      <option value="mariocol2">Mario Colored (2)</option>
      <option value="minecraft">Minecraft</option>
      <option value="naruto">Naruto Colored</option>
      <option value="noface">Noface Halloween</option>
      <option value="nyancat">Nyan Cat</option>
      <option value="pikachu">Pikachu</option>
      <option value="santa">Santa Colored</option>
      <option value="pikachucol">Pikachu Colored</option>
      </select>
      </div>
          </div>
 
          <div class="tradingpage" id="tradingpageother" style="">
 <button id="rainbowbackground" class="tradingcheckbox" title="Make the background become rainbow.">Rainbow Background - OFF</button>
 <button id="rainbowsquareplayer" class="tradingcheckbox" title="Make the player become rainbow square.">Rainbow Square Player - OFF</button>
 <button id="stormcloud" class="tradingcheckbox" title="Continuously spam clouds in the sky">Storm Cloud - OFF</button>
          <p>
          </div>
          <div class="tradingpage" id="tradingpagesettings" style="">
          <p>Coming Soon</p><br><a href="https://github.com/nonumbershere/TusDino/issues">Report an issue</a> • <a href="https://github.com/nonumbershere/TusDino/discussions/new?category=suggestions">Suggest something</a>
          </div>
          <div class="tradingpage" id="tradingpagemovement" style="">
<div class="tradinginputset"><button id="setspeed" title="Sets your players speed, if you put too much it can bug out">Set Speed</button><input id="setspeedcheatinput" style="
    width: 78px;" value = "6.5" placeholder="6.5"></div>
 <button id="fly" class="tradingcheckbox" title="You now have the ability to fly! You can use 'W' to go higher and 'S' to go lower">Fly - OFF</button>
 <button id="highjump" class="tradingcheckbox" title="Makes you jump higher">High Jump - OFF</button>
 <button id="fastfall" class="tradingcheckbox" title="You can fall more faster">Fast Fall - OFF</button>
 <button id="walk" class="tradingcheckbox" title="You now have the ability to get out of the window and walk use 'A' to go left and 'D' to go right">Walk - OFF</button>
 <button id="obstacleBypass" class="tradingcheckbox" title="This cheat makes you zoom thru the obstacles">Obstacle Bypass - OFF</button>
<div class="tradinginputset"><button id="setwalkspeed" title="Set the walk cheats speed">Set Walk Speed (Walk Cheat)</button><input id="setwalkspeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>
 
<div class="tradinginputset"><button id="setflyspeed" title="Set the fly cheats speed">Set Fly Speed (Fly Cheat)</button><input id="setflyspeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>
 <button id="blockyjump" class="tradingcheckbox" title="You can have a robotic jump">Blocky Jump - OFF</button>
 <button id="airjump" class="tradingcheckbox" title="You can jump forever non-stop">Airjump - OFF</button>
          </div>
          <div class="tradingpage" id="tradingpagevisual" style="">
 <button id="esp" class="tradingcheckbox" title="This cheat shows a box around you">ESP - OFF</button>
 <button id="tracers" class="tradingcheckbox" title="Lines go from you to all the obstacles">Tracers - OFF</button>
     <button id="glow" class="tradingcheckbox" title="Makes the player have a yellow glow around them">Glow - OFF</button>
     <button id="rainbowglow" class="tradingcheckbox" title="Makes the player have a rainbow glow around them">Rainbow Glow - OFF</button>
 <button id="jumpnotifier" class="tradingcheckbox" title="Small lines on the screen tell you where to jump">Jump Notifier - OFF</button>
 <button id="watermark" class="tradingcheckbox" title="A watermark to show you're using TusDino">Watermark - ON </button>
 <button id="obstacleesp" class="tradingcheckbox" title="ESP for obstacles">Obstacle ESP - OFF</button>
          </div>
          <div class="tradingpage" id="tradingpagegame" style="">
          <div class="tradinginputset"><button id="setgamespeed" title="Sets your games speed, if you put too much it can bug out">Set Game Speed</button><input id="setgamespeedcheatinput" style="
    width: 78px;" value = "0.001" placeholder="0.001"></div>
 <button id="obstacleFloat" class="tradingcheckbox" title="Makes all near-by obstacles go up in the air">Obstacle Float - OFF</button>
 <button id="duckAndJump" class="tradingcheckbox" title="You can still jump when ducking">Duck and Jump - OFF</button>
 <button id="playingIntro" class="tradingcheckbox" title="Still get scored while your player is inactive">Playing Intro - OFF</button>
                <div style=""class="tradinginputset"><button id="setscore" title="Sets your players score" style="">Set Score</button><input id="setscorecheatinput" style="
    width: 78px;" value = "999999" placeholder="999999"></div>
     <button id="lazervisonkey" class="tradingcheckbox" title="If you press L, it will active lazer vison">Lazer Vision Key (L) - OFF</button>
     <button id="noobstacle" class="tradingcheckbox" title="Removes all obstacles from the game">No Obstacle - OFF</button>
     <button id="lazervison" title="It remove the nearest obstacle, with a lazer">Lazer Vision</button>
 <button id="mutegame" class="tradingcheckbox" title="Use this if you're tired of hearing the sound">Mute Game - OFF</button>
 <button id="forcepausegame" class="tradingcheckbox" title="Need to pause the game and everything in the game? Use this">Force Pause Game - OFF</button>
 <button id="pausegame" class="tradingcheckbox" title="Need to pause the game and everything in the game? Use this">Pause - OFF</button>
     <button id="restartgame" title="Need a restart? Try this">Restart</button>
 <button id="noclip" class="tradingcheckbox" title="You can phase thru any object and enemy">No Clip - OFF</button>
 <button id="obliterate" class="tradingcheckbox" title="When the player collides with the obstacle, the obstacle gets destroyed instead of the player">Obliterate Obstacles - OFF</button>
 <div class="tradinginputset"><button id="setscorespeed" title="This will change how fast your score adds up">Set Score Speed</button><input id="setscorespeedcheatinput" style="
    width: 78px;" value = "1" placeholder="1"></div>
               <button id="addcloud" title="Forces a cloud into the game">Add Cloud</button>
               <button id="removecloud" title="Removes the newest cloud">Remove Cloud</button>
               <button id="removeallcloud" title="Removes all clouds">Remove All Clouds</button>
               <button id="removeallobstacle" title="Removes all near-by obstacles">Remove Near Obstacles</button>
               <button id="removeobstacle" title="Removes the nearest obstacle">Remove Obstacle</button>
               <button id="addobstacle" title="Creates a new obstacle">Add Obstacle</button>
<div class="tradinginputset"><button id="setgroundy" title="Change the Y position of the ground">Set Ground Y</button><input id="setgroundycheatinput" style="
    width: 78px;" value = "93" placeholder="93"></div>
          </div>
 
        </div>
      </div>
    </div>
  </div>
  <div style="
    height: 359px;
    width: 603px;
    top: -3px;
    left: -2px;
    z-index: -1;
    position: inherit;
    background: linear-gradient(45deg, #a9b8ff, #4b10ff);
"></div>
</div>`;
        document.body.prepend(Panel);
        document.body.prepend(StylePanel);
 
        function dragElement(elmnt) {
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }
 
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }
 
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
 
            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
        var hslI = 0;
        var hslCol = 'rgb(0, 74 55)';
        var hslUp = false;
        var hslUp2 = false;
        var laz = false;
        var hslStart = false;
 
        setInterval(()=>{
           if (hslStart) {
    hslUp = hslUp ? hslI > -1 : hslI < 361;
    hslCol = 'rgb('+HSLToRGB(hslI, 74, 55).join(', ')+')';
    if (hslUp) {
        ++hslI;
    } else {
        --hslI;
    }
           }
        });
 
        Runner.instance_.clearCanvas=function(){
            tusdino.saved.clearCanvas.call(this);
        };
        for (var i = 0; i < document.getElementsByClassName('tradingtab').length; ++i) {
            document.getElementsByClassName('tradingtab')[i].addEventListener('click', function() {
                for (var gg = 0; gg < document.getElementsByClassName('tradingshow').length; ++gg) {
                    document.getElementsByClassName('tradingshow')[gg].className = ('tradingpage');
                }
                for (var bb = 0; bb < document.getElementsByClassName('tradingactive').length; ++bb) {
                    document.getElementsByClassName('tradingactive')[bb].className = ('tradingtab');
                }
                // console.log(this);
                this.classList.add('tradingactive')
                document.getElementById('tradingpage' + this.getAttribute('tab')).className = ('tradingshow');
            })
        }
        dragElement(Panel.children[0]);
        var show = false;
        document.addEventListener('keydown', function(e) {
            //console.log(e);
            if (e.key == tusdino.config.hotkeys.togglemenu && e.path[0].tagName != "INPUT") {
                show = !show;
                Panel.style.display = show ? 'block' : 'none';
            }
            if (tusdino.cheats.lazerv) {
                if (e.key == 'l') {
                    tusdino.cheats.lazervisual = true;
                    tusdino.cheats.lazer = true;
                    setTimeout(()=>{tusdino.cheats.lazervisual = false; laz = false;},50);
                }
            }
            if (tusdino.cheats.allowFlyMode) {
                if (e.key == 'w' && e.path[0].tagName != "INPUT") {
                    goflydown = true;
                }
                if (e.key == 's' && e.path[0].tagName != "INPUT") {
                    goflyup = true;
                }
            }
            if (tusdino.cheats.walk) {
                if (e.key == 'd' && e.path[0].tagName != "INPUT") {
                    goright = true;
                }
                if (e.key == 'a' && e.path[0].tagName != "INPUT") {
                    goleft = true;
                }
            }
        })
        document.addEventListener('keyup', function(e) {
            if (tusdino.cheats.allowFlyMode) {
                if (e.key == 'w' && e.path[0].tagName != "INPUT") {
                    goflydown = false;
                }
                if (e.key == 's' && e.path[0].tagName != "INPUT") {
                    goflyup = false;
                }
            }
            if (tusdino.cheats.walk) {
                if (e.key == 'd' && e.path[0].tagName != "INPUT") {
                    goright = false;
                }
                if (e.key == 'a' && e.path[0].tagName != "INPUT") {
                    goleft = false;
                }
            }
        })
 
        // Listeners / Clicks
        tusdino.onclick('killplayer', function() {
            var n = Runner.instance_.gameOver;
            Runner.instance_.gameOver = tusdino.saved.gameOver;
            if (Runner.instance_.gameOver.toString() !== 'function() {}') {
                Runner.instance_.gameOver();
                tusdino.msg("Killed player");
            } else {
                swal.fire({
                    icon: 'error',
                    title: 'Can\'t kill player',
                    text: 'Unable to kill player, can be due to a cheat preventing this being enabled.'
                })
                tusdino.logs.error("Unable to kill dino (killplayer)");
            }
            Runner.instance_.gameOver = n;
        });
        tusdino.onclick('setspeed', function() {
            var inp = parseFloat(document.getElementById('setspeedcheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.setSpeed(inp);
                tusdino.msg("Set speed to "+inp);
            }
        });
        tusdino.onclick('setgamespeed', function() {
            var inp = parseFloat(document.getElementById('setgamespeedcheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.config.ACCELERATION=(inp);
                tusdino.msg("Set game speed to "+inp);
            }
        });
        tusdino.onclick('setscore', function() {
            var inp = parseFloat(document.getElementById('setscorecheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.distanceRan = inp / Runner.instance_.distanceMeter.config.COEFFICIENT;
                tusdino.msg("Set score to "+inp);
            }
        });
        tusdino.onclick('setgroundy', function() {
            var inp = parseFloat(document.getElementById('setgroundycheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.groundYPos = inp;
                Runner.instance_.tRex.startJump(0.5);
                tusdino.msg("Set ground Y to "+inp);
            }
        });
        tusdino.onclick('setscorespeed', function() {
            var inp = parseFloat(document.getElementById('setscorespeedcheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.msPerFrame=inp/2;
                tusdino.msg("Set score speed to "+inp);
            }
        });
        tusdino.onclick('setxaxis', function() {
            var inp = parseFloat(document.getElementById('setxaxischeatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.xPos = inp;
                tusdino.msg("Set X axis to "+inp);
            }
        });
        tusdino.onclick('setyaxis', function() {
            var inp = parseFloat(document.getElementById('setyaxischeatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.yPos = inp;
                tusdino.msg("Set Y axis to "+inp);
            }
        });
        tusdino.onclick('setgravity', function() {
            var inp = parseFloat(document.getElementById('setgravitycheatinput').value);
            if (!isNaN(inp)) {
                Runner.instance_.tRex.config.GRAVITY=inp
                tusdino.msg("Set gravity to "+inp);
            }
        });
        tusdino.onclick('setwalkspeed', function() {
            var inp = parseFloat(document.getElementById('setwalkspeedcheatinput').value);
            if (!isNaN(inp)) {
                xSpeed=inp
                tusdino.msg("Set walk speed to "+inp);
            }
        });
        tusdino.onclick('setflyspeed', function() {
            var inp = parseFloat(document.getElementById('setflyspeedcheatinput').value);
            if (!isNaN(inp)) {
                ySpeed=inp
                tusdino.msg("Set fly speed to "+inp);
            }
        });
 
        let setSkin = function(x1, x2) {
            let x_1 = document.getElementById('offline-resources-1x');
            let x_2 = document.getElementById('offline-resources-2x');
            if (x1) x_1.src = x1;
            if (x2) x_2.src = x2;
        }
 
        var skins = {
            'default': 'https://github.com/nonumbershere/TusDino/blob/main/skins/default.png?raw=true',
            'batman': 'https://github.com/nonumbershere/TusDino/blob/main/skins/batman%20colored.png?raw=true',
            'dinocol2': 'https://github.com/nonumbershere/TusDino/blob/main/skins/dino%20colored%202.png?raw=true',
            'dinocol': 'https://github.com/nonumbershere/TusDino/blob/main/skins/dino%20colored.png?raw=true',
            'godzilla': 'https://github.com/nonumbershere/TusDino/blob/main/skins/godzilla.png?raw=true',
            'joker': 'https://github.com/nonumbershere/TusDino/blob/main/skins/joker.png?raw=true',
            'mario2': 'https://github.com/nonumbershere/TusDino/blob/main/skins/mario%202.png?raw=true',
            'mariocol2': 'https://github.com/nonumbershere/TusDino/blob/main/skins/mario%20colored%202.png?raw=true',
            'mariocol': 'https://github.com/nonumbershere/TusDino/blob/main/skins/mario%20colored.png?raw=true',
            'mario': 'https://github.com/nonumbershere/TusDino/blob/main/skins/mario.png?raw=true',
            'minecraft': 'https://github.com/nonumbershere/TusDino/blob/main/skins/minecraft.png?raw=true',
            'naruto': 'https://github.com/nonumbershere/TusDino/blob/main/skins/naruto%20colored.png?raw=true',
            'noface': 'https://github.com/nonumbershere/TusDino/blob/main/skins/noface%20halloween.png?raw=true',
            'nyancat': 'https://github.com/nonumbershere/TusDino/blob/main/skins/nyan%20cat.png?raw=true',
            'pikachu': 'https://github.com/nonumbershere/TusDino/blob/main/skins/pikachu.png?raw=true',
            'santa': 'https://github.com/nonumbershere/TusDino/blob/main/skins/santa%20colored.png?raw=true',
            'soniccol2': 'https://github.com/nonumbershere/TusDino/blob/main/skins/sonic%20colored%202.png?raw=true',
            'soniccol': 'https://github.com/nonumbershere/TusDino/blob/main/skins/sonic%20colored.png?raw=true',
            'sonic': 'https://github.com/nonumbershere/TusDino/blob/main/skins/sonic.png?raw=true'
        };
 
        function setSki(i) {
            setSkin(skins[i]);
        }
        tusdino.onclick('setskin', function() {
            var inp = (document.getElementById('setskincheatselect').value);
            setSki(inp);
            var jsf = false;
            for (var i in document.querySelector("#setskincheatselect").children) {
                if (document.querySelector("#setskincheatselect").children[i].value == document.querySelector("#setskincheatselect").value) {
                    jsf = document.querySelector("#setskincheatselect").children[i].innerText;
                }
            }
            if (jsf) {
                tusdino.msg('Set skin to '+jsf+' [NOTE: SKINS MIGHT BE BUGGY]');
            }
        });
        var noclip = false;
        tusdino.onclick('noclip', function() {
            noclip = !noclip;
            if (noclip) {
                Runner.instance_.gameOver = function() {}
                document.getElementById('noclip').innerText = "No Clip - ON ";
                tusdino.msg("Enabled No-Clip");
            } else {
                Runner.instance_.gameOver = tusdino.saved.gameOver;
                document.getElementById('noclip').innerText = "No Clip - OFF";
                tusdino.msg("Disabled No-Clip");
            }
        });
        var blockyjump = false;
        tusdino.onclick('blockyjump', function() {
            blockyjump = !blockyjump;
            if (blockyjump) {
                Runner.instance_.tRex.config.DROP_VELOCITY = 2;
                document.getElementById('blockyjump').innerText = "Blocky Jump - ON ";
                tusdino.msg("Enabled Blocky Jump");
            } else {
                Runner.instance_.tRex.config.DROP_VELOCITY = -5;
                document.getElementById('blockyjump').innerText = "Blocky Jump - OFF";
                tusdino.msg("Disabled Blocky Jump");
            }
        });
        var highjump = false;
        tusdino.onclick('highjump', function() {
            highjump = !highjump;
            if (highjump) {
                Runner.instance_.tRex.setJumpVelocity(14)
                document.getElementById('highjump').innerText = "High Jump - ON ";
                tusdino.msg("Enabled High Jump");
            } else {
                Runner.instance_.tRex.setJumpVelocity(10);
                document.getElementById('highjump').innerText = "High Jump - OFF";
                tusdino.msg("Disabled High Jump");
            }
        });
        var pausegame = false;
        tusdino.onclick('pausegame', function() {
            pausegame = !pausegame;
            if (pausegame) {
                Runner.instance_.stop();
                document.getElementById('pausegame').innerText = "Pause - ON ";
                tusdino.msg("Enabled Pause");
            } else {
                Runner.instance_.play();
                document.getElementById('pausegame').innerText = "Pause - OFF";
                tusdino.msg("Disabled Pause");
            }
        });
        tusdino.onclick('forcepausegame', function() {
            tusdino.cheats.forcepause = !tusdino.cheats.forcepause;
            if (tusdino.cheats.forcepause) {
                document.getElementById('forcepausegame').innerText = "Force Pause - ON ";
                tusdino.msg("Enabled Force Pause");
            } else {
                Runner.instance_.play();
                document.getElementById('forcepausegame').innerText = "Force Pause - OFF";
                tusdino.msg("Disabled Force Pause");
            }
        });
        tusdino.onclick('restartgame', function() {
            Runner.instance_.restart();
            tusdino.msg("Restarted the gmae")
        });
        tusdino.onclick('mutegame', function() {
            tusdino.cheats.mute = !tusdino.cheats.mute;
            if (tusdino.cheats.mute) {
                document.getElementById('mutegame').innerText = "Mute Game - ON ";
                tusdino.msg("Enabled Mute");
            } else {
                document.getElementById('mutegame').innerText = "Mute Game - OFF";
                tusdino.msg("Disabled Mute");
            }
        });
        tusdino.onclick('rainbowsquareplayer', function() {
            tusdino.cheats.rainbowSquarePlayer = !tusdino.cheats.rainbowSquarePlayer;
            if (tusdino.cheats.rainbowSquarePlayer) {
                document.getElementById('rainbowsquareplayer').innerText = "Rainbow Square Player - ON ";
                tusdino.msg("Enabled Rainbow Square Player");
            } else {
                hslStart = false;
                document.getElementById('rainbowsquareplayer').innerText = "Rainbow Square Player - OFF";
                tusdino.msg("Disabled Rainbow Square Player");
            }
        });
        var rainbowbackground = false;
 
        var oldtrans = document.body.transition;
               var oldbg = document.body.background;
      function flash() {
            if (rainbowbackground) {
        document.body.style.transition = '2s ease 0s';
        document.body.style.background = 'red';
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'red';
            }
        }, 1000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'orange';
            }
        }, 2000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'yellow';
            }
        }, 3000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'white';
            }
        }, 4000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'green';
            }
        }, 5000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'blue';
            }
        }, 6000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'darkblue';
            }
        }, 7000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'black';
            }
        }, 8000);
        setTimeout(function () {
            if (rainbowbackground) {
          document.body.style.background = 'red';
            }
        }, 9000);
        setTimeout(function () {
            if (rainbowbackground) {
          flash();
            }
        }, 9000);
        }
      }
        tusdino.onclick('rainbowbackground', function() {
            rainbowbackground = !rainbowbackground;
            if (rainbowbackground) {
                flash();
                document.getElementById('rainbowbackground').innerText = "Rainbow Background - ON ";
                tusdino.msg("Enabled Rainbow Background");
            } else {
                window.oldbg = oldbg;
                document.body.style.background = oldbg;
                document.body.style.transition = oldtrans;
                document.getElementById('rainbowbackground').innerText = "Rainbow Background - OFF";
                tusdino.msg("Disabled Rainbow Background");
            }
        });
        var fastfall = false;
                Runner.instance_.tRex.startJump = function(speed) {
                    if (this.airjump) {
                    this.jumping = false;
                    if (!this.jumping) {
                        this.update(0, 'JUMPING');
                        // Tweak the jump velocity based on the speed.
                        this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
                        this.jumping = true;
                        this.reachedMinHeight = false;
                        this.speedDrop = false;
                    }
                    } else {
                         this.jumping = false;
                    if (!this.jumping) {
                        this.update(0, 'JUMPING');
                        // Tweak the jump velocity based on the speed.
                        this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
                        this.jumping = true;
                        this.reachedMinHeight = false;
                        this.speedDrop = false;
                    }
                    }
                }
        tusdino.onclick('fastfall', function() {
            fastfall = !fastfall;
            if (fastfall) {
                Runner.instance_.tRex.config.DROP_VELOCITY = 12;
                document.getElementById('fastfall').innerText = "Fast Fall - ON ";
                tusdino.msg("Enabled Fast Fall");
            } else {
                Runner.instance_.tRex.config.DROP_VELOCITY = -5;
                document.getElementById('fastfall').innerText = "Fast Fall - OFF";
                tusdino.msg("Disabled Fast Fall");
            }
        });
                var IS_HIDPI = window.devicePixelRatio > 1;
 
                /** @const */
                var IS_IOS = window.navigator.userAgent.indexOf('CriOS') > -1 ||
                    window.navigator.userAgent == 'UIWebViewForStaticFileContent';
 
                /** @const */
                var IS_MOBILE = window.navigator.userAgent.indexOf('Mobi') > -1 || IS_IOS;
 
                /** @const */
                var IS_TOUCH_ENABLED = 'ontouchstart' in window;
                Runner.instance_.onKeyDown = function(e) {
                    // Prevent native page scrolling whilst tapping on mobile.
                    if (IS_MOBILE) {
                        e.preventDefault();
                    }
 
                    // if (e.target != this.detailsButton) {
                    if (!this.crashed && (Runner.keycodes.JUMP[e.keyCode] ||
                                          e.type == Runner.events.TOUCHSTART || e.type == Runner.events.GAMEPADCONNECTED)) {
                        if (!this.activated) {
                            this.loadSounds();
                            this.activated = true;
                            // errorPageController.trackEasterEgg();
                        }
 
                        if ((tusdino.cheats.airjump ? true : !this.tRex.jumping) && (tusdino.cheats.duckAndJump ? true : !this.tRex.ducking)) {
                            this.playSound(this.soundFx.BUTTON_PRESS);
                            this.tRex.startJump(this.currentSpeed);
                        }
                    }
 
                    if (this.crashed && e.type == Runner.events.TOUCHSTART &&
                        e.currentTarget == this.containerEl) {
                        this.restart();
                    }
                    // }
 
                    if (this.activated && !this.crashed && Runner.keycodes.DUCK[e.keyCode]) {
                        e.preventDefault();
                        if (this.tRex.jumping) {
                            // Speed drop, activated only when jump key is not pressed.
                            this.tRex.setSpeedDrop();
                        } else if (!this.tRex.ducking) {
                            // Duck.
                            this.tRex.setDuck(true);
                        }
                    }
                }
        tusdino.onclick('airjump', function() {
            tusdino.cheats.airjump = !tusdino.cheats.airjump;
            if (tusdino.cheats.airjump) {
                document.getElementById('airjump').innerText = "Airjump - ON ";
                tusdino.msg("Enabled Airjump");
            } else {
                document.getElementById('airjump').innerText = "Airjump - OFF";
                tusdino.msg("Disabled Airjump");
            }
        });
        tusdino.onclick('autoplayer', function() {
            tusdino.cheats.autoplayer = !tusdino.cheats.autoplayer;
            if (tusdino.cheats.autoplayer) {
                document.getElementById('autoplayer').innerText = "Autoplayer - ON ";
                tusdino.msg("Enabled Autoplayer");
            } else {
                document.getElementById('autoplayer').innerText = "Autoplayer - OFF";
                tusdino.msg("Disabled Autoplayer");
            }
        });
        tusdino.onclick('jumpnotifier', function() {
            tusdino.cheats.notifier = !tusdino.cheats.notifier;
            if (tusdino.cheats.notifier) {
                document.getElementById('jumpnotifier').innerText = "Jump Notifier - ON ";
                tusdino.msg("Enabled Jump Notifier");
            } else {
                document.getElementById('jumpnotifier').innerText = "Jump Notifier - OFF";
                tusdino.msg("Disabled Jump Notifier");
            }
        });
        tusdino.onclick('walk', function() {
            tusdino.cheats.walk = !tusdino.cheats.walk;
            if (tusdino.cheats.walk) {
                document.getElementById('walk').innerText = "Walk - ON ";
                tusdino.msg("Enabled Walk");
            } else {
                x = Runner.instance_.tRex.xPos;
                document.getElementById('walk').innerText = "Walk - OFF";
                tusdino.msg("Disabled Walk");
            }
        });
        tusdino.onclick('obstacleesp', function() {
            tusdino.cheats.objectEsp = !tusdino.cheats.objectEsp;
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
    }
 
    // Detects if Runner exists when the script has loaded. If not, it will wait for the page to load.
    if (typeof Runner != typeof undefined) {
        cont();
    } else {
        window.addEventListener('load', function() {
             cont();
        });
    }
 
    // Code to run when page loaded
    window.addEventListener('load', function() {
    });
})();