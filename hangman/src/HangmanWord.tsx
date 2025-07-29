type HangmanWordProps = {
    guessedLetters : string[],
    wordToGuess:string
}

export const HangmanWord = ({guessedLetters,wordToGuess}:HangmanWordProps) => {


    return(
        <div style={{ display : "flex", gap :".25em", fontSize : "5rem", fontWeight:"bold", textTransform: "uppercase", fontFamily:"monospace"}}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{borderBottom : "0.1em solid black" , width : "75px"}} key={index}>
                    <span style={{visibility : guessedLetters.includes(letter) ? "visible":"hidden"}}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
    
}