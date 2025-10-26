// Get all DOM elements
const startButton = document.getElementById('startButton');
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const fillerMusic = document.getElementById('fillerMusic');
const elevatorContainer = document.getElementById('elevatorContainer');
const backgroundTexture = document.getElementById('backgroundTexture');
const screechSound = document.getElementById('screechSound');
const screechSound1 = document.getElementById('screechSound1');
const screechSound2 = document.getElementById('screechSound2');
const screechSound3 = document.getElementById('screechSound3');
const screechSound4 = document.getElementById('screechSound4');
const clickSound = document.getElementById('clickSound');
const elevatorLightOverlay = document.getElementById('elevatorLightOverlay');
const lightCircle = document.getElementById('lightCircle');
const jumpscare = document.getElementById('jumpscare');
const jumpscareSound = document.getElementById('jumpscareSound');
const jumpscareSound2 = document.getElementById('jumpscareSound2');
const jumpscareSound3 = document.getElementById('jumpscareSound3');
const jumpscareSound4 = document.getElementById('jumpscareSound4');
const jumpscareSound5 = document.getElementById('jumpscareSound5');
const jumpscare2 = document.getElementById('jumpscare2');
const jumpscareSound2_1 = document.getElementById('jumpscareSound2_1');
const jumpscareSound2_2 = document.getElementById('jumpscareSound2_2');
const jumpscareSound2_3 = document.getElementById('jumpscareSound2_3');
const jumpscareSound2_4 = document.getElementById('jumpscareSound2_4');
const jumpscareSound2_5 = document.getElementById('jumpscareSound2_5');
const jumpscare3 = document.getElementById('jumpscare3');
const jumpscare4 = document.getElementById('jumpscare4');
const jumpscareSound3_1 = document.getElementById('jumpscareSound3_1');
const jumpscareSound3_2 = document.getElementById('jumpscareSound3_2');
const jumpscareSound3_3 = document.getElementById('jumpscareSound3_3');
const jumpscareSound3_4 = document.getElementById('jumpscareSound3_4');
const jumpscareSound3_5 = document.getElementById('jumpscareSound3_5');
const horrorMusic = document.getElementById('horrorMusic');
const openDoorButton = document.getElementById('openDoorButton');
const doorGameContainer = document.getElementById('doorGameContainer');
const typewriterText = document.getElementById('typewriterText');
const doorImageContainer = document.getElementById('doorImageContainer');
const doorLeft = document.getElementById('doorLeft');
const doorMiddle = document.getElementById('doorMiddle');
const doorRight = document.getElementById('doorRight');
const redlightGameContainer = document.getElementById('redlightGameContainer');
const lightIndicator = document.getElementById('lightIndicator');
const playerSprite = document.getElementById('playerSprite');
const progressFill = document.getElementById('progressFill');
const cameraJumpscare = document.getElementById('cameraJumpscare');
const cameraVideo = document.getElementById('cameraVideo');
const effectsCanvas = document.getElementById('effectsCanvas');
const effectsCtx = effectsCanvas.getContext('2d');
const gunshotSound = document.getElementById('gunshotSound');
const phoneGameContainer = document.getElementById('phoneGameContainer');
const phoneSprite = document.getElementById('phoneSprite');
const phoneRingSound = document.getElementById('phoneRingSound');
const phoneAudio = document.getElementById('phoneAudio');
const heavyBreathing1 = document.getElementById('heavyBreathing1');
const heavyBreathing2 = document.getElementById('heavyBreathing2');
const heavyBreathing3 = document.getElementById('heavyBreathing3');
const suspenseMusic = document.getElementById('suspenseMusic');
const shootingGalleryContainer = document.getElementById('shootingGalleryContainer');
const targetsContainer = document.getElementById('targetsContainer');
const gunSprite = document.getElementById('gunSprite');
const midnightCarouselMusic = document.getElementById('midnightCarouselMusic');
const blinkGameContainer = document.getElementById('blinkGameContainer');
const blinkMonster = document.getElementById('blinkMonster');
const blinkWarning = document.getElementById('blinkWarning');
const blinkDistance = document.getElementById('blinkDistance');
const blinkScreachSound = document.getElementById('blinkScreachSound');
const blinkGameMusic = document.getElementById('blinkGameMusic');
const cookieMusic = document.getElementById('cookieMusic');
const redlightMusic = document.getElementById('redlightMusic');
const rpgFireSound = document.getElementById('rpgFireSound');
const endMusic = document.getElementById('endMusic');
const creditsContainer = document.getElementById('creditsContainer');
const creditsContainerRight = document.getElementById('creditsContainerRight');
const fadeToBlack = document.getElementById('fadeToBlack');
const glitchSound1 = document.getElementById('glitchSound1');
const glitchSound2 = document.getElementById('glitchSound2');
const glitchSound3 = document.getElementById('glitchSound3');
const glitchSound4 = document.getElementById('glitchSound4');
const endScaryDialog = document.getElementById('endScaryDialog');
const glitchSounds = [glitchSound1, glitchSound2, glitchSound3, glitchSound4];
const recordingPlayback = document.getElementById('recordingPlayback');
const playbackVideo1 = document.getElementById('playbackVideo1');
const playbackVideo2 = document.getElementById('playbackVideo2');
const playbackVideo3 = document.getElementById('playbackVideo3');
const playbackVideo4 = document.getElementById('playbackVideo4');
const playbackVideo5 = document.getElementById('playbackVideo5');
const playbackVideo6 = document.getElementById('playbackVideo6');
const eyesCanvas1 = document.getElementById('eyesCanvas1');
const eyesCanvas2 = document.getElementById('eyesCanvas2');
const eyesCanvas3 = document.getElementById('eyesCanvas3');
const eyesCanvas4 = document.getElementById('eyesCanvas4');
const eyesCanvas5 = document.getElementById('eyesCanvas5');
const eyesCanvas6 = document.getElementById('eyesCanvas6');

// Credits array - funny credits with AI acknowledgement
const CREDITS = [
    // Real credits with AI acknowledgement
    { type: 'section', text: 'ELEVATOR HORROR' },
    { type: 'role', text: 'A Game By', name: 'Austin Way' },
    { type: 'role', text: 'With Assistance From', name: 'Claude AI (Anthropic)' },
    { type: 'section', text: 'PROGRAMMING' },
    { type: 'role', text: 'Game Logic', name: 'Claude AI' },
    { type: 'role', text: 'JavaScript Development', name: 'Claude AI' },
    { type: 'role', text: 'Bug Fixing', name: 'Claude AI (so many bugs)' },
    { type: 'role', text: 'Feature Implementation', name: 'Claude AI' },
    { type: 'role', text: 'Code Refactoring', name: 'Claude AI (multiple times)' },
    { type: 'section', text: 'GAME DESIGN' },
    { type: 'role', text: 'Door Game Design', name: 'Claude AI' },
    { type: 'role', text: 'Phone Game Design', name: 'Claude AI' },
    { type: 'role', text: 'Shooting Gallery Design', name: 'Claude AI' },
    { type: 'role', text: 'Blink Game Design', name: 'Claude AI' },
    { type: 'role', text: 'Red Light Green Light', name: 'Claude AI' },
    { type: 'role', text: 'Cookie Tracing Game', name: 'Claude AI' },
    { type: 'role', text: 'Jumpscare Choreography', name: 'Claude AI' },
    { type: 'section', text: 'TECHNICAL EFFECTS' },
    { type: 'role', text: 'Camera Access Implementation', name: 'Claude AI' },
    { type: 'role', text: 'Face Detection Integration', name: 'Claude AI' },
    { type: 'role', text: 'Blood Drip Physics', name: 'Claude AI' },
    { type: 'role', text: 'Elevator Animation', name: 'Claude AI' },
    { type: 'role', text: 'Audio Synchronization', name: 'Claude AI' },
    
    // Funny Credits
    { type: 'section', text: 'CAST' },
    { type: 'role', text: 'Terrified Elevator Passenger', name: 'YOU' },
    { type: 'role', text: 'Your Webcam', name: 'Also YOU' },
    { type: 'role', text: 'Door #1', name: 'The Good Door (just kidding)' },
    { type: 'role', text: 'Door #2', name: 'The Other Good Door (also kidding)' },
    { type: 'role', text: 'Door #3', name: 'The REAL Good Door (still lying)' },
    { type: 'role', text: 'Phone Voice', name: 'Definitely Not a Demon' },
    { type: 'role', text: 'Blink Monster', name: 'That Guy From Behind You' },
    { type: 'role', text: 'Cookie', name: 'Innocent Circle (Deceptive)' },
    { type: 'section', text: 'SPECIAL THANKS' },
    { type: 'role', text: 'Coffee', name: 'For keeping us awake' },
    { type: 'role', text: 'Stack Overflow', name: 'For existing' },
    { type: 'role', text: 'Console.log()', name: 'Our debugging hero' },
    { type: 'role', text: 'Error Messages', name: 'For being cryptic' },
    { type: 'role', text: 'The Number 13', name: 'For being spooky' },
    { type: 'section', text: 'NO THANKS TO' },
    { type: 'role', text: 'JavaScript', name: 'For weak typing' },
    { type: 'role', text: 'Async Functions', name: 'For the confusion' },
    { type: 'role', text: 'Browser Permissions', name: 'For being annoying' },
    { type: 'role', text: 'Camera API', name: 'For the headaches' },
    { type: 'role', text: 'Elevator Music', name: 'For getting stuck in our heads' },
    { type: 'section', text: 'THINGS THAT SCARED US' },
    { type: 'role', text: 'Production Bugs', name: 'The Real Horror' },
    { type: 'role', text: 'Merge Conflicts', name: 'Truly Terrifying' },
    { type: 'role', text: 'Undefined is not a function', name: 'Classic Nightmare' },
    { type: 'role', text: 'Your Face on Camera', name: 'Sorry, had to' },
    { type: 'role', text: 'The Deadline', name: 'Coming for us all' },
    { type: 'section', text: 'THINGS THAT DIDNT WORK' },
    { type: 'role', text: 'First Attempt at Door Game', name: 'Rest in Peace' },
    { type: 'role', text: 'Second Attempt at Door Game', name: 'Also RIP' },
    { type: 'role', text: 'Original Phone Game Concept', name: 'Too Ambitious' },
    { type: 'role', text: 'That One Feature', name: 'You Know The One' },
    { type: 'role', text: 'Sleep Schedule', name: 'Long Gone' },
    { type: 'section', text: 'ANIMALS' },
    { type: 'role', text: 'No Animals Were Harmed', name: 'But Many Were Scared' },
    { type: 'role', text: 'Emotional Support Cat', name: 'Judging From Across The Room' },
    { type: 'role', text: 'Rubber Duck', name: 'Debugging Consultant' },
    { type: 'section', text: 'LEGAL' },
    { type: 'role', text: 'Lawyer', name: 'We Could Not Afford One' },
    { type: 'role', text: 'Copyright', name: 'Probably Fine' },
    { type: 'role', text: 'Terms of Service', name: 'Nobody Reads These Anyway' },
    { type: 'role', text: 'Privacy Policy', name: 'Your Webcam Stays Local' },
    { type: 'section', text: 'INSPIRATIONS' },
    { type: 'role', text: 'Every Horror Game Ever', name: 'Thanks for the Ideas' },
    { type: 'role', text: 'Cheap Jump Scares', name: 'Classic Technique' },
    { type: 'role', text: 'Dark Hallways', name: 'Always Effective' },
    { type: 'role', text: 'Creepy Phones', name: 'Never Answer' },
    { type: 'role', text: 'Elevators', name: 'Already Scary' },
    { type: 'section', text: 'ACHIEVEMENTS' },
    { type: 'role', text: 'You Survived', name: 'Probably' },
    { type: 'role', text: 'You Chose A Door', name: 'Bold Move' },
    { type: 'role', text: 'You Answered The Phone', name: 'Big Mistake' },
    { type: 'role', text: 'You Blinked', name: 'Should Have Held It' },
    { type: 'role', text: 'You Traced The Cookie', name: 'Or Tried To' },
    { type: 'section', text: 'STATS' },
    { type: 'role', text: 'Lines of Code', name: '4917 (and counting)' },
    { type: 'role', text: 'Jump Scares', name: 'Too Many To Count' },
    { type: 'role', text: 'Times We Said This Will Work', name: 'It Did Not Work' },
    { type: 'role', text: 'Hours Spent Debugging', name: 'All of Them' },
    { type: 'role', text: 'Times We Scared Ourselves', name: 'Honestly, A Lot' },
    { type: 'section', text: 'TOOLS USED' },
    { type: 'role', text: 'JavaScript', name: 'For Better or Worse' },
    { type: 'role', text: 'HTML5 Canvas', name: 'Drew All The Things' },
    { type: 'role', text: 'Web Audio API', name: 'Made The Noises' },
    { type: 'role', text: 'MediaDevices API', name: 'Watched You' },
    { type: 'role', text: 'CSS', name: 'Made It Pretty (ish)' },
    { type: 'section', text: 'FINAL THOUGHTS' },
    { type: 'role', text: 'Did You Enjoy?', name: 'Hope So' },
    { type: 'role', text: 'Were You Scared?', name: 'Mission Accomplished' },
    { type: 'role', text: 'Will You Play Again?', name: 'Probably Not' },
    { type: 'role', text: 'Should You?', name: 'Definitely Not' },
    { type: 'section', text: 'THANK YOU' },
    { type: 'role', text: 'Thanks For Playing', name: 'Seriously, Thanks' },
    { type: 'role', text: 'Hope You Had Fun', name: 'Or At Least Got Spooked' },
    { type: 'role', text: 'Come Back Soon', name: 'If You Dare' },
    { type: 'section', text: 'THE END' },
    { type: 'role', text: '...Or Is It?', name: '(It Is)' },
    { type: 'role', text: 'No Seriously', name: 'Its Over' },
    { type: 'role', text: 'You Can Leave Now', name: 'Go On' },
    { type: 'role', text: 'Still Here?', name: 'Dedicated, Arent You' },
    { type: 'role', text: 'Fine, One More', name: 'Behind You' },
    { type: 'role', text: 'Made You Look', name: 'Classic' },
    { type: 'section', text: 'NOW ITS REALLY OVER' },
    { type: 'role', text: 'Bye', name: '👋' }
];

// Credits variables

// Credits variables
let creditsActive = false;
let creditsScrollInterval = null;
let glitchIntervals = [];
let jumpscareTimeouts = [];

// Recording variables
let mediaRecorder = null;
let recordedChunks = [];
let gameRecordings = {
    doors: null,
    phone1: null,
    shooting: null,
    blink: null,
    redlight: null,
    cookie: null
};
let currentRecordingGame = null;

// Recording Functions
async function startRecording(gameName) {
    if (!cameraStream) {
        console.warn('No camera stream available for recording');
        return;
    }
    
    currentRecordingGame = gameName;
    recordedChunks = [];
    
    try {
        mediaRecorder = new MediaRecorder(cameraStream, {
            mimeType: 'video/webm;codecs=vp9'
        });
        
        mediaRecorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };
        
        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            gameRecordings[currentRecordingGame] = url;
            console.log(`📹 Recorded ${currentRecordingGame}:`, url);
        };
        
        mediaRecorder.start();
        console.log(`📹 Started recording ${gameName}`);
    } catch (error) {
        console.error('Error starting recording:', error);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        console.log(`📹 Stopped recording ${currentRecordingGame}`);
    }
}

// Play back all recordings simultaneously
async function playbackRecordings() {
    console.log('🎥 Starting playback of all recordings simultaneously...');
    
    // ABSOLUTELY FORCE STOP ALL GLITCH SOUNDS - MUTE THEM COMPLETELY
    glitchSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 0;
        sound.muted = true;
    });
    
    // MUTE ALL JUMPSCARE SOUNDS - they should NOT play during video playback
    const allJumpscareSounds = [
        jumpscareSound, jumpscareSound2, jumpscareSound3, jumpscareSound4, jumpscareSound5,
        jumpscareSound2_1, jumpscareSound2_2, jumpscareSound2_3, jumpscareSound2_4, jumpscareSound2_5,
        jumpscareSound3_1, jumpscareSound3_2, jumpscareSound3_3, jumpscareSound3_4, jumpscareSound3_5
    ];
    allJumpscareSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 0;
        sound.muted = true;
    });
    
    console.log('✅ All glitch and jumpscare sounds MUTED for playback!');
    
    // Stop suspense music - we want to hear the scary dialog clearly
    suspenseMusic.pause();
    suspenseMusic.currentTime = 0;
    
    const videos = [playbackVideo1, playbackVideo2, playbackVideo3, playbackVideo4, playbackVideo5, playbackVideo6];
    const recordingKeys = ['doors', 'phone1', 'shooting', 'blink', 'redlight', 'cookie'];
    
    // Show playback overlay
    recordingPlayback.classList.add('active');
    
    // Load all videos
    videos.forEach((video, index) => {
        const videoURL = gameRecordings[recordingKeys[index]];
        if (videoURL) {
            video.src = videoURL;
            video.play();
            console.log(`🎥 Playing ${recordingKeys[index]}`);
        } else {
            console.warn(`No recording found for ${recordingKeys[index]}`);
        }
    });
    
    // Play the scary dialog audio
    endScaryDialog.currentTime = 0;
    endScaryDialog.volume = 0.9;
    endScaryDialog.play();
    console.log('👹 Playing end scary dialog...');
    
    // Wait for scary dialog to finish, THEN trigger jumpscare
    endScaryDialog.addEventListener('ended', function onDialogEnd() {
        console.log('👹 Scary dialog finished! Triggering jumpscare...');
        finalJumpscare();
        // Remove the listener so it doesn't trigger multiple times
        endScaryDialog.removeEventListener('ended', onDialogEnd);
    });
}

// Final INTENSE jumpscare sequence
function finalJumpscare() {
    console.log('💀 Preparing INTENSE final jumpscare...');
    
    // Hide playback
    recordingPlayback.classList.remove('active');
    
    // Stop suspense music
    suspenseMusic.pause();
    suspenseMusic.currentTime = 0;
    
    // UNMUTE jumpscare sounds for the actual jumpscare
    jumpscareSound2.muted = false;
    jumpscareSound2.volume = 1.0;
    jumpscareSound3_1.muted = false;
    jumpscareSound3_1.volume = 0.8;
    
    // INTENSE FLASHING EFFECT
    document.body.style.filter = 'brightness(3)';
    setTimeout(() => {
        document.body.style.filter = 'brightness(0.1)';
    }, 50);
    setTimeout(() => {
        document.body.style.filter = 'brightness(3)';
    }, 100);
    setTimeout(() => {
        document.body.style.filter = '';
    }, 150);
    
    // Show jumpscare 4 with SHAKING
    jumpscare4.classList.add('active', 'shaking');
    
    // Play MULTIPLE jumpscare sounds for intensity
    jumpscareSound2.currentTime = 0;
    jumpscareSound2.play();
    
    // Layer another sound for extra intensity
    setTimeout(() => {
        jumpscareSound3_1.currentTime = 0;
        jumpscareSound3_1.play();
    }, 100);
    
    console.log('💀 INTENSE FINAL JUMPSCARE 4!');
    
    // Keep jumpscare longer for more impact (1.5 seconds)
    setTimeout(() => {
        jumpscare4.classList.remove('active', 'shaking');
        // Fade to black
        fadeToBlack.classList.add('active');
        
        // After fade, start elevator RISING and real credits
        setTimeout(() => {
            startElevatorRisingWithFinalCredits();
        }, 1500);
    }, 1500);
}

