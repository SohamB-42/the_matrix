

```
████████╗██╗  ██╗███████╗   ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
╚══██╔══╝██║  ██║██╔════╝   ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
   ██║   ███████║█████╗     ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝
   ██║   ██╔══██║██╔══╝     ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗
   ██║   ██║  ██║███████╗   ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝╚██╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
```

A minimal, browser-based puzzle game about a choice. Are you a bug, or are you a feature?
Now available to play directly, deployed using Netlify!
https://escapingthematrix.netlify.app/


-----

### Synopsis

The world you know is a simulation, and it's breaking. You are the **Detective**, an anomaly with the unique ability to perceive the glitches in the system's code. A mysterious entity contacts you with a definitive choice:

  * Take the **Blue Pill**: Return to blissful ignorance. The connection is severed. **Game Over.**
  * Take the **Red Pill**: Accept the truth and your mission. You are taken to the system's core terminal to begin your work.

Your goal is to find the **four fragments** of a master key to repair the critical anomaly. The clues are hidden not just in the terminal, but in the very fabric of the game's code. Fail, and the system—along with you—will be permanently deleted.

-----

### Features

  * 💊 **Iconic Choice**: The Red Pill / Blue Pill dilemma determines your path from the very beginning.
  * 💻 **Terminal Interface**: A retro-inspired console is your window into the code of the Matrix.
  * 🧩 **Multi-Layered Puzzles**: Investigate hidden commands, inspect source code, and survive system corruption events.
  * 🎧 **Curated Soundtrack**: An atmospheric score that reacts to your choices and progress.
  * 🎬 **Multiple Endings**: Succeed and be welcomed to the "real world," or fail and have your connection permanently lost.

-----

### A Note on Immersion

This game is designed to be an atmospheric experience. For the best immersion, **using headphones is highly recommended.** The curated soundtrack features a blend of dark ambient, glitchy electronic, and tense synth-driven themes inspired by classic sci-fi thrillers, all designed to pull you deeper into the simulation.

-----

### 🛠️ Development & Running Locally

For those who wish to run the project locally or contribute:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/SohamB-42/the_matrix.git
    ```
2.  **Run the game:**
    Navigate to the project directory and open `index.html` in any modern web browser.

-----

### 🤫 System Override // Major Spoilers Ahead

Click to reveal puzzle solutions and the final key.

#### **Fragment Locations**

  * **Part 1 (ZX12):** Found by hovering the mouse over a specific text element in the main terminal.
  * **Part 2 (QW34):** Found by using a hidden command to access a secret console page.
  * **Part 3 (MN78):** Found by opening the browser's developer tools and inspecting the `style.css` file.
  * **Part 4 (AB56):** After three incorrect terminal commands, you're sent to a "corrupted" 404 page. Type **STABILIZE** to solve the interactive puzzle (you have three attempts).

#### **The Master Key**

Enter the full key into the terminal to win:
`ZX12-QW34-MN78-AB56`

-----

#### **A small demo video**
https://www.youtube.com/watch?v=9F-Dgac2SQU

-----

#### **Built With**

  * HTML5
  * CSS3
  * Vanilla JavaScript
-----

## Future Expansion Plans


### Phase 1: Gameplay & Puzzle Expansion

This phase focuses on adding more content and variety for the player to experience.

1.  **Introduce New Puzzle Types:**
    * **An Audio Puzzle:** The terminal links to a "corrupted" audio file (e.g., `evidence.wav`). Players must download it and listen closely to find a hidden code spoken underneath layers of static, or a sequence of tones that translates to a number.
    * **A JavaScript Console Puzzle:** The "Voice" instructs the player to "look deeper into the code." The player would need to open the browser's own developer console (`F12`) to find a message or a function (`run_diagnostic()`) that reveals the next fragment. This is very meta and fits the theme perfectly.
    * **An Image Steganography Puzzle:** A linked image file (`data_fragment.png`) seems like a dead end, but a clue in its filename or the surrounding text hints that the key is hidden *inside* the image data itself, requiring the player to use an online steganography tool to extract it.

2.  **Add Dynamic Elements:**
    * **Randomized Clues:** To increase replayability, have the key fragments appear in slightly different locations. For example, the fragment in the `.css` file could be attached to a different, randomly chosen class name each time the game loads.
    * **Timed Events:** Introduce a sense of urgency. After solving a puzzle, the terminal could flash: `[WARNING: System Integrity Scan in 5:00 minutes]`. This puts the player on a clock to find the next fragment before the system "resets" their progress on that stage.



### Phase 2: Narrative & World-Building

This phase aims to deepen the story and the player's immersion in the world.

1.  **Expand the Lore with Log Files:**
    * Implement a `logs` or `archive` command in the terminal. This could allow the player to read the corrupted journal entries of previous "Detectives" who tried and failed, providing cryptic clues and building a richer backstory about the nature of the Matrix and the anomaly.

2.  **Introduce a Sequel Hook or "Chapter 2":**
    * **The Architect's Gambit:** Upon successfully fixing the anomaly, the player is contacted by a *different* entity—perhaps the cold, logical Architect of the Matrix itself. Their new mission isn't to *fix* the system, but to help the Architect enforce *control*, presenting a new, morally ambiguous set of puzzles.
    * **Joining the Resistance:** The "Voice" reveals that fixing the anomaly was just a test. The player has now proven their ability, and the next phase is to join the human resistance to help truly *break* the Matrix and free others.

3.  **Implement a "Third Ending":**
    * What happens if the player enters the four fragments in the wrong order? Instead of a simple "failure," this could trigger a hidden, third ending where the player doesn't fix or escape the system, but instead absorbs the anomaly's power, becoming a rogue agent like Agent Smith.


### Phase 3: Technical & Feature Enhancements

This phase focuses on improving the technical foundation and user experience.

1.  **Save Player Progress:**
    * Use the browser's `localStorage` to save which key fragments the player has collected. If they close the tab and come back, they can resume their investigation without starting from scratch.

2.  **Create a More Interactive Terminal:**
    * Implement a basic file system with commands like `ls` (list files), `cd` (change directory), and `cat` (view file content). Players could navigate directories like `/system/logs` or `/user/detective/clues` to find information. Also, adding command history (using the up/down arrow keys) would be a huge quality-of-life improvement.

3.  **Implement a Speedrun Mode:**
    * Add a timer that starts the moment the "Red Pill" is chosen and stops when the final key is entered correctly. This could be displayed on the success screen and would encourage players to master the puzzles and compete for the fastest time.
