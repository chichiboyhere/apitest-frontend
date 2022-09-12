import React, { useState, useEffect } from "react";
import VerbalResults from "./VerbalResults";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import classes from "./AptitudeTests.module.css";
//import { MathComponent } from "mathjax-react";
import Text from "./Text";
import questions from "./VerbalQuestions";
import GetSolution from "./GetSolution";
import { useDispatch, useSelector } from "react-redux";
import {
  postVerbalSpsec,
  getVerbalSpsec,
} from "../../actions/verbalActions";

function VerbalApi({ history }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(true);
  // Verbal states
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrection, setIsCorrection] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [showSavedResults, setShowSavedResults] = useState(false);
  const [isNotSubmitted, setIsNotSubmitted] = useState(true);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  // Implement fetch verbal results
  useEffect(() => {
    if (userInfo) {
      dispatch(getVerbalSpsec());
    } else {
      history.push("/auth");
    }
  }, [dispatch, history, userInfo]);

  const fetchVerbal = useSelector((state) => state.fetchVerbal);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setStartTest(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setStartTest(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Implement post result
  const saveResultHandler = (data) => {
    dispatch(postVerbalSpsec(data));
    setIsNotSubmitted(false);
  };

  //Implement fetch saved results
  const fetchResultHandler = () => {
    setShowSavedResults(true);
  };

  // Implement close result
  const closeResultHandler = () => {
    setShowSavedResults(false);
  };

  // In comes the Verbal Test
  

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setShowTime(false);
      setIsPaused(true);
      setIsActive(false);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowTime(true);
    setIsActive(false);
    setTime(0);
    setStartTest(false);
  };

  const getCorrection = () => {
    setIsCorrection(true);
  };

  return (
    <>
      {showTime && (
        <>
          <div className={classes.stopwatch}>
            <Timer time={time} />
            <Text text={'Verbal Test'}/>
            <ControlButtons
              active={isActive}
              isPaused={isPaused}
              handleStart={handleStart}
              handleReset={handleReset}
            />
          </div>
          <div className={classes.resultDisplay}>
            {!showSavedResults && (
              <button onClick={fetchResultHandler}>Saved Results </button>
            )}
            {showSavedResults && (
              <VerbalResults
                fetchVerbal={fetchVerbal}
                onClose={closeResultHandler}
              />
            )}
          </div>
        </>
      )}
      {startTest && (
        <div className={classes.container}>
          {/* 1. Header  */}
          <h1>Verbal Problems</h1>

          {/* 2. Current Score  */}
          <h2>Score: {score}</h2>

          {/* 3. Show results or show the question game  */}
          {showResults ? (
            <div className={classes.finalresults}>
              <h1>Final Results</h1>
              <h2>
                {score} out of {questions.length} correct - (
                {(score / questions.length).toFixed(2) * 100}%)
              </h2>
              <h3>
                You answered {score} questions correctly in {time / 1000}s,
                that's {(score / (time / 1000)).toFixed(2)} score/s.
              </h3>
              <button onClick={() => restartGame()}>Restart </button> &nbsp;
              <button disabled={!isNotSubmitted}
                onClick={() =>
                  saveResultHandler({
                    score: score,
                    verbalSps: (score / (time / 1000)).toFixed(2),
                  })
                }
              >
                Save Result
              </button>
              &nbsp;
              {!isCorrection && (
                <button onClick={() => getCorrection()}>Get Answers </button>
              )}
              {isCorrection && <GetSolution questions={questions} />}
            </div>
          ) : (
            <div className={classes.questioncard}>
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className={classes.questiontext}>
                {questions[currentQuestion].text}
              </h3>

              {/* List of possible answers  */}
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default VerbalApi;