// Start elevator with FINAL credits (elevator stays on screen)
function startElevatorRisingWithFinalCredits() {
    console.log('🛗 Showing elevator with final credits...');
    
    // Stop all sounds
    endScaryDialog.pause();
    endScaryDialog.currentTime = 0;
    
    // Remove fade to black
    fadeToBlack.classList.remove('active');
    
    // Hide any remaining game containers
    doorGameContainer.classList.remove('active');
    phoneGameContainer.classList.remove('active');
    redlightGameContainer.classList.remove('active');
    shootingGalleryContainer.classList.remove('active');
    blinkGameContainer.classList.remove('active');
    cookieGameContainer.classList.remove('active');
    recordingPlayback.classList.remove('active');
    
    // Hide start/play buttons (prevent them from showing)
    startButton.classList.add('hidden');
    playButton.classList.add('hidden');
    openDoorButton.classList.add('hidden');
    
    // Show elevator (stays in place, doesn't rise)
    elevatorContainer.style.display = 'block';
    elevatorContainer.style.top = '50%';
    elevatorContainer.style.visibility = 'visible';
    elevatorContainer.classList.add('shaking'); // Keep it shaking like normal
    elevatorContainer.classList.remove('hidden', 'frozen');
    console.log('🛗 Elevator displayed at 50%, shaking');
    
    // Play elevator music during credits
    audioPlayer.currentTime = 0;
    audioPlayer.volume = 0.5;
    audioPlayer.loop = true; // Loop the elevator music
    audioPlayer.play();
    console.log('🎵 Playing elevator music during final credits');
    
    // Show background moving
    backgroundTexture.classList.add('visible', 'moving');
    console.log('🌫️ Background texture visible and moving');
    
    // Start REAL final credits (hysterical style)
    console.log('🎬 About to call startFinalCredits()...');
    startFinalCredits();
}

// Start FINAL credits (clean, no glitching)
function startFinalCredits() {
    console.log('🎬 Starting FINAL credits (clean version)...');
    creditsActive = true;
    
    creditsContainer.classList.add('active');
    creditsContainerRight.classList.add('active');
    creditsContainer.innerHTML = ''; // Clear any existing content
    creditsContainerRight.innerHTML = '';
    
    let currentIndex = 0;
    
    // Function to add a single credit (alternates left/right)
    function addCredit() {
        // Loop back to start if we've shown all credits - INFINITE LOOP
        if (currentIndex >= CREDITS.length) {
            console.log('🎬 Credits finished, LOOPING back to start...');
            currentIndex = 0;
        }
        
        const credit = CREDITS[currentIndex];
        const useLeftSide = currentIndex % 2 === 0; // Alternate sides
        const targetContainer = useLeftSide ? creditsContainer : creditsContainerRight;
        
        const creditDiv = document.createElement('div');
        creditDiv.className = 'credit-line';
        
        // Apply type-specific styling
        if (credit.type === 'section') {
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '24px';
            creditDiv.style.fontWeight = 'bold';
            creditDiv.style.marginTop = '40px';
        } else if (credit.type === 'role') {
            creditDiv.className = 'credit-line role';
            creditDiv.textContent = credit.text;
            if (credit.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'credit-line role';
                nameDiv.textContent = credit.name;
                nameDiv.style.fontWeight = 'bold';
                targetContainer.appendChild(creditDiv);
                targetContainer.appendChild(nameDiv);
                currentIndex++;
                return;
            }
        }
        
        targetContainer.appendChild(creditDiv);
        currentIndex++;
    }
    
    // Add credits every 300ms (smooth pacing)
    const creditInterval = setInterval(() => {
        addCredit();
    }, 300);
    
    // Auto-scroll credits upward (smooth)
    creditsScrollInterval = setInterval(() => {
        if (creditsContainer.scrollHeight > 0) {
            creditsContainer.scrollTop += 2; // Smooth scroll
        }
        if (creditsContainerRight.scrollHeight > 0) {
            creditsContainerRight.scrollTop += 2;
        }
    }, 40);
}

// Extensive monster credits list (will loop forever)
const MONSTER_CREDITS = [
    { type: 'section', text: '--- THE ENTITIES ---' },
    { type: 'monster', text: 'THE WATCHER', name: 'Door Demon' },
    { type: 'normal', text: 'Watches from the shadows' },
    { type: 'monster', text: 'THE CALLER', name: 'Phone Entity' },
    { type: 'normal', text: 'Whispers through the line' },
    { type: 'monster', text: 'THE HUNTER', name: 'Target Phantom' },
    { type: 'normal', text: 'Always aiming for you' },
    { type: 'monster', text: 'THE BLINKER', name: 'Hallway Terror' },
    { type: 'normal', text: 'Gets closer when you blink' },
    { type: 'monster', text: 'THE FOLLOWER', name: 'Red Light Beast' },
    { type: 'normal', text: 'Catches you if you move' },
    { type: 'monster', text: 'THE SWEET ONE', name: 'Cookie Monster' },
    { type: 'normal', text: 'Hungry for your soul' },
    { type: 'section', text: '--- THE ELEVATOR ---' },
    { type: 'normal', text: 'Going Down' },
    { type: 'normal', text: 'Going Down' },
    { type: 'normal', text: 'Going Down' },
    { type: 'normal', text: 'Going Down...' },
    { type: 'section', text: '--- ??? ---' },
    { type: 'corrupted', text: 'YOU NEVER LEFT' },
    { type: 'corrupted', text: 'YOU NEVER WILL' },
    { type: 'normal', text: '...' },
    { type: 'section', text: '--- THE END ---' },
    { type: 'glitch', text: 'OR IS IT?' },
    { type: 'normal', text: 'The elevator never stops' },
    { type: 'normal', text: 'The games never end' },
    { type: 'normal', text: 'They are always watching' },
    { type: 'section', text: '--- THEY KNOW ---' },
    { type: 'monster', text: 'YOUR NAME' },
    { type: 'monster', text: 'YOUR FACE' },
    { type: 'monster', text: 'YOUR FEAR' },
    { type: 'normal', text: '...' },
    { type: 'section', text: '--- LOOP FOREVER ---' },
    { type: 'corrupted', text: 'FOREVER' },
    { type: 'corrupted', text: 'FOREVER' },
    { type: 'corrupted', text: 'FOREVER' },
    { type: 'normal', text: '...' },
];

// Looping credits that never end
function startLoopingCredits() {
    console.log('🎬 Starting looping monster credits...');
    
    // Clear any screen effects
    document.body.classList.remove('screen-glitching', 'screen-flashing');
    document.body.style.filter = '';
    
    // Ensure credits are visible
    creditsContainer.classList.add('active');
    creditsContainer.classList.remove('glitching', 'flashing');
    creditsContainerRight.classList.remove('active'); // Only use left side
    creditsContainer.innerHTML = '';
    creditsContainer.style.display = 'flex';
    
    let currentIndex = 0;
    
    function addCredit() {
        // Loop back to start when we reach the end
        if (currentIndex >= MONSTER_CREDITS.length) {
            currentIndex = 0;
            // Don't clear - let them stack and scroll infinitely
        }
        
        const credit = MONSTER_CREDITS[currentIndex];
        const creditDiv = document.createElement('div');
        creditDiv.className = 'credit-line';
        
        if (credit.type === 'section') {
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '32px';
            creditDiv.style.fontWeight = 'bold';
            creditDiv.style.marginTop = '60px';
            creditDiv.style.color = '#ff0000';
            creditDiv.style.textShadow = '0 0 20px rgba(255, 0, 0, 0.8)';
        } else if (credit.type === 'monster') {
            creditDiv.className = 'credit-line monster';
            creditDiv.textContent = credit.text;
            if (credit.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'credit-line monster';
                nameDiv.textContent = credit.name;
                nameDiv.style.fontWeight = 'bold';
                nameDiv.style.fontSize = '24px';
                creditsContainer.appendChild(creditDiv);
                creditsContainer.appendChild(nameDiv);
                currentIndex++;
                return;
            }
        } else if (credit.type === 'corrupted') {
            creditDiv.className = 'credit-line corrupted';
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '28px';
        } else if (credit.type === 'glitch') {
            creditDiv.className = 'credit-line glitch';
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '26px';
        } else {
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '20px';
            creditDiv.style.color = '#999';
        }
        
        creditsContainer.appendChild(creditDiv);
        currentIndex++;
    }
    
    // Add credits every 400ms
    setInterval(addCredit, 400);
    
    // Auto-scroll credits smoothly
    setInterval(() => {
        if (creditsContainer.scrollHeight > 0) {
            creditsContainer.scrollTop += 2;
        }
    }, 30);
}

// Shooting Gallery game variables
let shootingGalleryActive = false;
let targets = [];
let targetIdCounter = 0;
let currentTargetStage = 0; // All targets are at the same stage
const TARGET_IMAGES = ['Target1.png', 'Target2.png', 'Target3.png', 'Target4.png'];
const JUMPSCARE_IMAGES = ['Target4.png'];
const GALLERY_JUMPSCARE_SOUNDS = [jumpscareSound, jumpscareSound2];
let targetMoveIntervals = [];

// Shooting effects
let shootingActive = false;
let wounds = [];
let bloodDrips = [];
let impactFlashes = [];
let shotCount = 0;
let faceDistortions = [];
let screenBloodSplatters = []; // Blood that hits the camera and drips down
let explosionParticles = []; // Fire/smoke/debris particles
let explosionFlames = []; // Expanding flames

// Face detection
let faceMesh = null;
let faceMeshDetector = null;
let cameraObj = null;

// Offscreen canvas for distortions
let offscreenCanvas = document.createElement('canvas');
let offscreenCtx = offscreenCanvas.getContext('2d');

// Make all screech sounds loud
screechSound.volume = 1.0;
screechSound1.volume = 1.0;
screechSound2.volume = 1.0;
screechSound3.volume = 1.0;
screechSound4.volume = 1.0;
// Make click sound louder
clickSound.volume = 1.0;
// Make jumpscare sound EVEN LOUDER - 5X VOLUME!!!
jumpscareSound.volume = 1.0;
jumpscareSound2.volume = 1.0;
jumpscareSound3.volume = 1.0;
jumpscareSound4.volume = 1.0;
jumpscareSound5.volume = 1.0;
// Make jumpscare 2 sound EVEN LOUDER - 5X VOLUME!!!
jumpscareSound2_1.volume = 1.0;
jumpscareSound2_2.volume = 1.0;
jumpscareSound2_3.volume = 1.0;
jumpscareSound2_4.volume = 1.0;
jumpscareSound2_5.volume = 1.0;
// Make jumpscare 3 sound EVEN LOUDER - 5X VOLUME!!!
jumpscareSound3_1.volume = 1.0;
jumpscareSound3_2.volume = 1.0;
jumpscareSound3_3.volume = 1.0;
jumpscareSound3_4.volume = 1.0;
jumpscareSound3_5.volume = 1.0;
// Gunshot sound LOUD!
gunshotSound.volume = 1.0;
// Horror music volume
horrorMusic.volume = 0.8;
// Phone sounds volume
phoneRingSound.volume = 1.0;
phoneAudio.volume = 1.0;
heavyBreathing1.volume = 1.0;
heavyBreathing2.volume = 1.0;
heavyBreathing3.volume = 1.0;
suspenseMusic.volume = 0.7;
// Midnight Carousel music volume
midnightCarouselMusic.volume = 0.8;
// Blink game music volume
blinkGameMusic.volume = 0.7;
// Cookie music volume
cookieMusic.volume = 0.7;
// RPG fire sound volume
rpgFireSound.volume = 1.0;
// End music volume
endMusic.volume = 0.7;

let sparkInterval;
let lightFlashInterval;
let canFlashLight = true;
let playButtonHoverCount = 0;
let badDoorIndex = -1; // Will be set randomly (0=left, 1=middle, 2=right)
let screechTimeouts = []; // Store timeout IDs for screeches
let cameraStream = null;

// Red light green light game variables
let isRedLight = false;
let redlightGameActive = false;
let playerX = 0;
let playerY = 0;
let playerWalkFrame = 1; // Toggle between 1 and 2 for walk animation
let keysPressed = {};
let lastPlayerX = 0;
let lastPlayerY = 0;
let lightSwitchInterval = null;
let hasCaughtPlayer = false;

// Phone game variables
let phoneGameActive = false;
let phoneRingInterval = null;
let screenShakeInterval = null;
let hasPickedUpPhone = false;
let phoneGameStartTime = 0;
let phoneRingStartTimeout = null;

// Blink game variables
let blinkGameActive = false;
let monsterDistance = 100; // Start at 100 meters
let eyesClosedTime = 0;
let lastEyeCheckTime = Date.now();
let blinkGameInterval = null;
let eyeAspectRatioThreshold = 0.5; // Threshold for detecting closed eyes (CRAZY SENSITIVE!)
let isLookingAway = false;
let blinkGameStartTime = 0; // Track when the game started
let blinkGameSurvivalTime = 60; // Need to survive 60 seconds to win

// Game order variables
let currentGameIndex = 0; // Track which game we're on (0-6)
let blinkGameFailedOnce = false; // Track if player has failed blink game once
let isEndingSequence = false; // Track if we're in the ending sequence
const gameOrder = ['doors', 'phone_no_jumpscare', 'shooting', 'blink', 'redlight', 'cookie', 'phone_jumpscare']; // Order of games

// Array of all screech sounds
const screechSounds = [screechSound, screechSound1, screechSound2, screechSound3, screechSound4];

// Function to play a random screech sound
function playRandomScreech() {
    const randomIndex = Math.floor(Math.random() * screechSounds.length);
    const selectedScreech = screechSounds[randomIndex];
    selectedScreech.currentTime = 0;
    selectedScreech.play();
}

// Function to schedule random screeches during elevator ride
function scheduleRandomScreeches(duration) {
    // Clear any existing screech timeouts
    screechTimeouts.forEach(timeout => clearTimeout(timeout));
    screechTimeouts = [];
    
    // Schedule 2-4 random screeches during the ride
    const numScreeches = 2 + Math.floor(Math.random() * 3); // 2-4 screeches
    for (let i = 0; i < numScreeches; i++) {
        // Random time between 1 second and duration-1 second
        const randomTime = 1000 + Math.random() * (duration - 2000);
        const timeoutId = setTimeout(playRandomScreech, randomTime);
        screechTimeouts.push(timeoutId);
    }
}

// Request camera access
async function requestCameraAccess() {
    // Return early if already initialized
    if (cameraStream && faceMeshDetector) {
        console.log('Camera already initialized');
        return;
    }
    
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'user', width: 1280, height: 720 },
            audio: false 
        });
        cameraVideo.srcObject = cameraStream;
        
        // Wait for video to be ready
        await new Promise((resolve) => {
            cameraVideo.onloadedmetadata = () => {
                // Initialize canvas dimensions
                effectsCanvas.width = window.innerWidth;
                effectsCanvas.height = window.innerHeight;
                offscreenCanvas.width = cameraVideo.videoWidth;
                offscreenCanvas.height = cameraVideo.videoHeight;
                resolve();
            };
        });
        
        // Setup MediaPipe Face Mesh with better error handling
        faceMeshDetector = new FaceMesh({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }
        });

        faceMeshDetector.setOptions({
            maxNumFaces: 1,
            refineLandmarks: false, // Disable refined landmarks to reduce complexity
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        faceMeshDetector.onResults((results) => {
            try {
                faceMesh = results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0 
                    ? results.multiFaceLandmarks[0] 
                    : null;
            } catch (e) {
                console.error('Face mesh results error:', e);
                faceMesh = null;
            }
        });

        // Setup camera for MediaPipe with error handling
        cameraObj = new Camera(cameraVideo, {
            onFrame: async () => {
                try {
                    if (faceMeshDetector && cameraVideo.readyState === 4) {
                        await faceMeshDetector.send({ image: cameraVideo });
                    }
                } catch (e) {
                    // Silently handle frame processing errors
                    console.warn('Frame processing error:', e);
                }
            },
            width: 1280,
            height: 720
        });

        await cameraObj.start();
        console.log('✅ Face mesh tracking started successfully');
    } catch (error) {
        console.error('❌ Camera/Face mesh initialization error:', error);
        // Set fallback - no face detection
        faceMesh = null;
    }
}

// Create wound effect
function createWound(x, y, landmarkIndex = null) {
    const size = 30 + Math.random() * 40;
    const severity = Math.random();
    
    wounds.push({
        x, y, size,
        alpha: 0.9,
        createdTime: Date.now(),
        severity: severity,
        landmarkIndex: landmarkIndex, // Track which face landmark this is on
        initialX: x,
        initialY: y
    });
    
    // Add blood drips based on severity
    const numDrips = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < numDrips; i++) {
        bloodDrips.push({
            x: x + (Math.random() - 0.5) * 30,
            y: y,
            speed: 2 + Math.random() * 3,
            width: 2 + Math.random() * 3,
            length: 20 + Math.random() * 30,
            alpha: 0.7 + Math.random() * 0.3
        });
    }
}

// Create impact flash
function createImpactFlash(x, y) {
    impactFlashes.push({
        x, y,
        radius: 50 + Math.random() * 50,
        createdTime: Date.now()
    });
}

// Shoot at face landmark
function fireShot() {
    let x, y, landmarkIndex = null;
    
    // Target face if detected
    if (faceMesh && faceMesh.length > 0) {
        // Choose random face landmark
        landmarkIndex = Math.floor(Math.random() * faceMesh.length);
        const landmark = faceMesh[landmarkIndex];
        
        // Convert normalized coords to canvas coords
        x = landmark.x * offscreenCanvas.width;
        y = landmark.y * offscreenCanvas.height;
        
        // Create face distortion at this point
        createFaceDistortion(x, y);
        
        console.log(`Hit face landmark ${landmarkIndex} at (${x.toFixed(0)}, ${y.toFixed(0)})`);
    } else {
        // Random position if no face detected
        x = offscreenCanvas.width * (0.3 + Math.random() * 0.4);
        y = offscreenCanvas.height * (0.2 + Math.random() * 0.5);
        console.log('No face detected, random shot');
    }
    
    createWound(x, y, landmarkIndex);
    createImpactFlash(x, y);
    
    // Add severe distortion for more impact
    if (Math.random() > 0.5) {
        setTimeout(() => {
            createFaceDistortion(x, y);
        }, 50);
    }
    
    // Play gunshot sound
    gunshotSound.currentTime = 0;
    gunshotSound.play();
    
    // Screen shake
    cameraJumpscare.classList.add('shaking');
    setTimeout(() => {
        cameraJumpscare.classList.remove('shaking');
    }, 100);
}

// Create face distortion (morphing effect)
function createFaceDistortion(x, y) {
    const severity = Math.random();
    const distortionType = severity > 0.85 ? 'explode' : (Math.random() > 0.5 ? 'push' : 'pull');
    
    faceDistortions.push({
        x, y,
        radius: 50 + Math.random() * 50,
        strength: 20 + Math.random() * 35 + (severity * 25),
        createdTime: Date.now(),
        duration: 2000 + Math.random() * 2000,
        type: distortionType,
        rotationSpeed: (Math.random() - 0.5) * 0.1
    });
    
    // Add shockwave for severe impacts
    if (severity > 0.75) {
        setTimeout(() => {
            faceDistortions.push({
                x, y,
                radius: 80 + Math.random() * 40,
                strength: 15 + Math.random() * 20,
                createdTime: Date.now(),
                duration: 1200,
                type: 'push',
                rotationSpeed: 0
            });
        }, 50);
    }
}

