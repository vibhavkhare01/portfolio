import React, { useState } from 'react';
import Window from '../os/Window';

export interface GameShowcaseProps extends WindowAppProps {}

const GameShowcase: React.FC<GameShowcaseProps> = (props) => {
    const [selectedGame, setSelectedGame] = useState('tetris');

    const games = [
        {
            id: 'tetris',
            name: 'Tetris',
            description: 'Classic block-stacking puzzle game',
            color: '#2E8B57',
            icon: '🧩'
        },
        {
            id: 'snake',
            name: 'Snake',
            description: 'Navigate and grow your snake',
            color: '#228B22',
            icon: '🐍'
        },
        {
            id: 'puzzle',
            name: 'Puzzle',
            description: 'Slide puzzle challenge',
            color: '#4169E1',
            icon: '🧩'
        }
    ];

    const renderGame = () => {
        switch (selectedGame) {
            case 'tetris':
                return <TetrisGame />;
            case 'snake':
                return <SnakeGame />;
            case 'puzzle':
                return <PuzzleGame />;
            default:
                return <TetrisGame />;
        }
    };

    return (
        <Window
            top={20}
            left={20}
            width={1000}
            height={700}
            windowTitle="Game Showcase"
            windowBarIcon="windowGameIcon"
            windowBarColor="#2C3E50"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'Interactive Game Collection'}
        >
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <h3 style={styles.sidebarTitle}>Games</h3>
                    {games.map((game) => (
                        <div
                            key={game.id}
                            style={{
                                ...styles.gameOption,
                                backgroundColor: selectedGame === game.id ? game.color : '#f0f0f0',
                                color: selectedGame === game.id ? 'white' : 'black'
                            }}
                            onClick={() => setSelectedGame(game.id)}
                        >
                            <span style={styles.gameIcon}>{game.icon}</span>
                            <div style={styles.gameInfo}>
                                <div style={styles.gameName}>{game.name}</div>
                                <div style={styles.gameDesc}>{game.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={styles.gameArea}>
                    {renderGame()}
                </div>
            </div>
        </Window>
    );
};

const TetrisGame: React.FC = () => {
    return (
        <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>Tetris</h2>
            <div style={styles.gameBoard}>
                <div style={styles.tetrisGrid}>
                    {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} style={styles.tetrisRow}>
                            {Array.from({ length: 10 }, (_, j) => (
                                <div
                                    key={j}
                                    style={{
                                        ...styles.tetrisCell,
                                        backgroundColor: Math.random() > 0.7 ? '#2E8B57' : 'transparent'
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.gameControls}>
                <div style={styles.score}>Score: 1250</div>
                <div style={styles.level}>Level: 3</div>
            </div>
        </div>
    );
};

const SnakeGame: React.FC = () => {
    return (
        <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>Snake</h2>
            <div style={styles.gameBoard}>
                <div style={styles.snakeGrid}>
                    {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} style={styles.snakeRow}>
                            {Array.from({ length: 15 }, (_, j) => (
                                <div
                                    key={j}
                                    style={{
                                        ...styles.snakeCell,
                                        backgroundColor:
                                            (i === 7 && j === 7) ? '#228B22' :
                                            Math.random() > 0.9 ? '#FFD700' : 'transparent'
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.gameControls}>
                <div style={styles.score}>Score: 85</div>
                <div style={styles.level}>Length: 7</div>
            </div>
        </div>
    );
};

const PuzzleGame: React.FC = () => {
    return (
        <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>Slide Puzzle</h2>
            <div style={styles.gameBoard}>
                <div style={styles.puzzleGrid}>
                    {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} style={styles.puzzleRow}>
                            {Array.from({ length: 3 }, (_, j) => (
                                <div
                                    key={j}
                                    style={{
                                        ...styles.puzzleCell,
                                        backgroundColor:
                                            (i === 2 && j === 2) ? 'transparent' :
                                            `hsl(${(i * 3 + j) * 40}, 70%, 60%)`
                                    }}
                                >
                                    {i * 3 + j + 1}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.gameControls}>
                <div style={styles.score}>Moves: 12</div>
                <div style={styles.level}>Time: 1:45</div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden'
    },
    sidebar: {
        width: 280,
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e0e0e0',
        padding: 25,
        overflow: 'auto'
    },
    sidebarTitle: {
        marginBottom: 25,
        color: '#2C3E50',
        fontSize: 22,
        fontWeight: 'bold'
    },
    gameOption: {
        display: 'flex',
        alignItems: 'center',
        padding: 18,
        marginBottom: 15,
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid #e0e0e0'
    },
    gameIcon: {
        fontSize: 28,
        marginRight: 18,
        minWidth: 28
    },
    gameInfo: {
        flex: 1
    },
    gameName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6
    },
    gameDesc: {
        fontSize: 14,
        opacity: 0.8,
        lineHeight: 1.4
    },
    gameArea: {
        flex: 1,
        padding: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto'
    },
    gameContainer: {
        textAlign: 'center',
        width: '100%',
        maxWidth: 550
    },
    gameTitle: {
        marginBottom: 30,
        color: '#2C3E50',
        fontSize: 28,
        fontWeight: 'bold'
    },
    gameBoard: {
        display: 'inline-block',
        border: '3px solid #2C3E50',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 25
    },
    tetrisGrid: {
        display: 'flex',
        flexDirection: 'column'
    },
    tetrisRow: {
        display: 'flex'
    },
    tetrisCell: {
        width: 18,
        height: 18,
        border: '1px solid #e0e0e0'
    },
    snakeGrid: {
        display: 'flex',
        flexDirection: 'column'
    },
    snakeRow: {
        display: 'flex'
    },
    snakeCell: {
        width: 24,
        height: 24,
        border: '1px solid #e0e0e0'
    },
    puzzleGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
    },
    puzzleRow: {
        display: 'flex',
        gap: 3
    },
    puzzleCell: {
        width: 70,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 6
    },
    gameControls: {
        marginTop: 25,
        display: 'flex',
        justifyContent: 'space-around'
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50'
    },
    level: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50'
    }
};

export default GameShowcase; 