body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
    padding: 50px;
    margin: 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.watermelon {
    width: 200px;
    height: 200px;
    background: #2ed573;
    border-radius: 50%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: 4px solid white;
}

.watermelon:hover {
    background: #ff4757;
    transform: scale(1.2) rotate(10deg);
    box-shadow: 0 0 50px rgba(255, 71, 87, 0.7);
}

button {
    background: #ffd700;
    color: #333;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 25px;
    cursor: pointer;
    margin: 20px;
    transition: all 0.3s ease;
}

button:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-3px);
}

#secret {
    font-size: 1.5em;
    margin-top: 20px;
    color: #ffd700;
}