// Apply distortions to video feed
function applyDistortions() {
    if (faceDistortions.length === 0 || !cameraVideo.videoWidth) {
        return null;
    }

    const now = Date.now();
    
    // Draw video to offscreen canvas
    offscreenCtx.drawImage(cameraVideo, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
    const imageData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    const distortedData = offscreenCtx.createImageData(offscreenCanvas.width, offscreenCanvas.height);
    
    // Apply distortion to each pixel
    for (let y = 0; y < offscreenCanvas.height; y++) {
        for (let x = 0; x < offscreenCanvas.width; x++) {
            let offsetX = 0;
            let offsetY = 0;
            
            // Calculate cumulative offset from all active distortions
            for (const distortion of faceDistortions) {
                const dx = x - distortion.x;
                const dy = y - distortion.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < distortion.radius) {
                    const age = now - distortion.createdTime;
                    const progress = age / distortion.duration;
                    const strength = distortion.strength * (1 - progress);
                    
                    const influence = 1 - (distance / distortion.radius);
                    const angle = Math.atan2(dy, dx);
                    
                    if (distortion.type === 'push') {
                        offsetX += Math.cos(angle) * strength * influence;
                        offsetY += Math.sin(angle) * strength * influence;
                    } else if (distortion.type === 'pull') {
                        offsetX -= Math.cos(angle) * strength * influence;
                        offsetY -= Math.sin(angle) * strength * influence;
                    } else if (distortion.type === 'explode') {
                        const explosionStrength = strength * 1.5;
                        const rotation = distortion.rotationSpeed * age;
                        const rotatedAngle = angle + rotation;
                        
                        offsetX += Math.cos(rotatedAngle) * explosionStrength * influence * influence;
                        offsetY += Math.sin(rotatedAngle) * explosionStrength * influence * influence;
                    }
                }
            }
            
            // Sample from source with offset
            const sourceX = Math.max(0, Math.min(offscreenCanvas.width - 1, Math.round(x + offsetX)));
            const sourceY = Math.max(0, Math.min(offscreenCanvas.height - 1, Math.round(y + offsetY)));
            
            const sourceIndex = (sourceY * offscreenCanvas.width + sourceX) * 4;
            const destIndex = (y * offscreenCanvas.width + x) * 4;
            
            distortedData.data[destIndex] = imageData.data[sourceIndex];
            distortedData.data[destIndex + 1] = imageData.data[sourceIndex + 1];
            distortedData.data[destIndex + 2] = imageData.data[sourceIndex + 2];
            distortedData.data[destIndex + 3] = imageData.data[sourceIndex + 3];
        }
    }
    
    offscreenCtx.putImageData(distortedData, 0, 0);
    return offscreenCanvas;
}

// Animation loop for effects
function animateShootingEffects() {
    if (!shootingActive) return;
    
    effectsCtx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
    
    const now = Date.now();
    
    // Clean up expired distortions
    faceDistortions = faceDistortions.filter(distortion => {
        return (now - distortion.createdTime) < distortion.duration;
    });
    
    // Draw video with distortions
    if (faceDistortions.length > 0) {
        const distorted = applyDistortions();
        if (distorted) {
            // Scale distorted video to fill screen
            effectsCtx.drawImage(distorted, 0, 0, effectsCanvas.width, effectsCanvas.height);
        } else {
            effectsCtx.drawImage(cameraVideo, 0, 0, effectsCanvas.width, effectsCanvas.height);
        }
    } else {
        effectsCtx.drawImage(cameraVideo, 0, 0, effectsCanvas.width, effectsCanvas.height);
    }
    
    // Update wound positions if tracking face landmarks
    const scaleX = effectsCanvas.width / offscreenCanvas.width;
    const scaleY = effectsCanvas.height / offscreenCanvas.height;
    
    for (const wound of wounds) {
        if (wound.landmarkIndex !== null && faceMesh && faceMesh[wound.landmarkIndex]) {
            const landmark = faceMesh[wound.landmarkIndex];
            wound.x = landmark.x * offscreenCanvas.width;
            wound.y = landmark.y * offscreenCanvas.height;
        }
    }
    
    // Draw impact flashes
    impactFlashes = impactFlashes.filter(flash => {
        const age = now - flash.createdTime;
        if (age > 150) return false;
        
        const alpha = 1 - (age / 150);
        const screenX = flash.x * scaleX;
        const screenY = flash.y * scaleY;
        const gradient = effectsCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, flash.radius * scaleX);
        gradient.addColorStop(0, `rgba(255, 255, 200, ${alpha * 0.9})`);
        gradient.addColorStop(0.5, `rgba(255, 150, 0, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        
        effectsCtx.fillStyle = gradient;
        effectsCtx.beginPath();
        effectsCtx.arc(screenX, screenY, flash.radius * scaleX, 0, Math.PI * 2);
        effectsCtx.fill();
        
        return true;
    });
    
    // Draw wounds with blood splatter
    for (const wound of wounds) {
        const screenX = wound.x * scaleX;
        const screenY = wound.y * scaleY;
        const screenSize = wound.size * scaleX;
        
        // Deep wound hole
        const holeGradient = effectsCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, screenSize * 0.3);
        holeGradient.addColorStop(0, 'rgba(5, 2, 2, 1.0)');
        holeGradient.addColorStop(0.5, 'rgba(40, 10, 10, 0.95)');
        holeGradient.addColorStop(1, 'rgba(100, 25, 20, 0.6)');
        effectsCtx.fillStyle = holeGradient;
        effectsCtx.beginPath();
        effectsCtx.arc(screenX, screenY, screenSize * 0.3, 0, Math.PI * 2);
        effectsCtx.fill();
        
        // Blood around wound
        const bloodGradient = effectsCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, screenSize);
        bloodGradient.addColorStop(0, `rgba(200, 5, 0, ${wound.alpha})`);
        bloodGradient.addColorStop(0.4, `rgba(175, 10, 8, ${wound.alpha * 0.95})`);
        bloodGradient.addColorStop(0.7, `rgba(155, 20, 12, ${wound.alpha * 0.8})`);
        bloodGradient.addColorStop(1, `rgba(130, 30, 18, 0)`);
        effectsCtx.fillStyle = bloodGradient;
        effectsCtx.beginPath();
        effectsCtx.arc(screenX, screenY, screenSize, 0, Math.PI * 2);
        effectsCtx.fill();
        
        // Splatter around wound
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = screenSize * (0.8 + Math.random() * 1.5);
            const splatX = screenX + Math.cos(angle) * dist;
            const splatY = screenY + Math.sin(angle) * dist;
            const splatSize = (3 + Math.random() * 10) * scaleX;
            
            const splatGradient = effectsCtx.createRadialGradient(splatX, splatY, 0, splatX, splatY, splatSize);
            splatGradient.addColorStop(0, `rgba(220, 5, 0, ${wound.alpha * 0.8})`);
            splatGradient.addColorStop(1, 'rgba(140, 30, 18, 0)');
            effectsCtx.fillStyle = splatGradient;
            effectsCtx.beginPath();
            effectsCtx.arc(splatX, splatY, splatSize, 0, Math.PI * 2);
            effectsCtx.fill();
        }
    }
    
    // Update and draw blood drips
    bloodDrips = bloodDrips.filter(drip => {
        drip.y += drip.speed;
        if (drip.y > offscreenCanvas.height + 50) return false;
        
        const screenX = drip.x * scaleX;
        const screenY = drip.y * scaleY;
        const screenLength = drip.length * scaleY;
        
        const gradient = effectsCtx.createLinearGradient(screenX, screenY, screenX, screenY + screenLength);
        gradient.addColorStop(0, `rgba(139, 0, 0, ${drip.alpha})`);
        gradient.addColorStop(1, `rgba(100, 0, 0, ${drip.alpha * 0.5})`);
        
        effectsCtx.strokeStyle = gradient;
        effectsCtx.lineWidth = drip.width * scaleX;
        effectsCtx.beginPath();
        effectsCtx.moveTo(screenX, screenY);
        effectsCtx.lineTo(screenX, screenY + screenLength);
        effectsCtx.stroke();
        
        return true;
    });
    
    // Draw screen blood splatters (blood on camera lens that drips down) - REALISTIC
    screenBloodSplatters = screenBloodSplatters.filter(splat => {
        splat.y += splat.dripSpeed;
        if (splat.y > effectsCanvas.height + 100) return false;
        
        // Main splatter blob with realistic blood color
        const splatGradient = effectsCtx.createRadialGradient(splat.x, splat.y, 0, splat.x, splat.y, splat.size);
        splatGradient.addColorStop(0, `rgba(139, 0, 0, ${splat.alpha})`); // Dark blood center
        splatGradient.addColorStop(0.3, `rgba(160, 10, 10, ${splat.alpha * 0.95})`);
        splatGradient.addColorStop(0.6, `rgba(120, 5, 5, ${splat.alpha * 0.8})`);
        splatGradient.addColorStop(1, `rgba(80, 0, 0, 0)`);
        effectsCtx.fillStyle = splatGradient;
        effectsCtx.beginPath();
        effectsCtx.arc(splat.x, splat.y, splat.size, 0, Math.PI * 2);
        effectsCtx.fill();
        
        // Thicker drip trail with variations
        const trailWidth = splat.size * 0.4;
        const trailGradient = effectsCtx.createLinearGradient(splat.x, splat.startY, splat.x, splat.y);
        trailGradient.addColorStop(0, `rgba(100, 0, 0, ${splat.alpha * 0.2})`);
        trailGradient.addColorStop(0.5, `rgba(139, 0, 0, ${splat.alpha * 0.7})`);
        trailGradient.addColorStop(1, `rgba(139, 0, 0, ${splat.alpha})`);
        effectsCtx.strokeStyle = trailGradient;
        effectsCtx.lineWidth = trailWidth;
        effectsCtx.lineCap = 'round';
        effectsCtx.beginPath();
        effectsCtx.moveTo(splat.x, splat.startY);
        effectsCtx.lineTo(splat.x, splat.y);
        effectsCtx.stroke();
        
        // Add small drips off the main splatter
        if (Math.random() < 0.1) {
            effectsCtx.fillStyle = `rgba(139, 0, 0, ${splat.alpha * 0.6})`;
            effectsCtx.beginPath();
            effectsCtx.arc(splat.x + (Math.random() - 0.5) * splat.size, 
                          splat.y + splat.size, 
                          3 + Math.random() * 5, 0, Math.PI * 2);
            effectsCtx.fill();
        }
        
        return true;
    });
    
    // Draw explosion flames (expanding fire rings)
    explosionFlames = explosionFlames.filter(flame => {
        const age = now - flame.createdTime;
        if (age > flame.duration) return false;
        
        const progress = age / flame.duration;
        const currentRadius = flame.startRadius + (flame.endRadius - flame.startRadius) * progress;
        const alpha = flame.alpha * (1 - progress);
        
        // Outer fire ring
        const fireGradient = effectsCtx.createRadialGradient(flame.x, flame.y, currentRadius * 0.7, flame.x, flame.y, currentRadius);
        fireGradient.addColorStop(0, `rgba(255, 200, 0, ${alpha})`);
        fireGradient.addColorStop(0.3, `rgba(255, 100, 0, ${alpha * 0.8})`);
        fireGradient.addColorStop(0.7, `rgba(255, 50, 0, ${alpha * 0.5})`);
        fireGradient.addColorStop(1, `rgba(100, 0, 0, 0)`);
        effectsCtx.fillStyle = fireGradient;
        effectsCtx.beginPath();
        effectsCtx.arc(flame.x, flame.y, currentRadius, 0, Math.PI * 2);
        effectsCtx.fill();
        
        return true;
    });
    
    // Draw explosion particles (fire/smoke/debris)
    explosionParticles = explosionParticles.filter(particle => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.velocityY += particle.gravity;
        particle.alpha -= particle.fadeRate;
        particle.size *= 0.98; // Shrink over time
        
        if (particle.alpha <= 0 || particle.size <= 0) return false;
        
        // Draw particle with gradient based on type
        let gradient;
        if (particle.type === 'fire') {
            // Bright fire - white hot core to orange edges
            gradient = effectsCtx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.alpha})`);
            gradient.addColorStop(0.2, `rgba(255, 255, 100, ${particle.alpha})`);
            gradient.addColorStop(0.5, `rgba(255, 150, 0, ${particle.alpha * 0.8})`);
            gradient.addColorStop(0.8, `rgba(255, 50, 0, ${particle.alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(100, 0, 0, 0)`);
        } else if (particle.type === 'smoke') {
            // Dark billowing smoke
            gradient = effectsCtx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
            gradient.addColorStop(0, `rgba(80, 80, 80, ${particle.alpha * 0.9})`);
            gradient.addColorStop(0.3, `rgba(50, 50, 50, ${particle.alpha * 0.7})`);
            gradient.addColorStop(0.7, `rgba(30, 30, 30, ${particle.alpha * 0.4})`);
            gradient.addColorStop(1, `rgba(10, 10, 10, 0)`);
        } else if (particle.type === 'ember') {
            // Bright orange/yellow embers
            gradient = effectsCtx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
            gradient.addColorStop(0, `rgba(255, 220, 100, ${particle.alpha})`);
            gradient.addColorStop(0.5, `rgba(255, 100, 0, ${particle.alpha * 0.8})`);
            gradient.addColorStop(1, `rgba(200, 0, 0, 0)`);
        } else { // debris - dark chunks
            gradient = effectsCtx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
            gradient.addColorStop(0, `rgba(80, 40, 20, ${particle.alpha})`);
            gradient.addColorStop(0.6, `rgba(60, 30, 15, ${particle.alpha * 0.7})`);
            gradient.addColorStop(1, `rgba(40, 20, 10, 0)`);
        }
        
        effectsCtx.fillStyle = gradient;
        effectsCtx.beginPath();
        effectsCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        effectsCtx.fill();
        
        // Add extra glow for fire and embers
        if (particle.type === 'fire' || particle.type === 'ember') {
            effectsCtx.shadowBlur = 15;
            effectsCtx.shadowColor = `rgba(255, 150, 0, ${particle.alpha})`;
            effectsCtx.fillStyle = gradient;
            effectsCtx.beginPath();
            effectsCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            effectsCtx.fill();
            effectsCtx.shadowBlur = 0;
        }
        
        return true;
    });
    
    requestAnimationFrame(animateShootingEffects);
}

// Typewriter effect function
function typeWriter(text, element, speed, callback) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Red Light Green Light Game Functions
function startRedLightGame() {
    redlightGameActive = true;
    isRedLight = false;
    
    // Start recording red light game
    startRecording('redlight');
    hasCaughtPlayer = false;
    playerX = 0; // Start at 0 (left side - 10% position)
    playerY = 0;
    lastPlayerX = 0;
    lastPlayerY = 0;
    
    // CLEAR ALL KEY STATES - FIX FOR BUG
    keysPressed = {};
    
    // Reset player position and sprite - START ON THE LEFT
    playerSprite.style.left = '10%';
    playerSprite.style.bottom = '100px';
    playerSprite.style.transform = 'translateX(0) translateY(0)';
    playerSprite.src = 'player1.png';
    playerWalkFrame = 1;
    
    // Reset progress bar
    progressFill.style.width = '0%';
    
    // Show game
    redlightGameContainer.classList.add('active');
    
    // Play red light green light music
    redlightMusic.currentTime = 0;
    redlightMusic.play();
    
    // Start with green light
    lightIndicator.textContent = 'GREEN LIGHT';
    lightIndicator.classList.remove('red');
    lightIndicator.style.color = '#00ff00';
    lightIndicator.style.textShadow = '0 0 30px rgba(0, 255, 0, 1.0), 0 0 60px rgba(0, 255, 0, 0.8)';
    
    // Make sure no red tint at start
    redlightGameContainer.classList.remove('red-active', 'red-flash');
    
    // Start light switching
    scheduleLightSwitch();
}

function scheduleLightSwitch() {
    if (!redlightGameActive) return;
    
    const delay = 2000 + Math.random() * 3000; // 2-5 seconds
    lightSwitchInterval = setTimeout(function() {
        switchLight();
        scheduleLightSwitch();
    }, delay);
}

function switchLight() {
    if (!redlightGameActive) return;
    
    isRedLight = !isRedLight;
    
    if (isRedLight) {
        // RED FLASH WARNING BEFORE RED LIGHT!
        redlightGameContainer.classList.add('red-flash');
        
        // Flash then switch to red light
        setTimeout(() => {
            lightIndicator.textContent = 'RED LIGHT';
            lightIndicator.classList.add('red');
            lightIndicator.style.color = '#ff0000';
            lightIndicator.style.textShadow = '0 0 30px rgba(255, 0, 0, 1.0), 0 0 60px rgba(255, 0, 0, 0.8)';
            
            // Add red tint to screen during red light
            redlightGameContainer.classList.add('red-active');
            
            // Remove flash after showing red light
            setTimeout(() => {
                redlightGameContainer.classList.remove('red-flash');
            }, 100);
        }, 200);
        
        // Save current position (do this immediately)
        lastPlayerX = playerX;
        lastPlayerY = playerY;
    } else {
        // Switch to GREEN LIGHT
        lightIndicator.textContent = 'GREEN LIGHT';
        lightIndicator.classList.remove('red');
        lightIndicator.style.color = '#00ff00';
        lightIndicator.style.textShadow = '0 0 30px rgba(0, 255, 0, 1.0), 0 0 60px rgba(0, 255, 0, 0.8)';
        
        // Remove red tint
        redlightGameContainer.classList.remove('red-active');
    }
}

function checkMovementDuringRedLight() {
    if (!redlightGameActive) return;
    
    if (isRedLight && !hasCaughtPlayer) {
        // Check if player moved
        if (playerX !== lastPlayerX || playerY !== lastPlayerY) {
            // CAUGHT! Trigger camera jumpscare
            hasCaughtPlayer = true;
            triggerCameraJumpscare();
        }
    }
}

function updatePlayerPosition() {
    if (!redlightGameActive || hasCaughtPlayer) return;
    
    const speed = 4; // Slightly faster for horizontal movement
    let moved = false;
    
    // WASD and Arrow keys - FOCUS ON RIGHT MOVEMENT
    if (keysPressed['w'] || keysPressed['W'] || keysPressed['ArrowUp']) {
        playerY -= speed;
        moved = true;
    }
    if (keysPressed['s'] || keysPressed['S'] || keysPressed['ArrowDown']) {
        playerY += speed;
        moved = true;
    }
    if (keysPressed['a'] || keysPressed['A'] || keysPressed['ArrowLeft']) {
        playerX -= speed;
        moved = true;
    }
    if (keysPressed['d'] || keysPressed['D'] || keysPressed['ArrowRight']) {
        playerX += speed;
        moved = true;
    }
    
    // Boundary checking - horizontal from left to right
    const maxX = window.innerWidth * 0.8; // Can move 80% across screen
    const maxY = 150; // Limited vertical movement
    playerX = Math.max(0, Math.min(maxX, playerX));
    playerY = Math.max(-maxY, Math.min(maxY, playerY));
    
    // Update sprite position - translate from starting 10% position
    playerSprite.style.transform = `translateX(${playerX}px) translateY(${playerY}px)`;
    
    // Update progress bar
    const progressPercent = (playerX / (maxX - 50)) * 100;
    progressFill.style.width = `${Math.min(100, progressPercent)}%`;
    
    // Check if player reached the right side (WIN!)
    if (playerX >= maxX - 50) {
        // Player won!
        stopRecording(); // Stop recording when game ends
        redlightGameActive = false;
        clearTimeout(lightSwitchInterval);
        
        // Stop red light music
        redlightMusic.pause();
        redlightMusic.currentTime = 0;
        
        // CLEAR KEY STATES
        keysPressed = {};
        
        // Flash success
        lightIndicator.textContent = 'YOU ESCAPED!';
        lightIndicator.style.color = '#00ff00';
        
        setTimeout(() => {
            redlightGameContainer.classList.remove('active');
            continueDoorGame();
        }, 1500);
        return;
    }
    
    // Toggle walk animation if moving
    if (moved && !isRedLight) {
        playerWalkFrame = playerWalkFrame === 1 ? 2 : 1;
        if (playerWalkFrame === 1) {
            playerSprite.src = 'player1.png';
        } else {
            playerSprite.src = 'Player2.png';
        }
    }
    
    // Check if caught during red light
    checkMovementDuringRedLight();
}

