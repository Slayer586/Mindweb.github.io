var wrods = document.getElementById("writing");
function spells(spell){
    wrods.innerText=spell;
}

function A(){
let a = document.getElementById('alphaA');
let target = document.getElementById('blanckarea');

target.innerHTML+=a.innerText+"<img src=Images/A-img/Apple.jpg width=100px height=100px/>";
// target.innerHTML+="<img src=Images/A-img/Apple width=100px height=100px/>";
// target.innerHTML+="<img src=Images/A-img/Aeroplane width=150px height=150px />"; 

if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaA");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("A; for; Apple");
        speechSynthesis.speak(msg);
        spells('A For APPLE');
    };
    demo.disabled = false;
}
}

function B(){
  
    let a = document.getElementById('alphaB');
    // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/B-img/ball.jpg width=100px height=100px/>";
    }
    function speakB(){
        if ("speechSynthesis" in window) {
            let demo = document.getElementById("alphaB");
            demo.onclick = () => {
                let msg = new SpeechSynthesisUtterance("B; for; Ball");
                speechSynthesis.speak(msg);
                spells('B For BALL');
            };
            demo.disabled = false;
            }
    }

    function C(){
    
        let a = document.getElementById('alphaC');
        // let b=a.style.fontSize ;
        let target = document.getElementById('blanckarea');
        target.innerHTML+=a.innerHTML;
        target.innerHTML+="<img src=Images/C-img/cat.png width=100px height=100px/>";
        }
        function speakC(){
            if ("speechSynthesis" in window) {
                let demo = document.getElementById("alphaC");
                demo.onclick = () => {
                    let msg = new SpeechSynthesisUtterance("C; for; Cat!");
                    speechSynthesis.speak(msg);
                    spells('C For CAT');
                };
                demo.disabled = false;
                }
        }

        function D(){
    
            let a = document.getElementById('alphaD');
            // let b=a.style.fontSize ;
            let target = document.getElementById('blanckarea');
            target.innerHTML+=a.innerHTML;
            target.innerHTML+="<img src=Images/D-img/dog.jpg width=100px height=100px/>";
            }
            function speakD(){
                if ("speechSynthesis" in window) {
                    let demo = document.getElementById("alphaD");
                    demo.onclick = () => {
                        let msg = new SpeechSynthesisUtterance("D; for; Dog!");
                        speechSynthesis.speak(msg);
                        spells('D For DOG');
                    };
                    demo.disabled = false;
                    }
            }

            function E(){
    
                let a = document.getElementById('alphaE');
                // let b=a.style.fontSize ;
                let target = document.getElementById('blanckarea');
                target.innerHTML+=a.innerHTML;
                target.innerHTML+="<img src=Images/E-img/elephant.jpg width=100px height=100px/>";
                }
                function speakE(){
                    if ("speechSynthesis" in window) {
                        let demo = document.getElementById("alphaE");
                        demo.onclick = () => {
                            let msg = new SpeechSynthesisUtterance("E; for; Elephant!");
                            speechSynthesis.speak(msg);
                            spells('E For ELEPHANT');
                        };
                        demo.disabled = false;
                        }
                }

        function F(){
    
            let a = document.getElementById('alphaF');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/F-img/fish.png width=100px height=100px/>";
    }
    function speakF(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaF");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("F; for; Fish!");
        speechSynthesis.speak(msg);
        spells('F For FISH');
        };
        demo.disabled = false;
        }
        }
        

        function G(){
    
            let a = document.getElementById('alphaG');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/G-img/grapes.jpg width=100px height=100px/>";
    }
    function speakG(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaG");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("G; for ; Grapes!!");
        speechSynthesis.speak(msg);
        spells('G For GRAPES');
        };
        demo.disabled = false;
        }
        }
        


        function H(){
    
            let a = document.getElementById('alphaH');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/H-img/horse.jpg width=100px height=100px/>";
    }
    function speakH(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaH");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("H; for; Horse!!");
        speechSynthesis.speak(msg);
        spells('H For HORSE');
        };
        demo.disabled = false;
        }
    }

        function I(){
    
            let a = document.getElementById('alphaI');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/I-img/ice-cream.png width=100px height=100px/>";
    }
    function speakI(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaI");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("I; for ; Ice-cream!!");
        speechSynthesis.speak(msg);
        spells('I For ICE-CREAM');
        };
        demo.disabled = false;
        }
        }

        function J(){
    
            let a = document.getElementById('alphaJ');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/J-img/jug.png width=100px height=100px/>";
    }
    function speakJ(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaJ");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("J; for ; Jug!");
        speechSynthesis.speak(msg);
        spells('J For JUG');
        };
        demo.disabled = false;
        }
        }

        function K(){
    
            let a = document.getElementById('alphaK');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/K-img/kite.png width=100px height=100px/>";
    }
    function speakK(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaK");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("K; for ; Kite!!");
        speechSynthesis.speak(msg);
        spells('K For KITE');
        };
        demo.disabled = false;
        }
        }

        function L(){
    
            let a = document.getElementById('alphaL');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/L-img/lion.png width=100px height=100px/>";
    }
    function speakL(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaL");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("L; for; Lion!!");
        speechSynthesis.speak(msg);
        spells('L For LION');
        };
        demo.disabled = false;
        }
        }

        function M(){
    
            let a = document.getElementById('alphaM');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/M-img/monkey.png width=100px height=100px/>";
    }
    function speakM(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaM");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("M; for; Monkey!!");
        speechSynthesis.speak(msg);
        spells('M For MONKEY');
        };
        demo.disabled = false;
        }
        }

        function N(){
    
            let a = document.getElementById('alphaN');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/N-img/net.png width=100px height=100px/>";
    }
    function speakN(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaN");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("N; for; Net!!");
        speechSynthesis.speak(msg);
        spells('N For NET');
        };
        demo.disabled = false;
        }
        }

        function O(){
    
            let a = document.getElementById('alphaO');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/O-img/orange.png width=100px height=100px/>";
    }
    function speakO(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaO");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("O; for; Orange!!");
        speechSynthesis.speak(msg);
        spells('O For ORANGE');
        };
        demo.disabled = false;
        }
        }

        function P(){
    
            let a = document.getElementById('alphaP');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/P-img/parrot.jpg width=100px height=100px/>";
    }
    function speakP(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaP");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("P;for; Parrot!!");
        speechSynthesis.speak(msg);
        spells('P For PARROT');
        };
        demo.disabled = false;
        }
        }

        function Q(){
    
            let a = document.getElementById('alphaQ');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/Q-img/queen.jpg width=100px height=100px/>";
    }
    function speakQ(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaQ");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("Q; for; Queen!!");
        speechSynthesis.speak(msg);
        spells('Q For QUEEN');
        };
        demo.disabled = false;
        }
        }

        function R(){
    
            let a = document.getElementById('alphaR');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/R-img/rabbit.jpg width=100px height=100px/>";
    }
    function speakR(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaR");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("R; for ;Rabbit!!");
        speechSynthesis.speak(msg);
        spells('R For RABBIT');
        };
        demo.disabled = false;
        }
        }

        function S(){
    
            let a = document.getElementById('alphaS');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/S-img/sun.png width=100px height=100px/>";
    }
    function speakS(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaS");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("S; for; Sun!!");
        speechSynthesis.speak(msg);
        spells('S For SUN');
        };
        demo.disabled = false;
        }
        }

        function T(){
    
            let a = document.getElementById('alphaT');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/T-img/table.jpg width=100px height=100px/>";
    }
    function speakT(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaT");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("T; for; Table!!");
        speechSynthesis.speak(msg);
        spells('T For TABLE');
        };
        demo.disabled = false;
        }
        }

        function U(){
    
            let a = document.getElementById('alphaU');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/U-img/umbrella.png width=100px height=100px/>";
    }
    function speakU(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaU");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("U; for ; Umbrellla");
        speechSynthesis.speak(msg);
        spells('U For UMBRELLA');
        };
        demo.disabled = false;
        }
        }

        function V(){
    
            let a = document.getElementById('alphaV');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/V-img/violin.png width=100px height=100px/>";
    }
    function speakV(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaV");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("V; for; Violin!");
        speechSynthesis.speak(msg);
        spells('V For VIOLIN');
        };
        demo.disabled = false;
        }
        }

        function W(){
    
            let a = document.getElementById('alphaW');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/W-img/watch4.png width=100px height=100px/>";
    }
    function speakW(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaW");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("W; for; Watch!!");
        speechSynthesis.speak(msg);
        spells('W For WATCH');
        };
        demo.disabled = false;
        }
        }

        function X(){
    
            let a = document.getElementById('alphaX');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/X-img/xmas-tree.png width=100px height=100px/>";
    }
    function speakX(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaX");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("X; for; X-mas;tree!!");
        speechSynthesis.speak(msg);
        spells('X For X-MAS TREE');
        };
        demo.disabled = false;
        }
        }

        function Y(){
    
            let a = document.getElementById('alphaY');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/Y-img/yatch.jpg width=100px height=100px/>";
    }
    function speakY(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaY");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("Y; for; Yatch");
        speechSynthesis.speak(msg);
        spells('Y For YATCH');
        };
        demo.disabled = false;
        }
        }

        function Z(){
    
            let a = document.getElementById('alphaZ');
     // let b=a.style.fontSize ;
    let target = document.getElementById('blanckarea');
    target.innerHTML+=a.innerHTML;
    target.innerHTML+="<img src=Images/Z-img/zebra.png width=100px height=100px/>";
    }
    function speakZ(){
    if ("speechSynthesis" in window) {
    let demo = document.getElementById("alphaZ");
    demo.onclick = () => {
        let msg = new SpeechSynthesisUtterance("Z; for; Zebra!!");
        speechSynthesis.speak(msg);
        spells('Z For ZEBRA');
        };
        demo.disabled = false;
        }
        }





























