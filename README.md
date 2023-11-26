# Toy Robot Challenge

This repository contains an MVC implementation of the Toy Robot Challenge in JavaScript. The challenge involves controlling a toy robot on a grid, allowing it to move, turn, and report its position.

## Directory Structure
```tree
.
└── toy-robot-challenge/
    ├── src/
    │   ├── model/
    │   │   └── robot-model.js
    │   ├── view/
    │   │   └── robot-view.js
    │   ├── controller/
    │   │   └── robot-controller.js
    │   └── utils/
    │       └── constants.js
    ├── app.js
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md
```

## How to Run

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository to your local machine:
    ```bash
    https://github.com/mohitkhosla/toy-robot-challenge.git
    ```
2. Navigate to the project directory:
    ```bash
    cd toy-robot-challenge
    ```
3. Install dependencies (There are none for this application, however it's a good approach to have it for version control):
    ```bash
    npm install
    ```

### Usage
Start the Toy Robot Simulation:
```bash
npm start
```

Follow the on-screen instructions to control the toy robot. Enter commands such as PLACE, MOVE, LEFT, RIGHT, and REPORT.

Example:

```bash
Enter commands for the Toy Robot (or type "QUIT" to exit).
Commands: PLACE X,Y,FACING | MOVE | LEFT | RIGHT | REPORT
Example: PLACE 0,0,NORTH

> PLACE 1,2,EAST
> MOVE
> REPORT
Output: 2,2,EAST
```

### Quit Program
To exit the simulation, type QUIT when prompted for a command.