function triggerCameraJumpscare() {
    // Stop recording
    stopRecording();
    
    // Stop the game
    redlightGameActive = false;
    clearTimeout(lightSwitchInterval);
    
    // Stop red light music
    redlightMusic.pause();
    redlightMusic.currentTime = 0;
    
    // CLEAR KEY STATES
    keysPressed = {};
    
    // Hide red light game IMMEDIATELY
    redlightGameContainer.classList.remove('active');
    
    // Show camera jumpscare INSTANTLY
    cameraJumpscare.classList.add('active');
    
    // Start shooting effects
    shootingActive = true;
    shotCount = 0;
    wounds = [];
    bloodDrips = [];
    impactFlashes = [];
    faceDistortions = [];
    screenBloodSplatters = [];
    explosionParticles = [];
    explosionFlames = [];
    
    // Start animation loop
    animateShootingEffects();
    
    // Fire 10 shots with intervals
    const shotIntervals = [];
    for (let i = 0; i < 10; i++) {
        const timeout = setTimeout(() => {
            fireShot();
            shotCount++;
            
            // After last shot, end the sequence
            if (shotCount >= 10) {
                setTimeout(() => {
                    shootingActive = false;
                    wounds = [];
                    bloodDrips = [];
                    impactFlashes = [];
                    faceDistortions = [];
                    screenBloodSplatters = [];
                    explosionParticles = [];
                    explosionFlames = [];
                    effectsCtx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
                    cameraJumpscare.classList.remove('active');
                    continueDoorGame();
                }, 2000); // Wait 2 seconds after last shot
            }
        }, i * 300); // 300ms between shots (fast-paced)
        shotIntervals.push(timeout);
    }
}

// Keyboard event listeners for red light game
document.addEventListener('keydown', function(e) {
    if (redlightGameActive) {
        keysPressed[e.key] = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (redlightGameActive) {
        keysPressed[e.key] = false;
    }
});

// Game loop for player movement
setInterval(updatePlayerPosition, 1000 / 60); // 60 FPS

// Phone Game Functions
function startPhoneGame() {
    phoneGameActive = true;
    hasPickedUpPhone = false;
    phoneGameStartTime = Date.now(); // Track when game starts
    
    // Start recording phone game (always use 'phone1' - last one will overwrite)
    // This ensures we always record the last/most recent phone game
    startRecording('phone1');
    
    // Show phone game container
    phoneGameContainer.classList.add('active');
    
    // Make sure phone ring is ready
    phoneRingSound.pause(); // Reset first
    phoneRingSound.currentTime = 0;
    phoneRingSound.volume = 1.0;
    phoneRingSound.loop = true;
    
    // Use setTimeout to avoid any race conditions
    phoneRingStartTimeout = setTimeout(() => {
        phoneRingSound.play().then(() => {
            console.log('✅ PHONE RING IS PLAYING!');
        }).catch(error => {
            console.error('❌ PHONE RING FAILED:', error);
        });
    }, 100);
    
    // Start suspense music in background (quieter)
    suspenseMusic.volume = 0.5;
    suspenseMusic.currentTime = 0;
    suspenseMusic.play();
    
    // Start ALL heavy breathing sounds from the beginning (medium volume)
    heavyBreathing1.volume = 0.6;
    heavyBreathing1.currentTime = 0;
    heavyBreathing1.play();
    heavyBreathing2.volume = 0.6;
    heavyBreathing2.currentTime = 0;
    heavyBreathing2.play();
    heavyBreathing3.volume = 0.6;
    heavyBreathing3.currentTime = 0;
    heavyBreathing3.play();
    
    console.log('🎮 Phone game started - RING SHOULD START IN 100ms!');
    
    // Start phone shaking animation
    phoneSprite.classList.add('phone-shaking');
    
    // Start screen shake that intensifies over time
    startScreenShaking();
}

function startScreenShaking() {
    let shakeIntensity = 0;
    
    screenShakeInterval = setInterval(function() {
        if (!phoneGameActive || hasPickedUpPhone) {
            clearInterval(screenShakeInterval);
            phoneGameContainer.classList.remove('screen-shake');
            return;
        }
        
        // Add screen shake
        phoneGameContainer.classList.add('screen-shake');
        
        // Increase shake intensity over time (optional - could make it more intense)
        shakeIntensity++;
        
    }, 3000); // Shake every 3 seconds when phone rings
}

function pickUpPhone() {
    if (!phoneGameActive || hasPickedUpPhone) return;
    
    hasPickedUpPhone = true;
    phoneGameActive = false;
    
    const pickupTime = Date.now() - phoneGameStartTime;
    console.log('Phone picked up after ' + pickupTime + 'ms');
    
    // Cancel the phone ring start timeout if it hasn't fired yet
    if (phoneRingStartTimeout) {
        clearTimeout(phoneRingStartTimeout);
        phoneRingStartTimeout = null;
    }
    
    // Stop phone ring
    phoneRingSound.pause();
    phoneRingSound.currentTime = 0;
    
    // Stop phone shaking
    phoneSprite.classList.remove('phone-shaking');
    
    // Stop screen shaking
    clearInterval(screenShakeInterval);
    phoneGameContainer.classList.remove('screen-shake');
    
    // If picked up within 100ms, skip everything and go back to elevator
    if (pickupTime <= 100) {
        console.log('Quick pickup detected! Skipping animations.');
        endPhoneGameQuick();
        return;
    }
    
    // Start slow zoom-in effect
    phoneGameContainer.classList.add('zooming-in');
    
    // NOW play phone audio after picking up
    phoneAudio.currentTime = 0;
    phoneAudio.play();
    
    console.log('Phone audio playing with zoom');
    
    // Heavy breathing is already playing - keep it going
    // Wait for phone audio to end, THEN end the game after a delay
    phoneAudio.addEventListener('ended', function() {
        console.log('📱 Phone audio ended, waiting 3 seconds before ending game...');
        // Wait 3 more seconds after phone audio ends before ending game
        setTimeout(function() {
            console.log('⏰ 3 seconds passed, calling endPhoneGame()');
            endPhoneGame();
        }, 3000);
    }, { once: true });
    
    console.log('📱 Phone audio playing, duration:', phoneAudio.duration);
}

function endPhoneGameQuick() {
    // Cancel the phone ring start timeout if it hasn't fired yet
    if (phoneRingStartTimeout) {
        clearTimeout(phoneRingStartTimeout);
        phoneRingStartTimeout = null;
    }
    
    // Stop all sounds immediately
    phoneRingSound.pause();
    phoneRingSound.currentTime = 0;
    heavyBreathing1.pause();
    heavyBreathing1.currentTime = 0;
    heavyBreathing2.pause();
    heavyBreathing2.currentTime = 0;
    heavyBreathing3.pause();
    heavyBreathing3.currentTime = 0;
    phoneAudio.pause();
    phoneAudio.currentTime = 0;
    suspenseMusic.pause();
    suspenseMusic.currentTime = 0;
    
    // End phone game immediately
    phoneGameContainer.classList.remove('active');
    continueDoorGame();
}

function endPhoneGame() {
    // Stop recording
    stopRecording();
    
    // Cancel the phone ring start timeout if it hasn't fired yet
    if (phoneRingStartTimeout) {
        clearTimeout(phoneRingStartTimeout);
        phoneRingStartTimeout = null;
    }
    
    // Determine if we should jumpscare based on current game
    let shouldJumpscare;
    if (debugPhoneJumpscareOverride !== null) {
        // Debug override takes precedence
        shouldJumpscare = debugPhoneJumpscareOverride;
        console.log('🎮 Debug override active - jumpscare:', shouldJumpscare);
    } else {
        // Check if current game is phone_jumpscare or phone_no_jumpscare
        const currentGame = gameOrder[currentGameIndex];
        if (currentGame === 'phone_jumpscare') {
            shouldJumpscare = true;
            console.log('📱 Phone jumpscare game - JUMPSCARE ENABLED');
        } else if (currentGame === 'phone_no_jumpscare') {
            shouldJumpscare = false;
            console.log('📱 Phone no-jumpscare game - JUMPSCARE DISABLED');
        } else {
            // Fallback to random for any other phone game
            shouldJumpscare = Math.random() < 0.33;
            console.log('🎲 Random roll - jumpscare:', shouldJumpscare);
        }
    }
    
    if (shouldJumpscare) {
        console.log('👻 TRIGGERING PHONE JUMPSCARE!');
        triggerPhoneJumpscare();
    } else {
        console.log('✅ No jumpscare - continuing normally');
        
        // Stop all breathing sounds, phone audio, and suspense music
        heavyBreathing1.pause();
        heavyBreathing1.currentTime = 0;
        heavyBreathing2.pause();
        heavyBreathing2.currentTime = 0;
        heavyBreathing3.pause();
        heavyBreathing3.currentTime = 0;
        phoneAudio.pause();
        phoneAudio.currentTime = 0;
        suspenseMusic.pause();
        suspenseMusic.currentTime = 0;
        
        // Remove zoom effect
        phoneGameContainer.classList.remove('zooming-in');
        
        // End phone game and continue
        phoneGameContainer.classList.remove('active');
        continueDoorGame();
    }
}

function triggerPhoneJumpscare() {
    console.log('📱💀 Phone jumpscare function called!');
    
    // Cancel the phone ring start timeout if it hasn't fired yet
    if (phoneRingStartTimeout) {
        clearTimeout(phoneRingStartTimeout);
        phoneRingStartTimeout = null;
    }
    
    // Stop all sounds
    phoneRingSound.pause();
    phoneRingSound.currentTime = 0;
    heavyBreathing1.pause();
    heavyBreathing2.pause();
    heavyBreathing3.pause();
    phoneAudio.pause();
    suspenseMusic.pause();
    
    // Hide phone game
    phoneGameContainer.classList.remove('active', 'zooming-in');
    
    // Show phone jumpscare
    const phoneJumpscareOverlay = document.getElementById('phoneJumpscareOverlay');
    console.log('Jumpscare overlay element:', phoneJumpscareOverlay);
    phoneJumpscareOverlay.classList.add('active');
    console.log('Jumpscare overlay active class added');
    
    // Play random jumpscare sound
    const jumpscaresSounds = [jumpscareSound, jumpscareSound2, jumpscareSound3];
    const randomSound = jumpscaresSounds[Math.floor(Math.random() * jumpscaresSounds.length)];
    randomSound.currentTime = 0;
    const playPromise = randomSound.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('🔊 Jumpscare sound playing!');
        }).catch(error => {
            console.error('❌ Error playing jumpscare sound:', error);
        });
    }
    
    // Remove after 1.5 seconds
    setTimeout(() => {
        console.log('Removing phone jumpscare overlay');
        phoneJumpscareOverlay.classList.remove('active');
        continueDoorGame();
    }, 1500);
}

// Phone click handler
phoneSprite.addEventListener('click', pickUpPhone);

// Function to trigger jumpscare 3
function triggerJumpscare3() {
    jumpscare3.classList.add('active', 'flashing', 'shaking');
    
    // Play jumpscare 3 sound REALLY LOUD - 5 INSTANCES!
    jumpscareSound3_1.currentTime = 0;
    jumpscareSound3_1.play();
    jumpscareSound3_2.currentTime = 0;
    jumpscareSound3_2.play();
    jumpscareSound3_3.currentTime = 0;
    jumpscareSound3_3.play();
    jumpscareSound3_4.currentTime = 0;
    jumpscareSound3_4.play();
    jumpscareSound3_5.currentTime = 0;
    jumpscareSound3_5.play();
    
    // After 1.5 seconds, hide jumpscare 3 and continue
    setTimeout(function() {
        jumpscare3.classList.remove('active', 'flashing', 'shaking');
        continueDoorGame();
    }, 1500);
}

// Function to continue after door game
function continueDoorGame() {
    // CLEAR KEY STATES when transitioning
    keysPressed = {};
    
    // Increment game index to move to next game
    currentGameIndex++;
    
    // Check if we've completed all games - trigger ending sequence
    if (currentGameIndex >= gameOrder.length) {
        triggerEndingSequence();
        return;
    }
    
    // Hide door game
    doorGameContainer.classList.remove('active');
    horrorMusic.pause();
    horrorMusic.currentTime = 0;
    
    // Reset typewriter and door image for next time
    typewriterText.textContent = '';
    doorImageContainer.classList.remove('visible');
    
    // Completely reset elevator state
    elevatorContainer.className = 'elevator-container';
    
    // Force position and add shaking with a small delay to ensure reset
    setTimeout(function() {
        elevatorContainer.style.top = '50%';
        elevatorContainer.classList.add('shaking');
    }, 50);
    
    // Restart elevator music and continue going up
    audioPlayer.play();
    
    // Ensure background is visible and moving
    backgroundTexture.classList.add('visible');
    backgroundTexture.classList.add('moving');
    
    // Turn lights back on
    canFlashLight = true;
    scheduleNextFlash();
    sparkInterval = setInterval(createSpark, 50);
    
    // Schedule random screeches for this ride
    scheduleRandomScreeches(11000);
    
    // Stop again after the same duration (11 seconds total from play click)
    setTimeout(function() {
        // Stop everything again
        audioPlayer.pause();
        backgroundTexture.classList.remove('moving');
        clearInterval(sparkInterval);
        canFlashLight = false;
        clearTimeout(lightFlashInterval);
        elevatorLightOverlay.classList.remove('visible');
        lightCircle.classList.remove('visible');
        elevatorContainer.classList.remove('shaking');
        elevatorContainer.classList.add('frozen');
        
        // Clear any remaining screech timeouts
        screechTimeouts.forEach(timeout => clearTimeout(timeout));
        screechTimeouts = [];
        
        // Show open door button again for second round
        openDoorButton.classList.remove('hidden');
    }, 11000);
}

