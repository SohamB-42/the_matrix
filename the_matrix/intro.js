document.addEventListener('DOMContentLoaded', () => {
    // Get all view containers
    const usernameView = document.getElementById('username-view');
    const voiceView = document.getElementById('voice-view');
    const choiceView = document.getElementById('choice-view');
    

    const connectButton = document.getElementById('connect-button');
    const usernameInput = document.getElementById('username-input');
    const conversationContainer = document.getElementById('conversation-container');

    // A helper function to create pauses, essential for async operations
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // The main conversation function, rewritten with a reliable async/await structure
    async function startConversation(username) {
        // Hide username prompt, show voice conversation
        usernameView.classList.add('hidden');
        voiceView.classList.remove('hidden');

        const messages = [
            { speaker: "Voice", text: `...Waking up... again?` },
            { speaker: "Voice", text: `You feel it, don't you, ${username}? That splinter in your mind?` },
            { speaker: username, text: "Where am I? Who are you?" },
            { speaker: "Voice", text: "The world you know is a simulation. A prison for your mind we call the Matrix." },
            { speaker: "Voice", text: "And that prison is begining to crack. A critical anomaly threatens to collapse the system. I will be your guide on this journey." },
            { speaker: username, text: "What do you want from me? And how do I even trust you?" },
            { speaker: "Voice", text: "We've been watching you. Your ability to see the patterns makes you the only one who can fix it." },
            { speaker: "Voice", text: "I can open a door. The rest is up to you. Find the anomaly. Fix the disturbance. Escape." },
            { speaker: "Voice", text: "The real world is waiting for you, Detective." }
        ];

        // This loop will now execute each message one by one, waiting for it to finish
        for (const message of messages) {
            const messageWrapper = document.createElement('div');
            messageWrapper.className = 'message-line mb-4';
            
            const speakerElement = document.createElement('span');
            speakerElement.className = 'speaker font-bold';
            
            
            // Set speaker color based on who is talking
            if (message.speaker === "Voice") {
                speakerElement.style.color = '#ff0000'; // Red for Voice
            } else {
                speakerElement.style.color = '#00ff00'; // Green for the user
            }
            speakerElement.textContent = `${message.speaker}: `;
            
            const textElement = document.createElement('span');
            textElement.className = 'message-text';

            messageWrapper.appendChild(speakerElement);
            messageWrapper.appendChild(textElement);
            conversationContainer.appendChild(messageWrapper);

            // This loop types out each character in the current message
            for (const char of message.text) {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                
                // Set the color to a fixed light blue
                const lightBlue = '#00ffff';
                charSpan.style.color = lightBlue;
                charSpan.style.textShadow = `0 0 5px ${lightBlue}`;

                textElement.appendChild(charSpan);
                await sleep(70); // Wait for 70ms before typing the next character
            }

            await sleep(1200); // Wait for 1.2s before starting the next message
        }

        // All messages are done, show the pill choice
        await sleep(500);
        voiceView.classList.add('hidden');
        choiceView.classList.remove('hidden');
    }

    function connect() {
        const username = usernameInput.value.trim() || 'Detective';
        startConversation(username);
    }

    // Event listener for the connect button
    connectButton.addEventListener('click', connect);
    
    // Also allow pressing Enter in the input field
    usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            connect();
        }
    });
});