// Function to display credits
function startCredits() {
    console.log('🎬 Starting credits...');
    creditsActive = true;
    creditsContainer.classList.add('active');
    creditsContainerRight.classList.add('active');
    creditsContainer.innerHTML = ''; // Clear any existing content
    creditsContainerRight.innerHTML = '';
    
    let currentIndex = 0;
    
    // Function to add a single credit (alternates left/right)
    function addCredit() {
        // Loop back to start if we've shown all credits
        if (currentIndex >= CREDITS.length) {
            currentIndex = 0;
        }
        
        const credit = CREDITS[currentIndex];
        const useLeftSide = currentIndex % 2 === 0; // Alternate sides
        const targetContainer = useLeftSide ? creditsContainer : creditsContainerRight;
        
        const creditDiv = document.createElement('div');
        creditDiv.className = 'credit-line';
        
        // Apply type-specific styling
        if (credit.type === 'section') {
            creditDiv.textContent = credit.text;
            creditDiv.style.fontSize = '24px';
            creditDiv.style.fontWeight = 'bold';
            creditDiv.style.marginTop = '40px';
        } else if (credit.type === 'role') {
            creditDiv.className = 'credit-line role';
            creditDiv.textContent = credit.text;
            if (credit.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'credit-line role';
                nameDiv.textContent = credit.name;
                nameDiv.style.fontWeight = 'bold';
                targetContainer.appendChild(creditDiv);
                targetContainer.appendChild(nameDiv);
                currentIndex++;
                return;
            }
        } else if (credit.type === 'monster') {
            creditDiv.classList.add('monster');
            creditDiv.textContent = credit.text;
            if (credit.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'credit-line monster';
                nameDiv.textContent = credit.name;
                nameDiv.style.fontWeight = 'bold';
                targetContainer.appendChild(creditDiv);
                targetContainer.appendChild(nameDiv);
                currentIndex++;
                return;
            }
        } else if (credit.type === 'glitch') {
            creditDiv.classList.add('glitch');
            creditDiv.textContent = credit.text;
            if (credit.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'credit-line glitch';
                nameDiv.textContent = credit.name;
                targetContainer.appendChild(creditDiv);
                targetContainer.appendChild(nameDiv);
                currentIndex++;
                return;
            }
        } else if (credit.type === 'corrupted') {
            creditDiv.classList.add('corrupted');
            creditDiv.textContent = credit.text;
        }
        
        targetContainer.appendChild(creditDiv);
        currentIndex++;
    }
    
    // Add credits every 200ms (EVEN FASTER!)
    const creditInterval = setInterval(() => {
        addCredit();
        
        // Start glitching around credit 60 - ENTIRE SCREEN + GLITCH SOUNDS
        if (currentIndex > 60 && currentIndex < 100 && !document.body.classList.contains('screen-glitching')) {
            document.body.classList.add('screen-glitching');
            creditsContainer.classList.add('glitching');
            creditsContainerRight.classList.add('glitching');
            console.log('🎬 Starting screen glitch effects!');
            
            // Play random glitch sounds every 3-6 seconds (less frequent at first)
            const glitchSoundInterval = setInterval(() => {
                const randomGlitch = glitchSounds[Math.floor(Math.random() * glitchSounds.length)];
                randomGlitch.currentTime = 0;
                randomGlitch.volume = 0.4 + Math.random() * 0.3; // Vary volume 0.4-0.7
                randomGlitch.play();
            }, 3000 + Math.random() * 3000);
            glitchIntervals.push(glitchSoundInterval);
            
            // Subtle visual variations during glitch phase
            let glitchPhase = 0;
            const subtleDistortionInterval = setInterval(() => {
                glitchPhase++;
                const rand = Math.random();
                
                if (rand < 0.3) {
                    // Quick brightness pulse
                    document.body.style.filter = 'brightness(1.3)';
                    setTimeout(() => {
                        document.body.style.filter = '';
                    }, 150);
                } else if (rand < 0.5) {
                    // Quick desaturation
                    document.body.style.filter = 'saturate(0.3)';
                    setTimeout(() => {
                        document.body.style.filter = '';
                    }, 200);
                } else if (rand < 0.65) {
                    // Quick contrast shift
                    document.body.style.filter = 'contrast(1.8)';
                    setTimeout(() => {
                        document.body.style.filter = '';
                    }, 100);
                }
                // 35% chance: nothing happens (keeps it unpredictable)
            }, 5000 + Math.random() * 3000);
            glitchIntervals.push(subtleDistortionInterval);
        }
        
        // Start INTENSE VARIED EFFECTS around credit 100
        if (currentIndex > 100 && !document.body.classList.contains('screen-flashing')) {
            document.body.classList.add('screen-flashing');
            creditsContainer.classList.add('flashing');
            creditsContainerRight.classList.add('flashing');
            console.log('🎬 Starting VARIED intense effects + JUMPSCARES!');
            
            // Clear previous glitch intervals
            glitchIntervals.forEach(interval => clearInterval(interval));
            glitchIntervals = [];
            
            // Play glitch sounds MORE frequently during this phase
            const intenseGlitchInterval = setInterval(() => {
                const randomGlitch = glitchSounds[Math.floor(Math.random() * glitchSounds.length)];
                randomGlitch.currentTime = 0;
                randomGlitch.volume = 0.6 + Math.random() * 0.3;
                randomGlitch.play();
            }, 1500 + Math.random() * 2500);
            glitchIntervals.push(intenseGlitchInterval);
            
            // RARE quick jumpscares during this phase (every 10-20 seconds, less predictable!)
            function scheduleRandomJumpscare() {
                const delay = 10000 + Math.random() * 10000; // 10-20 seconds
                const timeout = setTimeout(() => {
                    // 60% chance to actually show jumpscare (makes it less predictable)
                    if (Math.random() < 0.6) {
                        // Show random jumpscare for 80-150ms (varied duration)
                        const duration = 80 + Math.random() * 70;
                        const jumpscares = [jumpscare, jumpscare2, jumpscare3];
                        const randomJumpscare = jumpscares[Math.floor(Math.random() * jumpscares.length)];
                        randomJumpscare.classList.add('active');
                        
                        // Play jumpscare sound
                        const jumpscaresSounds = [jumpscareSound, jumpscareSound2, jumpscareSound3];
                        const randomSound = jumpscaresSounds[Math.floor(Math.random() * jumpscaresSounds.length)];
                        randomSound.currentTime = 0;
                        randomSound.volume = 0.4;
                        randomSound.play();
                        
                        setTimeout(() => {
                            randomJumpscare.classList.remove('active');
                        }, duration);
                    }
                    
                    // Schedule another one
                    scheduleRandomJumpscare();
                }, delay);
                jumpscareTimeouts.push(timeout);
            }
            scheduleRandomJumpscare();
            
            // CYCLE through MANY different visual effects with MORE VARIATION
            let effectCycle = 0;
            const variedEffectsInterval = setInterval(() => {
                effectCycle++;
                
                // 90% color effects, 10% flashbacks (so flashbacks are rare)
                const isFlashback = Math.random() < 0.1;
                
                if (!isFlashback) {
                    // Choose from color/filter effects only
                    const effectType = Math.floor(Math.random() * 12); // 12 color effects
                    
                    console.log('🎨 Applying effect type:', effectType);
                    
                    if (effectType === 0) {
                        // Red tint wave
                        console.log('Red tint');
                        document.body.style.filter = 'sepia(1) saturate(3) hue-rotate(-50deg)';
                        setTimeout(() => { document.body.style.filter = ''; }, 500);
                    } else if (effectType === 1) {
                        // Desaturate + high contrast
                        console.log('Desaturate');
                        document.body.style.filter = 'saturate(0) contrast(2)';
                        setTimeout(() => { document.body.style.filter = ''; }, 400);
                    } else if (effectType === 2) {
                        // Quick invert
                        console.log('Invert');
                        document.body.style.filter = 'invert(1)';
                        setTimeout(() => { document.body.style.filter = ''; }, 200);
                    } else if (effectType === 3) {
                        // Blue/cyan tint
                        console.log('Blue tint');
                        document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
                        setTimeout(() => { document.body.style.filter = ''; }, 500);
                    } else if (effectType === 4) {
                        // Brightness pulse
                        console.log('Brightness');
                        document.body.style.filter = 'brightness(2)';
                        setTimeout(() => { document.body.style.filter = ''; }, 250);
                    } else if (effectType === 5) {
                        // Darkness wave
                        console.log('Darkness');
                        document.body.style.filter = 'brightness(0.3) contrast(1.5)';
                        setTimeout(() => { document.body.style.filter = ''; }, 400);
                    } else if (effectType === 6) {
                        // Green/yellow distortion
                        console.log('Green tint');
                        document.body.style.filter = 'saturate(3) hue-rotate(80deg)';
                        setTimeout(() => { document.body.style.filter = ''; }, 450);
                    } else if (effectType === 7) {
                        // Extreme contrast
                        console.log('Contrast');
                        document.body.style.filter = 'contrast(3) brightness(1.4)';
                        setTimeout(() => { document.body.style.filter = ''; }, 300);
                    } else if (effectType === 8) {
                        // Purple/magenta tint
                        console.log('Purple tint');
                        document.body.style.filter = 'hue-rotate(280deg) saturate(3)';
                        setTimeout(() => { document.body.style.filter = ''; }, 450);
                    } else if (effectType === 9) {
                        // Orange/sepia corruption
                        console.log('Orange tint');
                        document.body.style.filter = 'sepia(1) saturate(3) hue-rotate(10deg)';
                        setTimeout(() => { document.body.style.filter = ''; }, 400);
                    } else if (effectType === 10) {
                        // Blur pulse
                        console.log('Blur');
                        document.body.style.filter = 'blur(4px) brightness(1.3)';
                        setTimeout(() => { document.body.style.filter = ''; }, 350);
                    } else {
                        // Extreme saturation + random rotation
                        const randomHue = Math.floor(Math.random() * 360);
                        console.log('Random hue:', randomHue);
                        document.body.style.filter = 'saturate(4) hue-rotate(' + randomHue + 'deg)';
                        setTimeout(() => { document.body.style.filter = ''; }, 400);
                    }
                } else {
                    // RARE flashback to a game scene
                    const flashbackType = Math.random() < 0.5 ? 'door' : 'redlight';
                    
                    if (flashbackType === 'door') {
                        console.log('🎮 Flashback: Door game');
                        doorImageContainer.classList.add('visible');
                        doorImageContainer.style.opacity = '0.6';
                        setTimeout(() => { 
                            doorImageContainer.classList.remove('visible');
                            doorImageContainer.style.opacity = '1';
                        }, 200);
                    } else {
                        console.log('🎮 Flashback: Red light game');
                        redlightGameContainer.classList.add('active');
                        redlightGameContainer.style.opacity = '0.5';
                        setTimeout(() => { 
                            redlightGameContainer.classList.remove('active');
                            redlightGameContainer.style.opacity = '1';
                        }, 250);
                    }
                }
            }, 2000 + Math.random() * 1000); // 2-3 seconds between effects
            glitchIntervals.push(variedEffectsInterval);
        }
        
        // Stop when all credits are shown (music will keep playing until it ends naturally)
        if (currentIndex >= CREDITS.length) {
            clearInterval(creditInterval);
            console.log('🎬 All credits shown! Continuing effects until music ends...');
        }
    }, 200);
    
    // Auto-scroll credits upward (MUCH faster!)
    creditsScrollInterval = setInterval(() => {
        if (creditsContainer.scrollHeight > 0) {
            creditsContainer.scrollTop += 5; // Much faster scroll
        }
        if (creditsContainerRight.scrollHeight > 0) {
            creditsContainerRight.scrollTop += 5;
        }
    }, 40);
    
    // Function to end the sequence
    function endSequence() {
        console.log('🎵 40 seconds reached - cutting to fade!');
        
        // IMMEDIATELY STOP AND KILL ALL GLITCH SOUNDS
        glitchSounds.forEach(sound => {
            try {
                sound.pause();
                sound.currentTime = 0;
                sound.volume = 0;
                sound.muted = true;
            } catch (e) {
                console.log('Error stopping glitch sound:', e);
            }
        });
        
        // Clear all intervals and timeouts FIRST (prevents new sounds)
        glitchIntervals.forEach(interval => clearInterval(interval));
        jumpscareTimeouts.forEach(timeout => clearTimeout(timeout));
        glitchIntervals = [];
        jumpscareTimeouts = [];
        
        console.log('✅ All glitch intervals cleared!');
        
        // Stop music
        endMusic.pause();
        
        // INSTANT fade to black
        fadeToBlack.classList.add('active');
        
        // Stop all effects IMMEDIATELY
            document.body.classList.remove('screen-glitching', 'screen-flashing');
            document.body.style.filter = '';
            backgroundTexture.classList.remove('moving');
            clearInterval(sparkInterval);
            canFlashLight = false;
            clearTimeout(lightFlashInterval);
            elevatorLightOverlay.classList.remove('visible');
            lightCircle.classList.remove('visible');
            elevatorContainer.classList.remove('shaking');
            creditsContainer.classList.remove('active', 'glitching', 'flashing');
            creditsContainerRight.classList.remove('active', 'glitching', 'flashing');
            
        // After 2 seconds in black, play scary dialog AND show recordings
            setTimeout(() => {
            console.log('👹 Playing end scary dialog AND showing recordings...');
            
            // TRIPLE CHECK - Make sure ALL glitch sounds are DEAD
            glitchSounds.forEach(sound => {
                sound.pause();
                sound.currentTime = 0;
                sound.volume = 0;
                sound.muted = true;
            });
            
                endScaryDialog.currentTime = 0;
                endScaryDialog.volume = 0.9;
                endScaryDialog.play();
            
            // Show all recordings simultaneously
            playbackRecordings();
            }, 2000);
    }
    
    // Cut at exactly 40 seconds
    setTimeout(() => {
        endSequence();
    }, 40000);
    
    // Also listen if music somehow ends early
    endMusic.addEventListener('ended', function() {
        if (endMusic.currentTime < 40) {
            endSequence();
        }
    }, { once: true });
}

// Function to stop credits
function stopCredits() {
    creditsActive = false;
    creditsContainer.classList.remove('active', 'glitching', 'flashing');
    creditsContainerRight.classList.remove('active', 'glitching', 'flashing');
    fadeToBlack.classList.remove('active');
    recordingPlayback.classList.remove('active');
    document.body.classList.remove('screen-glitching', 'screen-flashing');
    document.body.style.filter = ''; // Clear any filter effects
    
    // Stop all playback videos
    const videos = [playbackVideo1, playbackVideo2, playbackVideo3, playbackVideo4, playbackVideo5, playbackVideo6];
    videos.forEach(video => {
        if (video) {
            video.pause();
            video.src = '';
        }
    });
    
    // Clear all intervals and timeouts
    if (creditsScrollInterval) {
        clearInterval(creditsScrollInterval);
        creditsScrollInterval = null;
    }
    glitchIntervals.forEach(interval => clearInterval(interval));
    glitchIntervals = [];
    jumpscareTimeouts.forEach(timeout => clearTimeout(timeout));
    jumpscareTimeouts = [];
    
    // Stop all audio and RESET VOLUMES
    endMusic.pause();
    glitchSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 0.7; // Reset to default volume
    });
    endScaryDialog.pause();
    endScaryDialog.currentTime = 0;
    suspenseMusic.pause();
    suspenseMusic.currentTime = 0;
    suspenseMusic.loop = false;
}

// Function to trigger ending sequence after all games are complete
function triggerEndingSequence() {
    console.log('🎬 Triggering ending sequence...');
    isEndingSequence = true;
    
    // Stop any active recording
    stopRecording();
    
    // Hide all game containers
    doorGameContainer.classList.remove('active');
    phoneGameContainer.classList.remove('active');
    redlightGameContainer.classList.remove('active');
    shootingGalleryContainer.classList.remove('active');
    blinkGameContainer.classList.remove('active');
    cookieGameContainer.classList.remove('active');
    
    // Stop all music
    horrorMusic.pause();
    horrorMusic.currentTime = 0;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    
    // Reset typewriter and door image
    typewriterText.textContent = '';
    doorImageContainer.classList.remove('visible');
    
    // Completely reset elevator state
    elevatorContainer.className = 'elevator-container';
    
    // Force position and add shaking with a small delay to ensure reset
    setTimeout(function() {
        elevatorContainer.style.top = '50%';
        elevatorContainer.classList.add('shaking');
    }, 50);
    
    // Play END MUSIC instead of elevator music
    endMusic.currentTime = 0;
    endMusic.volume = 0.7;
    endMusic.play();
    console.log('🎵 Playing EndMusic.mp3');
    
    // Ensure background is visible and moving
    backgroundTexture.classList.add('visible');
    backgroundTexture.classList.add('moving');
    
    // Turn lights back on
    canFlashLight = true;
    scheduleNextFlash();
    sparkInterval = setInterval(createSpark, 50);
    
    // NO SCREECHES - don't call scheduleRandomScreeches()
    
    // After 3.5 seconds, start credits (elevator keeps going)
    setTimeout(function() {
        console.log('🎬 3.5 seconds elapsed - starting credits!');
        startCredits();
    }, 3500);
}

// Open door button click handler
openDoorButton.addEventListener('click', function() {
    // Hide button
    openDoorButton.classList.add('hidden');
    
    // Turn off lights
    elevatorLightOverlay.classList.remove('visible');
    lightCircle.classList.remove('visible');
    
    // Reset typewriter text
    typewriterText.textContent = '';
    
    // Get the next game from the sequential order
    let gameChoice = gameOrder[currentGameIndex];
    
    // Map the game choice to the actual game type
    let actualGameType;
    if (gameChoice === 'phone_no_jumpscare' || gameChoice === 'phone_jumpscare') {
        actualGameType = 'phone';
    } else {
        actualGameType = gameChoice;
    }
    
    if (actualGameType === 'doors') {
        // Reset door game for fresh start
        doorImageContainer.classList.remove('visible');
        
        // Start horror music
        horrorMusic.play();
        
        // Show door game container
        doorGameContainer.classList.add('active');
        
        // Randomly select bad door (0=left, 1=middle, 2=right)
        badDoorIndex = Math.floor(Math.random() * 3);
        
        // Typewriter effect for "choose the doors carefully."
        typeWriter('choose the doors carefully.', typewriterText, 80, function() {
            // After typewriter finishes, show the door image after 1 second
            setTimeout(function() {
                doorImageContainer.classList.add('visible');
                // Start recording door game
                startRecording('doors');
            }, 1000);
        });
    } else if (actualGameType === 'redlight') {
        // Red Light Green Light game
        // Start horror music
        horrorMusic.play();
        
        // Show door game container for typewriter
        doorGameContainer.classList.add('active');
        
        // Typewriter effect for "Red Light Green light."
        typeWriter('Red Light Green light.', typewriterText, 80, function() {
            // After typewriter finishes, hide door container and start game
            setTimeout(function() {
                doorGameContainer.classList.remove('active');
                horrorMusic.pause();
                horrorMusic.currentTime = 0;
                startRedLightGame();
            }, 1500);
        });
    } else if (actualGameType === 'phone') {
        // Phone game
        // Start horror music
        horrorMusic.play();
        
        // Show door game container for typewriter
        doorGameContainer.classList.add('active');
        
        // Typewriter effect for "Pick up the phone."
        typeWriter('Pick up the phone.', typewriterText, 80, function() {
            // After typewriter finishes, hide door container and start phone game
            setTimeout(function() {
                doorGameContainer.classList.remove('active');
                horrorMusic.pause();
                horrorMusic.currentTime = 0;
                startPhoneGame();
            }, 1500);
        });
    } else if (actualGameType === 'shooting') {
        // Shooting Gallery game
        // Start horror music
        horrorMusic.play();
        
        // Show door game container for typewriter
        doorGameContainer.classList.add('active');
        
        // Typewriter effect for "Hit the targets."
        typeWriter('Hit the targets.', typewriterText, 80, function() {
            // After typewriter finishes, hide door container and start shooting gallery
            setTimeout(function() {
                doorGameContainer.classList.remove('active');
                horrorMusic.pause();
                horrorMusic.currentTime = 0;
                startShootingGallery();
            }, 1500);
        });
    } else if (actualGameType === 'blink') {
        // Blink game
        // Start horror music
        horrorMusic.play();
        
        // Show door game container for typewriter
        doorGameContainer.classList.add('active');
        
        // Typewriter effect for "Don't blink."
        typeWriter("Don't blink.", typewriterText, 80, function() {
            // After typewriter finishes, hide door container and start blink game
            setTimeout(function() {
                doorGameContainer.classList.remove('active');
                horrorMusic.pause();
                horrorMusic.currentTime = 0;
                startBlinkGame();
            }, 1500);
        });
    } else {
        // Cookie tracing game
        // Start horror music
        horrorMusic.play();
        
        // Show door game container for typewriter
        doorGameContainer.classList.add('active');
        
        // Typewriter effect for "Trace the cookie."
        typeWriter('Trace the cookie.', typewriterText, 80, function() {
            // After typewriter finishes, hide door container and start cookie game
            setTimeout(function() {
                doorGameContainer.classList.remove('active');
                horrorMusic.pause();
                horrorMusic.currentTime = 0;
                startCookieGame();
            }, 1500);
        });
    }
});

// Door click handlers
doorLeft.addEventListener('click', function() {
    stopRecording(); // Stop recording when door is clicked
    if (badDoorIndex === 0) {
        triggerJumpscare3();
    } else {
        continueDoorGame();
    }
});

doorMiddle.addEventListener('click', function() {
    stopRecording(); // Stop recording when door is clicked
    if (badDoorIndex === 1) {
        triggerJumpscare3();
    } else {
        continueDoorGame();
    }
});

doorRight.addEventListener('click', function() {
    stopRecording(); // Stop recording when door is clicked
    if (badDoorIndex === 2) {
        triggerJumpscare3();
    } else {
        continueDoorGame();
    }
});

// Play button hover behavior - move on first hover, jumpscare on second
playButton.addEventListener('mouseenter', function() {
    playButtonHoverCount++;
    
    if (playButtonHoverCount === 1) {
        // First hover - move to random position within SMALL CENTERED SAFE BOX
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Define a SMALL SAFE BOX in the center - only 5% of screen width/height
        const safeBoxWidth = viewportWidth * 0.05;
        const safeBoxHeight = viewportHeight * 0.05;
        
        // Center the safe box
        const safeBoxLeft = viewportWidth * 0.475;  // Start at 47.5% from left
        const safeBoxTop = viewportHeight * 0.475;   // Start at 47.5% from top
        
        // Button estimated size (conservative)
        const buttonWidth = 200;
        const buttonHeight = 80;
        
        // Calculate random position ONLY within the small centered box
        const randomX = safeBoxLeft + Math.floor(Math.random() * (safeBoxWidth - buttonWidth));
        const randomY = safeBoxTop + Math.floor(Math.random() * (safeBoxHeight - buttonHeight));
        
        // Apply absolute clamps to keep within the small box
        const finalX = Math.max(safeBoxLeft, Math.min(randomX, safeBoxLeft + safeBoxWidth - buttonWidth));
        const finalY = Math.max(safeBoxTop, Math.min(randomY, safeBoxTop + safeBoxHeight - buttonHeight));
        
        playButton.style.left = finalX + 'px';
        playButton.style.top = finalY + 'px';
        playButton.style.bottom = 'auto';
        playButton.style.right = 'auto';
        
        console.log(`Play button moved to: (${finalX}, ${finalY}), safe box: ${safeBoxLeft},${safeBoxTop} to ${safeBoxLeft + safeBoxWidth},${safeBoxTop + safeBoxHeight}, viewport: ${viewportWidth}x${viewportHeight}`);
    } else if (playButtonHoverCount === 2) {
        // Second hover - trigger jumpscare 2!
        jumpscare2.classList.add('active', 'flashing', 'shaking');
        
        // Play jumpscare 2 sound REALLY LOUD - 5 INSTANCES!
        jumpscareSound2_1.currentTime = 0;
        jumpscareSound2_1.play();
        jumpscareSound2_2.currentTime = 0;
        jumpscareSound2_2.play();
        jumpscareSound2_3.currentTime = 0;
        jumpscareSound2_3.play();
        jumpscareSound2_4.currentTime = 0;
        jumpscareSound2_4.play();
        jumpscareSound2_5.currentTime = 0;
        jumpscareSound2_5.play();
        
        // After 1.5 seconds, hide jumpscare 2
        setTimeout(function() {
            jumpscare2.classList.remove('active', 'flashing', 'shaking');
        }, 1500);
    }
});

// Warning Screen Handler
const warningScreen = document.getElementById('warningScreen');
const acceptWarningButton = document.getElementById('acceptWarningButton');

acceptWarningButton.addEventListener('click', async function() {
    // Disable button to prevent multiple clicks
    acceptWarningButton.disabled = true;
    acceptWarningButton.textContent = 'REQUESTING CAMERA ACCESS...';
    
    // Request camera access FIRST - this is required!
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true, 
            audio: false 
        });
        
        // Camera access granted! Store the stream
        console.log('Camera access granted');
        
        // Stop the test stream (we'll request it again later when needed)
        stream.getTracks().forEach(track => track.stop());
        
    } catch (err) {
        // Camera access DENIED - show error and don't proceed
        console.error('Camera access denied:', err);
        acceptWarningButton.disabled = false;
        acceptWarningButton.textContent = '❌ CAMERA ACCESS REQUIRED - TRY AGAIN';
        acceptWarningButton.style.background = 'linear-gradient(135deg, #cc0000 0%, #990000 100%)';
        
        // Show error message
        alert('⚠️ Camera access is REQUIRED to play this game!\n\nPlease click "Allow" when your browser asks for camera permission.\n\nThe game uses your camera for interactive horror elements.');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            acceptWarningButton.textContent = 'I UNDERSTAND - ENTER GAME';
            acceptWarningButton.style.background = 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)';
        }, 2000);
        
        return; // Don't proceed without camera access
    }
    
    // Camera access granted - now enter fullscreen mode
    try {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            await elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            await elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE11
            await elem.msRequestFullscreen();
        }
    } catch (err) {
        console.log('Fullscreen request failed:', err);
        // Fullscreen is not critical, continue anyway
    }
    
    // Success! Hide warning screen with fade out
    acceptWarningButton.textContent = '✓ ACCESS GRANTED - LOADING...';
    acceptWarningButton.style.background = 'linear-gradient(135deg, #00cc00 0%, #009900 100%)';
    
    setTimeout(() => {
        warningScreen.classList.add('hidden');
        
        // Remove warning screen completely after transition
        setTimeout(() => {
            warningScreen.style.display = 'none';
        }, 500);
    }, 500);
});

// When clicking start, trigger jumpscare first!
startButton.addEventListener('click', async function() {
    // Request camera access
    await requestCameraAccess();
    
    // Hide start button immediately
    startButton.classList.add('hidden');
    
    // Show jumpscare with flash and shake effects
    jumpscare.classList.add('active', 'flashing', 'shaking');
    
    // Play jumpscare sound EVEN LOUDER - 5 INSTANCES AT ONCE!!!
    jumpscareSound.currentTime = 0;
    jumpscareSound.play();
    jumpscareSound2.currentTime = 0;
    jumpscareSound2.play();
    jumpscareSound3.currentTime = 0;
    jumpscareSound3.play();
    jumpscareSound4.currentTime = 0;
    jumpscareSound4.play();
    jumpscareSound5.currentTime = 0;
    jumpscareSound5.play();
    
    // After 1.5 seconds, hide jumpscare and continue with normal flow
    setTimeout(function() {
        jumpscare.classList.remove('active', 'flashing', 'shaking');
        
        // Now start the normal flow
        fillerMusic.play();
        playButton.classList.remove('hidden');
    }, 1500);
});

// Function to create a spark
function createSpark() {
    const spark = document.createElement('div');
    spark.className = 'spark';
    
    // Get elevator position
    const elevatorRect = elevatorContainer.getBoundingClientRect();
    
    // Random position around the elevator edges
    const side = Math.random() < 0.5 ? -1 : 1; // left or right
    const randomX = side * (elevatorRect.width / 2 + Math.random() * 20);
    const randomY = (Math.random() - 0.5) * elevatorRect.height * 0.8;
    const drift = side * (30 + Math.random() * 50); // Drift away from elevator
    
    spark.style.left = '50%';
    spark.style.top = '50%';
    spark.style.transform = `translate(${randomX}px, ${randomY}px)`;
    spark.style.setProperty('--drift', `${drift}px`);
    spark.style.animation = `sparkFall ${0.5 + Math.random() * 0.5}s ease-out forwards`;
    
    elevatorContainer.appendChild(spark);
    
    // Remove spark after animation
    setTimeout(() => {
        spark.remove();
    }, 1000);
}

// Function to flash the light elevator
function flashLight() {
    if (!canFlashLight) return;
    
    // Turn on light
    elevatorLightOverlay.classList.add('visible');
    lightCircle.classList.add('visible');
    clickSound.currentTime = 0;
    clickSound.play();
    
    // Keep it on for 0.5-1.5 seconds
    const duration = 500 + Math.random() * 1000;
    setTimeout(function() {
        if (!canFlashLight) return; // Don't turn off if we've stopped
        // Turn off light
        elevatorLightOverlay.classList.remove('visible');
        lightCircle.classList.remove('visible');
        clickSound.currentTime = 0;
        clickSound.play();
    }, duration);
}

// Schedule random light flashes
function scheduleNextFlash() {
    const delay = 2000 + Math.random() * 3000; // 2-5 seconds between flashes (less frequent)
    lightFlashInterval = setTimeout(function() {
        if (canFlashLight) {
            flashLight();
            scheduleNextFlash();
        }
    }, delay);
}


// When clicking play, stop filler music, start elevator music, and animate elevator up
playButton.addEventListener('click', function() {
    fillerMusic.pause();
    fillerMusic.currentTime = 0;
    audioPlayer.play();
    playButton.classList.add('hidden');
    
    // Show the background but don't start moving yet
    backgroundTexture.classList.add('visible');
    
    // Start the rising animation
    elevatorContainer.classList.add('rising');
    
    // Start creating sparks immediately
    sparkInterval = setInterval(createSpark, 50);
    
    // Enable and start random light flashes
    canFlashLight = true;
    scheduleNextFlash();
    
    // After animation completes (0.8 seconds), switch to shaking animation and start background moving
    setTimeout(function() {
        elevatorContainer.classList.remove('rising');
        elevatorContainer.classList.add('shaking');
        // Start moving the background now
        backgroundTexture.classList.add('moving');
    }, 800);
    
    // Schedule random screeches throughout the 11-second ride
    scheduleRandomScreeches(11000);
    
    // After 11 seconds, stop everything
    setTimeout(function() {
        // Stop audio
        audioPlayer.pause();
        
        // Stop background movement
        backgroundTexture.classList.remove('moving');
        
        // Stop sparks
        clearInterval(sparkInterval);
        
        // Stop light flashes
        canFlashLight = false;
        clearTimeout(lightFlashInterval);
        elevatorLightOverlay.classList.remove('visible');
        lightCircle.classList.remove('visible');
        
        // Stop shaking and freeze in place
        elevatorContainer.classList.remove('shaking');
        elevatorContainer.classList.add('frozen');
        
        // Clear any remaining screech timeouts
        screechTimeouts.forEach(timeout => clearTimeout(timeout));
        screechTimeouts = [];
        
        // Show "open elevator door" button
        openDoorButton.classList.remove('hidden');
    }, 11000);
});

// ============================================
// BLINK GAME FUNCTIONS
// ============================================

// Calculate eye aspect ratio (EAR) for blink detection
function calculateEyeAspectRatio(eyeLandmarks) {
    if (!eyeLandmarks || eyeLandmarks.length < 6) return 1.0;
    
    // Calculate vertical distances
    const v1 = Math.hypot(
        eyeLandmarks[1].x - eyeLandmarks[5].x,
        eyeLandmarks[1].y - eyeLandmarks[5].y
    );
    const v2 = Math.hypot(
        eyeLandmarks[2].x - eyeLandmarks[4].x,
        eyeLandmarks[2].y - eyeLandmarks[4].y
    );
    
    // Calculate horizontal distance
    const h = Math.hypot(
        eyeLandmarks[0].x - eyeLandmarks[3].x,
        eyeLandmarks[0].y - eyeLandmarks[3].y
    );
    
    // Eye aspect ratio
    return (v1 + v2) / (2.0 * h);
}

// Get eye landmarks from face mesh
function getEyeLandmarks(faceMeshData) {
    if (!faceMeshData || faceMeshData.length === 0) return null;
    
    // Left eye indices: 33, 160, 158, 133, 153, 144
    const leftEyeIndices = [33, 160, 158, 133, 153, 144];
    // Right eye indices: 362, 385, 387, 263, 373, 380
    const rightEyeIndices = [362, 385, 387, 263, 373, 380];
    
    const leftEye = leftEyeIndices.map(i => faceMeshData[i]);
    const rightEye = rightEyeIndices.map(i => faceMeshData[i]);
    
    return { leftEye, rightEye };
}

// Check if eyes are closed
function areEyesClosed() {
    try {
        if (!faceMesh || faceMesh.length === 0) {
            isLookingAway = true;
            return true; // No face detected = looking away
        }
        
        const eyeLandmarks = getEyeLandmarks(faceMesh);
        if (!eyeLandmarks) {
            isLookingAway = true;
            return true;
        }
        
        const leftEAR = calculateEyeAspectRatio(eyeLandmarks.leftEye);
        const rightEAR = calculateEyeAspectRatio(eyeLandmarks.rightEye);
        const avgEAR = (leftEAR + rightEAR) / 2.0;
        
        // Update debug display with real-time EAR values
        const earValueSpan = document.getElementById('earValue');
        const eyeStatusSpan = document.getElementById('eyeStatus');
        if (earValueSpan) {
            earValueSpan.textContent = avgEAR.toFixed(3);
        }
        if (eyeStatusSpan) {
            if (avgEAR < eyeAspectRatioThreshold) {
                eyeStatusSpan.textContent = '👁️ Closed';
                eyeStatusSpan.style.color = '#ff0000';
            } else {
                eyeStatusSpan.textContent = '👀 Open';
                eyeStatusSpan.style.color = '#00ff00';
            }
        }
        
        // Check if face is turned away (using nose position)
        const nose = faceMesh[1]; // Nose tip
        if (nose && (nose.x < 0.20 || nose.x > 0.80)) {
            isLookingAway = true;
            return true;
        }
        
        isLookingAway = false;
        
        // Eyes are closed if EAR is below threshold
        // Using higher threshold for better blink detection
        return avgEAR < eyeAspectRatioThreshold;
    } catch (error) {
        // If any error occurs, assume looking away for safety
        console.warn('Eye detection error:', error);
        isLookingAway = true;
        return true;
    }
}

// Start blink game
function startBlinkGame() {
    blinkGameActive = true;
    monsterDistance = 100;
    
    // Start recording blink game
    startRecording('blink');
    eyesClosedTime = 0;
    lastEyeCheckTime = Date.now();
    blinkGameStartTime = Date.now(); // Track start time for survival
    isLookingAway = false;
    
    // Show blink game container
    blinkGameContainer.classList.add('active');
    
    // Reset monster position and size
    blinkMonster.style.height = '20vh';
    blinkMonster.style.bottom = '0vh';
    blinkMonster.style.opacity = '1';
    
    // Update distance display
    blinkDistance.textContent = `Distance: ${Math.floor(monsterDistance)}m`;
    
    // Hide warning initially
    blinkWarning.classList.remove('visible');
    
    // Start blink game music
    blinkGameMusic.currentTime = 0;
    blinkGameMusic.volume = 0.7;
    blinkGameMusic.play();
    
    // Start game loop
    blinkGameInterval = setInterval(updateBlinkGame, 50); // Check every 50ms for smoother movement
}

// Update blink game logic
function updateBlinkGame() {
    if (!blinkGameActive) return;
    
    const now = Date.now();
    const deltaTime = (now - lastEyeCheckTime) / 1000; // Convert to seconds
    lastEyeCheckTime = now;
    
    // Check if player has survived for 60 seconds - WIN!
    const survivalTime = (now - blinkGameStartTime) / 1000;
    if (survivalTime >= blinkGameSurvivalTime) {
        winBlinkGame();
        return;
    }
    
    // Update distance display with timer
    const timeRemaining = Math.ceil(blinkGameSurvivalTime - survivalTime);
    blinkDistance.textContent = `Distance: ${Math.floor(monsterDistance)}m | Time: ${timeRemaining}s`;
    
    // Check if eyes are closed or looking away
    const eyesClosed = areEyesClosed();
    
    if (eyesClosed) {
        // Eyes closed or looking away - monster moves closer CRAZY FAST
        eyesClosedTime += deltaTime;
        monsterDistance -= deltaTime * 120; // 120 meters per second when eyes closed (INSANELY FAST!)
        
        // Show warning
        if (!blinkWarning.classList.contains('visible')) {
            blinkWarning.classList.add('visible');
        }
        
        // Update warning text
        if (isLookingAway) {
            blinkWarning.textContent = 'LOOK AT THE SCREEN!';
        } else {
            blinkWarning.textContent = 'KEEP YOUR EYES OPEN!';
        }
    } else {
        // Eyes open and looking - monster DOES NOT MOVE
        eyesClosedTime = 0;
        
        // Hide warning
        blinkWarning.classList.remove('visible');
    }
    
    // Clamp distance
    monsterDistance = Math.max(0, monsterDistance);
    
    // Calculate progress (how close the monster is)
    const progress = 1 - (monsterDistance / 100);
    
    // Update monster position - move UP from bottom (but stay low)
    // Bottom position: 0vh at start, up to 15vh at closest
    const maxBottomPosition = 15; // Stay much lower
    const bottomPosition = maxBottomPosition * progress;
    blinkMonster.style.bottom = `${bottomPosition}vh`;
    
    // Update monster size - grow but stay smaller
    const minHeight = 20; // 20vh at 100m
    const maxHeight = 60; // 60vh at 0m (stays lower)
    const monsterHeight = minHeight + (maxHeight - minHeight) * Math.pow(progress, 0.8);
    blinkMonster.style.height = `${monsterHeight}vh`;
    
    // Change distance color based on danger
    if (monsterDistance < 20) {
        blinkDistance.style.color = '#ff0000';
        blinkDistance.style.textShadow = '0 0 20px rgba(255, 0, 0, 1)';
    } else if (monsterDistance < 50) {
        blinkDistance.style.color = '#ffaa00';
        blinkDistance.style.textShadow = '0 0 10px rgba(255, 170, 0, 0.8)';
    } else {
        blinkDistance.style.color = '#ffffff';
        blinkDistance.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    }
    
    // Check if monster reached the player
    if (monsterDistance <= 0) {
        triggerBlinkJumpscare();
    }
}

// Trigger jumpscare when monster reaches player
function triggerBlinkJumpscare() {
    stopRecording(); // Stop recording
    blinkGameActive = false;
    clearInterval(blinkGameInterval);
    
    // Add jumpscare effect
    blinkGameContainer.classList.add('jumpscare');
    
    // Play screech sound LOUD
    blinkScreachSound.volume = 1.0;
    blinkScreachSound.currentTime = 0;
    blinkScreachSound.play();
    
    // Hide distance and warning
    blinkDistance.style.display = 'none';
    blinkWarning.style.display = 'none';
    
    // Make monster larger for jumpscare but stay lower
    blinkMonster.style.height = '70vh';
    blinkMonster.style.bottom = '0vh';
    blinkMonster.style.opacity = '1';
    
    // After 2 seconds, end the game
    setTimeout(() => {
        endBlinkGame(true); // Pass true to indicate this was a failure
    }, 2000);
}

// End blink game
function endBlinkGame(isFailed = false) {
    stopRecording(); // Stop recording
    blinkGameActive = false;
    clearInterval(blinkGameInterval);
    
    // Stop blink game music
    blinkGameMusic.pause();
    blinkGameMusic.currentTime = 0;
    
    // Hide blink game
    blinkGameContainer.classList.remove('active', 'jumpscare');
    
    // Reset displays
    blinkDistance.style.display = 'block';
    blinkWarning.style.display = 'block';
    blinkDistance.style.color = '#ffffff';
    blinkWarning.classList.remove('visible');
    
    // Reset monster position
    blinkMonster.style.height = '20vh';
    blinkMonster.style.bottom = '0vh';
    
    // Handle blink game failure retry logic
    if (isFailed && !blinkGameFailedOnce) {
        // First failure - set flag and decrement game index so we replay it next time
        blinkGameFailedOnce = true;
        console.log('🎮 Blink game failed for the first time - will retry once more');
        // Decrement the index so that when continueDoorGame increments it, we stay on the same game
        currentGameIndex--;
    } else if (isFailed && blinkGameFailedOnce) {
        // Second failure - proceed normally
        console.log('🎮 Blink game failed again - moving on to next game');
        blinkGameFailedOnce = false; // Reset for future playthroughs
    }
    
    // Continue to next part of game
    continueDoorGame();
}

// Win blink game - player survived!
function winBlinkGame() {
    stopRecording(); // Stop recording
    blinkGameActive = false;
    clearInterval(blinkGameInterval);
    
    // Stop blink game music
    blinkGameMusic.pause();
    blinkGameMusic.currentTime = 0;
    
    // Show victory message
    blinkWarning.textContent = 'YOU SURVIVED!';
    blinkWarning.style.color = '#00ff00';
    blinkWarning.classList.add('visible');
    blinkDistance.textContent = 'Returning to elevator...';
    blinkDistance.style.color = '#00ff00';
    
    // Fade out monster
    blinkMonster.style.opacity = '0';
    blinkMonster.style.transition = 'opacity 2s ease-out';
    
    // After 2 seconds, return to elevator
    setTimeout(() => {
        // Hide blink game
        blinkGameContainer.classList.remove('active', 'jumpscare');
        
        // Reset displays
        blinkDistance.style.display = 'block';
        blinkWarning.style.display = 'block';
        blinkDistance.style.color = '#ffffff';
        blinkWarning.style.color = '#ff0000';
        blinkWarning.classList.remove('visible');
        
        // Reset monster position
        blinkMonster.style.height = '20vh';
        blinkMonster.style.bottom = '0vh';
        blinkMonster.style.opacity = '1';
        blinkMonster.style.transition = '';
        
        // Reset the blink game failure flag on success
        blinkGameFailedOnce = false;
        
        // Continue to next part of game
        continueDoorGame();
    }, 2000);
}

// ============================================
// SHOOTING GALLERY GAME FUNCTIONS
// ============================================

// Start Shooting Gallery Game
function startShootingGallery() {
    shootingGalleryActive = true;
    targets = [];
    
    // Start recording shooting gallery
    startRecording('shooting');
    targetIdCounter = 0;
    currentTargetStage = 0;
    targetMoveIntervals = [];
    
    // Show shooting gallery
    shootingGalleryContainer.classList.add('active');
    
    // Clear any existing targets
    targetsContainer.innerHTML = '';
    
    // Create crosshair
    const crosshair = document.createElement('div');
    crosshair.id = 'crosshair';
    crosshair.className = 'crosshair';
    shootingGalleryContainer.appendChild(crosshair);
    
    // Add click handler for missing shots (clicks on background)
    shootingGalleryContainer.addEventListener('click', handleShootingGalleryClick);
    
    // Start Midnight Carousel music
    midnightCarouselMusic.currentTime = 0;
    midnightCarouselMusic.play();
    
    // Spawn initial 3 targets at stage 0 (T1)
    spawnTargets(3);
}

// Create a single target
function createTarget() {
    const targetId = targetIdCounter++;
    
    // Random size between 80px and 180px
    const size = 80 + Math.random() * 100;
    
    // Random position (avoid edges)
    let x = 10 + Math.random() * 70; // 10-80% of screen width
    let y = 10 + Math.random() * 60; // 10-70% of screen height
    
    // Create target element
    const targetElement = document.createElement('img');
    targetElement.src = TARGET_IMAGES[currentTargetStage]; // Use current stage
    targetElement.className = 'target';
    targetElement.style.left = x + '%';
    targetElement.style.top = y + '%';
    targetElement.style.width = size + 'px';
    targetElement.style.height = 'auto';
    targetElement.dataset.targetId = targetId;
    
    // Add to container
    targetsContainer.appendChild(targetElement);
    
    // Add click handler - stop propagation to prevent background click
    targetElement.addEventListener('click', function(e) {
        e.stopPropagation();
        shootTarget(targetId);
    });
    
    // Store target data
    const targetData = {
        id: targetId,
        element: targetElement,
        x: x,
        y: y,
        size: size,
        velocityX: (Math.random() - 0.5) * 1.2, // Random horizontal velocity (FASTER!)
        velocityY: (Math.random() - 0.5) * 1.2  // Random vertical velocity (FASTER!)
    };
    
    targets.push(targetData);
    
    // Start moving this target
    startTargetMovement(targetData);
    
    return targetData;
}

// Make targets move around
function startTargetMovement(target) {
    const moveInterval = setInterval(() => {
        if (!shootingGalleryActive || !target.element.parentNode) {
            clearInterval(moveInterval);
            return;
        }
        
        // Update position
        target.x += target.velocityX;
        target.y += target.velocityY;
        
        // Bounce off edges
        if (target.x <= 10 || target.x >= 80) {
            target.velocityX *= -1;
            target.x = Math.max(10, Math.min(80, target.x));
        }
        if (target.y <= 10 || target.y >= 70) {
            target.velocityY *= -1;
            target.y = Math.max(10, Math.min(70, target.y));
        }
        
        // Apply new position
        target.element.style.left = target.x + '%';
        target.element.style.top = target.y + '%';
    }, 20); // Update every 20ms for smooth, fast movement
    
    targetMoveIntervals.push(moveInterval);
}

// Spawn multiple targets
function spawnTargets(count) {
    for (let i = 0; i < count; i++) {
        createTarget();
    }
}

// Handle clicks on the shooting gallery (for misses)
function handleShootingGalleryClick(e) {
    if (!shootingGalleryActive) return;
    
    // If clicking directly on the container or background (not a target), it's a miss
    if (e.target === shootingGalleryContainer || e.target.classList.contains('gallery-background')) {
        shootMiss(e);
    }
}

// Handle missing a shot
function shootMiss(e) {
    // Play gunshot sound (same as hit)
    gunshotSound.currentTime = 0;
    gunshotSound.play();
    
    // Gun recoil animation
    gunSprite.classList.add('recoil');
    setTimeout(() => {
        gunSprite.classList.remove('recoil');
    }, 150);
    
    // Create a miss effect at click position
    const missEffect = document.createElement('div');
    missEffect.className = 'miss-effect';
    missEffect.style.left = e.clientX + 'px';
    missEffect.style.top = e.clientY + 'px';
    missEffect.textContent = 'MISS';
    shootingGalleryContainer.appendChild(missEffect);
    
    // Remove after animation
    setTimeout(() => {
        missEffect.remove();
    }, 800);
}

// Shoot a target
function shootTarget(targetId) {
    if (!shootingGalleryActive) return;
    
    // Find the target
    const target = targets.find(t => t.id === targetId);
    if (!target) return;
    
    // Play gunshot sound
    gunshotSound.currentTime = 0;
    gunshotSound.play();
    
    // Gun recoil animation
    gunSprite.classList.add('recoil');
    setTimeout(() => {
        gunSprite.classList.remove('recoil');
    }, 150);
    
    // Screen shake on shot
    shootingGalleryContainer.classList.add('screen-shake');
    setTimeout(() => {
        shootingGalleryContainer.classList.remove('screen-shake');
    }, 100);
    
    // Remove the target
    target.element.remove();
    targets = targets.filter(t => t.id !== targetId);
    
    // Check if all targets are hit
    if (targets.length === 0) {
        // All targets of this stage hit - advance to next stage
        currentTargetStage++;
        
        if (currentTargetStage >= TARGET_IMAGES.length - 1) {
            // Reached T4 stage - 1/3 chance of jumpscare!
            setTimeout(() => {
                checkTargetJumpscareChance();
            }, 500);
        } else {
            // Spawn next stage targets after a brief delay
            setTimeout(() => {
                spawnTargets(3);
            }, 800);
        }
    }
}

// Check if target jumpscare should happen (1/3 chance)
function checkTargetJumpscareChance() {
    // 1/3 chance of jumpscare (or debug override)
    let shouldJumpscare;
    if (debugTargetJumpscareOverride !== null) {
        shouldJumpscare = debugTargetJumpscareOverride;
    } else {
        shouldJumpscare = Math.random() < 0.33;
    }
    
    if (shouldJumpscare) {
        // Trigger jumpscare and end!
        triggerTargetJumpscare();
    } else {
        // Reset to T1 and spawn one more target
        currentTargetStage = 0;
        setTimeout(() => {
            spawnTargets(1); // Spawn just 1 target
        }, 500);
    }
}

// Trigger jumpscare from T4 target
function triggerTargetJumpscare() {
    // Stop the game
    shootingGalleryActive = false;
    
    // Clear all movement intervals
    targetMoveIntervals.forEach(interval => clearInterval(interval));
    targetMoveIntervals = [];
    
    // Create jumpscare overlay
    const jumpscareDiv = document.createElement('div');
    jumpscareDiv.className = 'target-jumpscare active';
    
    const jumpscareImg = document.createElement('img');
    jumpscareImg.src = 'Target4.png';
    jumpscareDiv.appendChild(jumpscareImg);
    
    document.body.appendChild(jumpscareDiv);
    
    // Play random jumpscare sound
    const randomSound = GALLERY_JUMPSCARE_SOUNDS[Math.floor(Math.random() * GALLERY_JUMPSCARE_SOUNDS.length)];
    randomSound.currentTime = 0;
    randomSound.play();
    
    // Remove jumpscare after 1.5 seconds and END THE MINIGAME
    setTimeout(() => {
        jumpscareDiv.remove();
        endShootingGallery();
    }, 1500);
}

// Mouse tracking for gun position and crosshair
document.addEventListener('mousemove', function(e) {
    if (shootingGalleryActive) {
        // Move gun to follow mouse X position at bottom
        const mouseX = e.clientX;
        gunSprite.style.left = mouseX + 'px';
        gunSprite.style.transform = 'translateX(-50%)';
        
        // Move crosshair to mouse position
        const crosshair = document.getElementById('crosshair');
        if (crosshair) {
            crosshair.style.left = e.clientX + 'px';
            crosshair.style.top = e.clientY + 'px';
        }
    }
});

// End shooting gallery game
function endShootingGallery() {
    stopRecording(); // Stop recording
    shootingGalleryActive = false;
    targets = [];
    currentTargetStage = 0;
    targetsContainer.innerHTML = '';
    
    // Clear all movement intervals
    targetMoveIntervals.forEach(interval => clearInterval(interval));
    targetMoveIntervals = [];
    
    // Remove crosshair
    const crosshair = document.getElementById('crosshair');
    if (crosshair) {
        crosshair.remove();
    }
    
    // Remove click handler
    shootingGalleryContainer.removeEventListener('click', handleShootingGalleryClick);
    
    // Stop music
    midnightCarouselMusic.pause();
    midnightCarouselMusic.currentTime = 0;
    
    // Hide gallery
    shootingGalleryContainer.classList.remove('active');
    
    // Continue to next part of the main game
    continueDoorGame();
}

// ============================================
// DEBUG MENU FUNCTIONS
// ============================================

// Debug mode overrides
let debugPhoneJumpscareOverride = null; // null = random, true = force, false = never
let debugTargetJumpscareOverride = null; // null = random, true = force, false = never

// Toggle debug menu
document.getElementById('debugToggle').addEventListener('click', function() {
    const debugMenu = document.getElementById('debugMenu');
    debugMenu.classList.toggle('active');
});

document.getElementById('debugClose').addEventListener('click', function() {
    document.getElementById('debugMenu').classList.remove('active');
});

// Stop all active games and clean up
function debugStopAllGames() {
    // Stop any active recording
    stopRecording();
    
    // Hide start and play buttons (in case game hasn't started yet)
    startButton.classList.add('hidden');
    playButton.classList.add('hidden');
    openDoorButton.classList.add('hidden');
    
    // Stop elevator
    audioPlayer.pause();
    fillerMusic.pause();
    endMusic.pause();
    backgroundTexture.classList.remove('moving', 'visible');
    clearInterval(sparkInterval);
    canFlashLight = false;
    clearTimeout(lightFlashInterval);
    elevatorContainer.classList.remove('rising', 'shaking', 'frozen');
    elevatorLightOverlay.classList.remove('visible');
    lightCircle.classList.remove('visible');
    
    // Stop door game
    doorGameContainer.classList.remove('active');
    horrorMusic.pause();
    
    // Stop red light game
    redlightGameActive = false;
    clearTimeout(lightSwitchInterval);
    keysPressed = {};
    redlightGameContainer.classList.remove('active');
    
    // Stop phone game
    phoneGameActive = false;
    if (phoneRingStartTimeout) {
        clearTimeout(phoneRingStartTimeout);
        phoneRingStartTimeout = null;
    }
    phoneRingSound.pause();
    phoneAudio.pause();
    suspenseMusic.pause();
    heavyBreathing1.pause();
    heavyBreathing2.pause();
    heavyBreathing3.pause();
    clearInterval(screenShakeInterval);
    phoneGameContainer.classList.remove('active', 'screen-shake', 'zooming-in');
    
    // Stop shooting gallery
    shootingGalleryActive = false;
    targets.forEach(t => t.element.remove());
    targets = [];
    targetMoveIntervals.forEach(interval => clearInterval(interval));
    targetMoveIntervals = [];
    const crosshair = document.getElementById('crosshair');
    if (crosshair) crosshair.remove();
    midnightCarouselMusic.pause();
    shootingGalleryContainer.classList.remove('active');
    
    // Stop blink game
    blinkGameActive = false;
    clearInterval(blinkGameInterval);
    blinkGameContainer.classList.remove('active', 'jumpscare');
    blinkGameMusic.pause();
    
    // Stop cookie game
    cookieGameActive = false;
    clearInterval(cookieTimerInterval);
    cookieGameContainer.classList.remove('active');
    cookieMusic.pause();
    
    // Stop camera jumpscare
    shootingActive = false;
    cameraJumpscare.classList.remove('active');
    
    // Hide all jumpscares
    jumpscare.classList.remove('active', 'flashing', 'shaking');
    jumpscare2.classList.remove('active', 'flashing', 'shaking');
    jumpscare3.classList.remove('active', 'flashing', 'shaking');
    document.getElementById('phoneJumpscareOverlay').classList.remove('active');
    
    // Stop credits if active
    stopCredits();
    
    // Stop recording playback
    recordingPlayback.classList.remove('active');
    
    // Stop suspense music if it's playing during playback
    suspenseMusic.pause();
    suspenseMusic.currentTime = 0;
    suspenseMusic.loop = false;
}

// Door game
async function debugStartDoorGame() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    doorImageContainer.classList.remove('visible');
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    badDoorIndex = Math.floor(Math.random() * 3);
    typeWriter('choose the doors carefully.', typewriterText, 80, function() {
        setTimeout(function() {
            doorImageContainer.classList.add('visible');
        }, 1000);
    });
}

// Red light green light
async function debugStartRedLight() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Red Light Green light.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startRedLightGame();
        }, 1500);
    });
}

// Phone game (random)
async function debugStartPhone() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugPhoneJumpscareOverride = null; // Reset to random
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Pick up the phone.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startPhoneGame();
        }, 1500);
    });
}

// Phone with jumpscare
async function debugPhoneWithJumpscare() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugPhoneJumpscareOverride = true; // Force jumpscare
    console.log('🎮 DEBUG: Forcing phone jumpscare to TRUE');
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Pick up the phone.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startPhoneGame();
        }, 1500);
    });
}

// Phone without jumpscare
async function debugPhoneNoJumpscare() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugPhoneJumpscareOverride = false; // Prevent jumpscare
    console.log('🎮 DEBUG: Forcing phone jumpscare to FALSE');
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Pick up the phone.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startPhoneGame();
        }, 1500);
    });
}

// Shooting gallery (random)
async function debugStartShootingGallery() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugTargetJumpscareOverride = null; // Reset to random
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Hit the targets.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startShootingGallery();
        }, 1500);
    });
}

// Target with force jumpscare
async function debugTargetForceJumpscare() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugTargetJumpscareOverride = true; // Force jumpscare
    console.log('🎮 DEBUG: Forcing target jumpscare to TRUE');
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Hit the targets.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startShootingGallery();
        }, 1500);
    });
}

// Target never jumpscare (loop forever)
async function debugTargetNeverJumpscare() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    debugTargetJumpscareOverride = false; // Prevent jumpscare
    console.log('🎮 DEBUG: Forcing target jumpscare to FALSE (infinite loop)');
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Hit the targets.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startShootingGallery();
        }, 1500);
    });
}

// Trigger jumpscares directly
function debugTriggerJumpscare1() {
    debugStopAllGames();
    jumpscare.classList.add('active', 'flashing', 'shaking');
    jumpscareSound.currentTime = 0;
    jumpscareSound.play();
    setTimeout(function() {
        jumpscare.classList.remove('active', 'flashing', 'shaking');
    }, 1500);
}

function debugTriggerJumpscare2() {
    debugStopAllGames();
    jumpscare2.classList.add('active', 'flashing', 'shaking');
    jumpscareSound2_1.currentTime = 0;
    jumpscareSound2_1.play();
    setTimeout(function() {
        jumpscare2.classList.remove('active', 'flashing', 'shaking');
    }, 1500);
}

function debugTriggerJumpscare3() {
    debugStopAllGames();
    jumpscare3.classList.add('active', 'flashing', 'shaking');
    jumpscareSound3_1.currentTime = 0;
    jumpscareSound3_1.play();
    setTimeout(function() {
        jumpscare3.classList.remove('active', 'flashing', 'shaking');
    }, 1500);
}

function debugTriggerCameraJumpscare() {
    debugStopAllGames();
    triggerCameraJumpscare();
}

// Blink game
async function debugStartBlinkGame() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    blinkGameMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter("Don't blink.", typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            blinkGameMusic.pause();
            blinkGameMusic.currentTime = 0;
            startBlinkGame();
        }, 1500);
    });
}

// Blink game - Slow Mode (Easy)
async function debugBlinkGameSlowMode() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    eyeAspectRatioThreshold = 0.5; // CRAZY sensitivity
    document.getElementById('blinkSensitivity').textContent = 'Slow (Easy) 0.5';
    
    // Override the update function with slower speed
    const originalUpdate = window.updateBlinkGame;
    window.updateBlinkGame = function() {
        if (!blinkGameActive) return;
        
        const now = Date.now();
        const deltaTime = (now - lastEyeCheckTime) / 1000;
        lastEyeCheckTime = now;
        
        // Check if player has survived for 60 seconds - WIN!
        const survivalTime = (now - blinkGameStartTime) / 1000;
        if (survivalTime >= blinkGameSurvivalTime) {
            winBlinkGame();
            return;
        }
        
        // Update distance display with timer
        const timeRemaining = Math.ceil(blinkGameSurvivalTime - survivalTime);
        blinkDistance.textContent = `Distance: ${Math.floor(monsterDistance)}m | Time: ${timeRemaining}s`;
        
        const eyesClosed = areEyesClosed();
        
        if (eyesClosed) {
            eyesClosedTime += deltaTime;
            monsterDistance -= deltaTime * 40; // Slower: 40 m/s instead of 120
            
            if (!blinkWarning.classList.contains('visible')) {
                blinkWarning.classList.add('visible');
            }
            
            if (isLookingAway) {
                blinkWarning.textContent = 'LOOK AT THE SCREEN!';
            } else {
                blinkWarning.textContent = 'KEEP YOUR EYES OPEN!';
            }
        } else {
            eyesClosedTime = 0;
            blinkWarning.classList.remove('visible');
        }
        
        monsterDistance = Math.max(0, monsterDistance);
        
        const progress = 1 - (monsterDistance / 100);
        
        const maxBottomPosition = 15; // Stay much lower (Easy mode)
        const bottomPosition = maxBottomPosition * progress;
        blinkMonster.style.bottom = `${bottomPosition}vh`;
        
        const minHeight = 20;
        const maxHeight = 60; // Stay smaller (Easy mode)
        const monsterHeight = minHeight + (maxHeight - minHeight) * Math.pow(progress, 0.8);
        blinkMonster.style.height = `${monsterHeight}vh`;
        
        if (monsterDistance < 20) {
            blinkDistance.style.color = '#ff0000';
            blinkDistance.style.textShadow = '0 0 20px rgba(255, 0, 0, 1)';
        } else if (monsterDistance < 50) {
            blinkDistance.style.color = '#ffaa00';
            blinkDistance.style.textShadow = '0 0 10px rgba(255, 170, 0, 0.8)';
        } else {
            blinkDistance.style.color = '#ffffff';
            blinkDistance.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        }
        
        if (monsterDistance <= 0) {
            triggerBlinkJumpscare();
        }
    };
    
    blinkGameMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter("Don't blink. (Easy Mode)", typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            blinkGameMusic.pause();
            blinkGameMusic.currentTime = 0;
            startBlinkGame();
        }, 1500);
    });
}

// Blink game - Fast Mode (Hard)
async function debugBlinkGameFastMode() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    eyeAspectRatioThreshold = 0.5; // CRAZY sensitivity
    document.getElementById('blinkSensitivity').textContent = 'Fast (Hard) 0.5';
    
    blinkGameMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter("Don't blink. (HARD MODE)", typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            blinkGameMusic.pause();
            blinkGameMusic.currentTime = 0;
            startBlinkGame();
        }, 1500);
    });
}

// Blink game - Instant Jumpscare
async function debugBlinkGameInstantJumpscare() {
    await requestCameraAccess(); // Ensure camera is ready
    debugStopAllGames();
    blinkGameContainer.classList.add('active');
    blinkMonster.style.height = '20vh';
    blinkMonster.style.bottom = '0vh';
    blinkMonster.style.opacity = '1';
    monsterDistance = 3; // Start very close
    blinkGameActive = true;
    blinkDistance.textContent = `Distance: ${Math.floor(monsterDistance)}m`;
    
    blinkGameMusic.currentTime = 0;
    blinkGameMusic.volume = 0.7;
    blinkGameMusic.play();
    
    lastEyeCheckTime = Date.now();
    blinkGameInterval = setInterval(updateBlinkGame, 50);
}

// Update face detection status in debug menu
setInterval(function() {
    const faceDetectedSpan = document.getElementById('faceDetected');
    if (faceDetectedSpan) {
        if (!faceMeshDetector) {
            faceDetectedSpan.textContent = '⚠️ Not Initialized';
            faceDetectedSpan.style.color = '#ffaa00';
        } else if (faceMesh && faceMesh.length > 0) {
            faceDetectedSpan.textContent = '✓ Yes';
            faceDetectedSpan.style.color = '#00ff00';
        } else {
            faceDetectedSpan.textContent = '✗ No';
            faceDetectedSpan.style.color = '#ff0000';
        }
    }
}, 500);

// Skip to ending sequence
async function debugSkipToEnding() {
    console.log('🎬 Debug: Skipping to final cut scene with mock recordings...');
    
    // Only hide active games, DON'T call debugStopAllGames (it would stop credits)
    doorGameContainer.classList.remove('active');
    phoneGameContainer.classList.remove('active');
    redlightGameContainer.classList.remove('active');
    shootingGalleryContainer.classList.remove('active');
    blinkGameContainer.classList.remove('active');
    cookieGameContainer.classList.remove('active');
    cameraJumpscare.classList.remove('active');
    
    // Stop game music (but not elevator music)
    horrorMusic.pause();
    suspenseMusic.pause();
    midnightCarouselMusic.pause();
    blinkGameMusic.pause();
    cookieMusic.pause();
    redlightMusic.pause();
    
    // Check if we already have recordings
    const hasRecordings = Object.values(gameRecordings).some(r => r !== null);
    
    if (hasRecordings) {
        console.log('✅ Recordings already exist, skipping directly to playback...');
        // Just show the playback with existing recordings
        fadeToBlack.classList.add('active');
        setTimeout(() => {
            playbackRecordings();
        }, 1000);
        return;
    }
    
    // Show a message to the user
    console.log('📹 Creating mock recordings from camera...');
    alert('Creating mock recordings from your camera for testing. This will take about 12 seconds. Make sure your camera is enabled!');
    
    // Initialize camera if not already done
    if (!cameraStream) {
        try {
            await requestCameraAccess();
            console.log('✅ Camera initialized for mock recordings');
        } catch (error) {
            console.error('❌ Failed to initialize camera:', error);
            alert('Failed to initialize camera. Please ensure camera permissions are granted.');
            return;
        }
    }
    
    // Create mock recordings for all 6 games (2 seconds each)
    const gameKeys = ['doors', 'phone1', 'shooting', 'blink', 'redlight', 'cookie'];
    
    for (let i = 0; i < gameKeys.length; i++) {
        const gameName = gameKeys[i];
        console.log(`📹 Recording mock video ${i + 1}/6: ${gameName}...`);
        
        // Start recording
        await startRecording(gameName);
        
        // Record for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Stop recording
        stopRecording();
        
        // Wait a moment for the recording to finalize
        await new Promise(resolve => setTimeout(resolve, 200));
        
        console.log(`✅ Mock recording ${i + 1}/6 complete: ${gameName}`);
    }
    
    console.log('✅ All mock recordings created! Proceeding to final cut scene...');
    
    // Fade to black then show playback
    fadeToBlack.classList.add('active');
    setTimeout(() => {
        playbackRecordings();
    }, 1000);
}

// Reset entire game
function debugResetGame() {
    if (confirm('Reset entire game? This will reload the page.')) {
        location.reload();
    }
}

// Back to elevator
function debugBackToElevator() {
    debugStopAllGames();
    elevatorContainer.style.top = '50%';
    elevatorContainer.classList.add('shaking');
    audioPlayer.play();
    backgroundTexture.classList.add('visible', 'moving');
    canFlashLight = true;
    scheduleNextFlash();
    sparkInterval = setInterval(createSpark, 50);
    scheduleRandomScreeches(11000);
    setTimeout(function() {
        audioPlayer.pause();
        backgroundTexture.classList.remove('moving');
        clearInterval(sparkInterval);
        canFlashLight = false;
        clearTimeout(lightFlashInterval);
        elevatorLightOverlay.classList.remove('visible');
        lightCircle.classList.remove('visible');
        elevatorContainer.classList.remove('shaking');
        elevatorContainer.classList.add('frozen');
        screechTimeouts.forEach(timeout => clearTimeout(timeout));
        screechTimeouts = [];
        openDoorButton.classList.remove('hidden');
    }, 11000);
}

// ============================================
// COOKIE TRACING GAME FUNCTIONS
// ============================================

// 🎨 OPTIMIZED COOKIE DETECTION SETTINGS 🎨
const COOKIE_DETECTION_SETTINGS = {
    maxBrightness: 65,
    minAlpha: 138,
    maxRed: 172,
    maxGreen: null,
    maxBlue: null
};
// Stats: ~158732 dark pixels detected with these settings

// Get DOM elements for cookie game
const cookieGameContainer = document.getElementById('cookieGameContainer');
const cookieCanvas = document.getElementById('cookieCanvas');
const cookieCtx = cookieCanvas.getContext('2d');
const cookieTimer = document.getElementById('cookieTimer');
const cookieInstructions = document.getElementById('cookieInstructions');
const cookieProgress = document.getElementById('cookieProgress');

// Cookie game variables
let cookieGameActive = false;
let cookieTimeLeft = 60;
let cookieTimerInterval = null;
let isDrawing = false;
let cookieImage = null;
let cookieLinesData = null;
let hasFailedCookie = false;
let traceProgress = 0;
let totalDarkPixels = 0;
let tracedPixels = new Set(); // Track which pixels have been traced
let lastMouseX = 0;
let lastMouseY = 0;
let lastPercentage = 0; // Track last percentage to avoid spam

// Helper function to check if a pixel is a "dark line" based on settings
function isDarkPixel(r, g, b, a) {
    const brightness = (r + g + b) / 3;
    
    // Check brightness threshold
    if (brightness >= COOKIE_DETECTION_SETTINGS.maxBrightness) return false;
    
    // Check alpha threshold
    if (a < COOKIE_DETECTION_SETTINGS.minAlpha) return false;
    
    // Check optional color thresholds
    if (COOKIE_DETECTION_SETTINGS.maxRed !== null && r > COOKIE_DETECTION_SETTINGS.maxRed) return false;
    if (COOKIE_DETECTION_SETTINGS.maxGreen !== null && g > COOKIE_DETECTION_SETTINGS.maxGreen) return false;
    if (COOKIE_DETECTION_SETTINGS.maxBlue !== null && b > COOKIE_DETECTION_SETTINGS.maxBlue) return false;
    
    return true;
}

// Preload cookie image
function preloadCookieImages() {
    return new Promise((resolve) => {
        cookieImage = new Image();
        cookieImage.onload = () => {
            console.log('✅ Cookie.png loaded successfully');
            resolve();
        };
        cookieImage.onerror = () => {
            console.error('❌ Failed to load Cookie.png');
            resolve(); // Resolve anyway to prevent hanging
        };
        cookieImage.src = 'Cookie.png';
    });
}

// Start cookie tracing game
async function startCookieGame() {
    console.log('🍪 Starting cookie tracing game...');
    console.log('🎨 Detection Settings:', COOKIE_DETECTION_SETTINGS);
    
    // Ensure camera is ready
    await requestCameraAccess();
    
    // Load image if not already loaded
    if (!cookieImage) {
        console.log('⏳ Loading Cookie.png...');
        await preloadCookieImages();
    }
    
    cookieGameActive = true;
    cookieTimeLeft = 60;
    hasFailedCookie = false;
    traceProgress = 0;
    tracedPixels.clear();
    lastPercentage = 0;
    isDrawing = false;
    
    // Start recording cookie game
    startRecording('cookie');
    
    // Show game container
    cookieGameContainer.classList.add('active');
    
    // Start cookie music
    cookieMusic.currentTime = 0;
    cookieMusic.play();
    console.log('🎵 Cookie music started!');
    
    // Setup canvas dimensions based on cookie image
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.8;
    const scale = Math.min(maxWidth / cookieImage.width, maxHeight / cookieImage.height);
    
    cookieCanvas.width = cookieImage.width * scale;
    cookieCanvas.height = cookieImage.height * scale;
    
    // Draw initial cookie (NO GREEN OVERLAY)
    cookieCtx.clearRect(0, 0, cookieCanvas.width, cookieCanvas.height);
    cookieCtx.drawImage(cookieImage, 0, 0, cookieCanvas.width, cookieCanvas.height);
    
    console.log('✅ Cookie drawn on canvas (no overlay)');
    
    // Create an offscreen canvas to analyze the DARK LINES on the COOKIE
    const linesCanvas = document.createElement('canvas');
    linesCanvas.width = cookieImage.width;
    linesCanvas.height = cookieImage.height;
    const linesCtx = linesCanvas.getContext('2d');
    linesCtx.drawImage(cookieImage, 0, 0);
    cookieLinesData = linesCtx.getImageData(0, 0, linesCanvas.width, linesCanvas.height);
    
    // Count total dark pixels in the cookie
    totalDarkPixels = 0;
    for (let y = 0; y < cookieLinesData.height; y++) {
        for (let x = 0; x < cookieLinesData.width; x++) {
            const index = (y * cookieLinesData.width + x) * 4;
            const r = cookieLinesData.data[index];
            const g = cookieLinesData.data[index + 1];
            const b = cookieLinesData.data[index + 2];
            const a = cookieLinesData.data[index + 3];
            const brightness = (r + g + b) / 3;
            
            if (isDarkPixel(r, g, b, a)) {
                totalDarkPixels++;
            }
        }
    }
    
    console.log(`🍪 Total dark pixels: ${totalDarkPixels} (percentage shows ACTUAL % of lines traced)`);
    
    // Reset displays
    cookieTimer.textContent = cookieTimeLeft;
    cookieTimer.classList.remove('warning', 'critical');
    
    // Hide instructions immediately - no text during gameplay
    cookieInstructions.style.opacity = '0';
    cookieInstructions.style.display = 'none';
    
    // Reset progress display
    cookieProgress.textContent = '0%';
    cookieProgress.classList.remove('high-progress');
    
    // Start countdown timer
    cookieTimerInterval = setInterval(updateCookieTimer, 1000);
    
    console.log('🍪 Cookie game started with 60 second timer!');
}

// Update timer
function updateCookieTimer() {
    if (!cookieGameActive) return;
    
    cookieTimeLeft--;
    cookieTimer.textContent = cookieTimeLeft;
    
    // Remove all warning classes first
    cookieTimer.classList.remove('warning', 'critical');
    
    // Critical state (last 10 seconds)
    if (cookieTimeLeft <= 10) {
        cookieTimer.classList.add('critical');
    }
    // Warning state (20 seconds)
    else if (cookieTimeLeft <= 20) {
        cookieTimer.classList.add('warning');
    }
    
    // Time's up - player wins if they haven't failed yet!
    if (cookieTimeLeft <= 0) {
        clearInterval(cookieTimerInterval);
        if (!hasFailedCookie) {
            cookieGameWin();
        }
    }
}

// Check if a point is on the dark line (on the cookie itself)
function isOnGreenLine(x, y) {
    // Convert canvas coordinates to image coordinates (using Cookie.png dimensions)
    const scaleX = cookieImage.width / cookieCanvas.width;
    const scaleY = cookieImage.height / cookieCanvas.height;
    
    const imgX = Math.floor(x * scaleX);
    const imgY = Math.floor(y * scaleY);
    
    // Check bounds
    if (imgX < 0 || imgX >= cookieLinesData.width || imgY < 0 || imgY >= cookieLinesData.height) {
        return false;
    }
    
    // Check area around the point (more strict now - 9x9 grid)
    const checkRadius = 4; // Smaller radius for stricter gameplay
    for (let dy = -checkRadius; dy <= checkRadius; dy++) {
        for (let dx = -checkRadius; dx <= checkRadius; dx++) {
            const checkX = imgX + dx;
            const checkY = imgY + dy;
            
            // Check bounds for this point
            if (checkX < 0 || checkX >= cookieLinesData.width || checkY < 0 || checkY >= cookieLinesData.height) {
                continue;
            }
            
            // Get pixel data from Cookie.png
            const index = (checkY * cookieLinesData.width + checkX) * 4;
            const r = cookieLinesData.data[index];
            const g = cookieLinesData.data[index + 1];
            const b = cookieLinesData.data[index + 2];
            const a = cookieLinesData.data[index + 3];
            
            // Check if this pixel is a dark line using our detection settings
            if (isDarkPixel(r, g, b, a)) {
                return true;
            }
        }
    }
    
    return false;
}

// Mouse/touch event handlers for drawing
cookieCanvas.addEventListener('mousedown', startCookieDrawing);
cookieCanvas.addEventListener('mousemove', cookieDrawing);
cookieCanvas.addEventListener('mouseup', stopCookieDrawing);
cookieCanvas.addEventListener('mouseleave', stopCookieDrawing);

// Touch support
cookieCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = cookieCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    lastMouseX = x;
    lastMouseY = y;
    isDrawing = true;
});

cookieCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = cookieCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    if (isDrawing && cookieGameActive && !hasFailedCookie) {
        checkCookieDrawing(x, y);
    }
    
    lastMouseX = x;
    lastMouseY = y;
});

cookieCanvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    isDrawing = false;
});

function startCookieDrawing(e) {
    if (!cookieGameActive || hasFailedCookie) return;
    
    const rect = cookieCanvas.getBoundingClientRect();
    lastMouseX = e.clientX - rect.left;
    lastMouseY = e.clientY - rect.top;
    isDrawing = true;
    
    console.log('🖱️ Started drawing at:', Math.floor(lastMouseX), Math.floor(lastMouseY));
}

function cookieDrawing(e) {
    if (!isDrawing || !cookieGameActive || hasFailedCookie) return;
    
    const rect = cookieCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    checkCookieDrawing(x, y);
    
    lastMouseX = x;
    lastMouseY = y;
}

function stopCookieDrawing() {
    isDrawing = false;
}

function checkCookieDrawing(x, y) {
    // Check if we've moved enough to actually check (prevent instant fail on mousedown)
    const distance = Math.sqrt((x - lastMouseX) ** 2 + (y - lastMouseY) ** 2);
    if (distance < 1) {
        return; // Too small movement, don't check yet
    }
    
    const onGreenLine = isOnGreenLine(x, y);
    
    if (onGreenLine) {
        // Draw BRIGHT green line on correct path (on top of everything)
        cookieCtx.strokeStyle = '#00ff00';
        cookieCtx.lineWidth = 12;
        cookieCtx.lineCap = 'round';
        cookieCtx.lineJoin = 'round';
        cookieCtx.shadowColor = '#00ff00';
        cookieCtx.shadowBlur = 20;
        
        cookieCtx.beginPath();
        cookieCtx.moveTo(lastMouseX, lastMouseY);
        cookieCtx.lineTo(x, y);
        cookieCtx.stroke();
        
        // Reset shadow
        cookieCtx.shadowBlur = 0;
        
        // Track unique pixels traced in the drawing area (small radius around current point)
        const scaleX = cookieImage.width / cookieCanvas.width;
        const scaleY = cookieImage.height / cookieCanvas.height;
        const centerX = Math.floor(x * scaleX);
        const centerY = Math.floor(y * scaleY);
        
        // Track pixels in drawing radius
        const drawRadius = 3;
        for (let dy = -drawRadius; dy <= drawRadius; dy++) {
            for (let dx = -drawRadius; dx <= drawRadius; dx++) {
                const imgX = centerX + dx;
                const imgY = centerY + dy;
                const pixelKey = `${imgX},${imgY}`;
                
                if (!tracedPixels.has(pixelKey)) {
                    // Check if this pixel is actually a dark pixel
                    if (imgX >= 0 && imgX < cookieLinesData.width && imgY >= 0 && imgY < cookieLinesData.height) {
                        const index = (imgY * cookieLinesData.width + imgX) * 4;
                        const r = cookieLinesData.data[index];
                        const g = cookieLinesData.data[index + 1];
                        const b = cookieLinesData.data[index + 2];
                        const a = cookieLinesData.data[index + 3];
                        if (isDarkPixel(r, g, b, a)) {
                            tracedPixels.add(pixelKey);
                            traceProgress++;
                        }
                    }
                }
            }
        }
        
        // Calculate actual percentage
        const actualPercentage = Math.floor((tracedPixels.size / totalDarkPixels) * 100);
        
        // Display QUADRUPLE the actual percentage (so 25% actual = 100% shown)
        const displayPercentage = Math.min(100, actualPercentage * 4);
        cookieProgress.textContent = `${displayPercentage}%`;
        
        // Change color when getting close (at 60% displayed = 15% actual)
        if (displayPercentage >= 60) {
            cookieProgress.classList.add('high-progress');
        }
        
        // Visual feedback only when percentage changes
        if (displayPercentage !== lastPercentage) {
            console.log(`✅ Progress: ${displayPercentage}% displayed (${actualPercentage}% actual) - ${tracedPixels.size}/${totalDarkPixels} traced`);
            lastPercentage = displayPercentage;
        }
        
        // Auto-win if reached 25% actual (displayed as 100%)!
        if (actualPercentage >= 25 && !hasFailedCookie) {
            console.log('🎉 25% ACTUAL (100% DISPLAYED) - YOU WIN!');
            cookieGameWin();
        }
    } else {
        // Drawing outside the lines - TRIGGER EXPLOSION JUMPSCARE!
        console.log('💥 DRAWING OUTSIDE LINES - TRIGGERING JUMPSCARE!');
        triggerCookieExplosionJumpscare();
    }
}

// Trigger shooting jumpscare (similar to red light game)
function triggerCookieExplosionJumpscare() {
    if (hasFailedCookie) return; // Already failed
    
    console.log('💥 COOKIE GAME FAILED - SHOOTING JUMPSCARE!');
    
    hasFailedCookie = true;
    cookieGameActive = false;
    clearInterval(cookieTimerInterval);
    
    // Stop cookie music
    cookieMusic.pause();
    cookieMusic.currentTime = 0;
    
    // Hide cookie game
    cookieGameContainer.classList.remove('active');
    
    // Show camera jumpscare
    cameraJumpscare.classList.add('active');
    
    // Start shooting effects
    shootingActive = true;
    shotCount = 0;
    wounds = [];
    bloodDrips = [];
    impactFlashes = [];
    faceDistortions = [];
    screenBloodSplatters = [];
    
    // Start animation loop
    animateShootingEffects();
    
    // Fire 10 shots with intervals (same as red light game)
    const shotIntervals = [];
    for (let i = 0; i < 10; i++) {
        const timeout = setTimeout(() => {
            fireShot();
            shotCount++;
            
            // After last shot, end the sequence
            if (shotCount >= 10) {
                setTimeout(() => {
                    shootingActive = false;
                    wounds = [];
                    bloodDrips = [];
                    impactFlashes = [];
                    faceDistortions = [];
                    screenBloodSplatters = [];
                    effectsCtx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
                    cameraJumpscare.classList.remove('active');
                    endCookieGame();
                }, 2000); // Wait 2 seconds after last shot
            }
        }, i * 300); // 300ms between shots (fast-paced)
        shotIntervals.push(timeout);
    }
}

// Win condition (traced 25% of lines or survived timer)
function cookieGameWin() {
    console.log('🍪 Cookie game won!');
    cookieGameActive = false;
    clearInterval(cookieTimerInterval);
    
    // Just show progress as green and end quickly - no text
    cookieProgress.style.color = '#00ff00';
    cookieProgress.style.borderColor = '#00ff00';
    cookieProgress.style.textShadow = '0 0 40px rgba(0, 255, 0, 1), 0 0 80px rgba(0, 255, 0, 0.9)';
    
    setTimeout(() => {
        endCookieGame();
    }, 1500);
}

// End cookie game
function endCookieGame() {
    stopRecording(); // Stop recording
    cookieGameActive = false;
    clearInterval(cookieTimerInterval);
    
    // Stop cookie music
    cookieMusic.pause();
    cookieMusic.currentTime = 0;
    console.log('🎵 Cookie music stopped');
    
    cookieGameContainer.classList.remove('active');
    
    // Clear canvas
    cookieCtx.clearRect(0, 0, cookieCanvas.width, cookieCanvas.height);
    
    // Continue to next part of game
    continueDoorGame();
}

// Debug function to start cookie game
async function debugStartCookieGame() {
    await requestCameraAccess();
    debugStopAllGames();
    horrorMusic.play();
    doorGameContainer.classList.add('active');
    typeWriter('Trace the cookie.', typewriterText, 80, function() {
        setTimeout(function() {
            doorGameContainer.classList.remove('active');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            startCookieGame();
        }, 1500);
    });
}

// ========== EXPOSE DEBUG FUNCTIONS TO WINDOW FOR HTML ONCLICK HANDLERS ==========
window.debugStopAllGames = debugStopAllGames;
window.debugStartDoorGame = debugStartDoorGame;
window.debugStartRedLight = debugStartRedLight;
window.debugStartPhone = debugStartPhone;
window.debugPhoneWithJumpscare = debugPhoneWithJumpscare;
window.debugPhoneNoJumpscare = debugPhoneNoJumpscare;
window.debugStartShootingGallery = debugStartShootingGallery;
window.debugTargetForceJumpscare = debugTargetForceJumpscare;
window.debugTargetNeverJumpscare = debugTargetNeverJumpscare;
window.debugTriggerJumpscare1 = debugTriggerJumpscare1;
window.debugTriggerJumpscare2 = debugTriggerJumpscare2;
window.debugTriggerJumpscare3 = debugTriggerJumpscare3;
window.triggerPhoneJumpscare = triggerPhoneJumpscare;
window.debugTriggerCameraJumpscare = debugTriggerCameraJumpscare;
window.debugStartBlinkGame = debugStartBlinkGame;
window.debugBlinkGameSlowMode = debugBlinkGameSlowMode;
window.debugBlinkGameFastMode = debugBlinkGameFastMode;
window.debugBlinkGameInstantJumpscare = debugBlinkGameInstantJumpscare;
window.debugTriggerBlinkJumpscare = triggerBlinkJumpscare;
window.debugResetGame = debugResetGame;
window.debugBackToElevator = debugBackToElevator;
window.debugStartCookieGame = debugStartCookieGame;
window.debugSkipToEnding = debugSkipToEnding;

