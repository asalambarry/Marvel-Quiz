import React from 'react'
import Levels from '../Levels/Levels';
import ProgresBar from '../ProgressBar/ProgresBar';
import { MarvelQuizData } from '../MarvelQuizData/MarvelQuizData';
class Quiz extends React.Component {

	state = {
		// Sachant que nous avons trois niveau nous allons les stockés dans un tableau
		levelNames: ['debutant', 'confirme', 'expert'],
		quizLevel: 0,
		maxLenghtData: 10,
		// storedQuestions est un tableau qui me permet de sauvegarder toutes les 10 questions
		storedQuestions: [],
		question: null,
		options: [],
		idQuestion: 0,
		btnDisabled:true,
		userAnswer:null
	}

	// Une fonction pour chahrger nos données depuis le fichier MarvelQuizData
	loadQuestions = (quizz) => {
		// Pour recuperer les 10 questions du niveau debutant
		const fetchArrayQuizz = MarvelQuizData[0].quizz[quizz]
		// console.log(fetchArrayData);
		// je fait une condtion pour verifier est ce on n'a suffisament de data
		if (fetchArrayQuizz.length >= this.state.maxLenghtData) {
			// Le destructuring pour recuperer toutes les questions exceptés de ses réponses
			const newArray = fetchArrayQuizz.map(({ answer, ...keepRest }) => keepRest)
			console.log(newArray);
			this.setState({
				storedQuestions: newArray
			})
		} else {
			console.log("Pas suffisament de données pour afficher");
		}
	}
	componentDidMount() {
		this.loadQuestions(this.state.levelNames[this.state.quizLevel])
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.storedQuestions !== prevState.storedQuestions) {
			this.setState({
				question: this.state.storedQuestions[this.state.idQuestion].question,
				options: this.state.storedQuestions[this.state.idQuestion].options,
			})

		}
	}
	submitAnswer = (selectedAnswer) => {
		this.setState({
			userAnswer:selectedAnswer,
			btnDisabled:false
		})
	}
	render() {
		// const { pseudo } = this.props.userData;
		const dispalayOptions = this.state.options.map((option, index)=>{
			return (
				// <p className='answerOptions selected' onClick={()=> this.submitAnswer(option)}>{option}</p>
				<p className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`} onClick={()=> this.submitAnswer(option)}>{option}</p>
			)
		})
		
		return (
			<div>
				<Levels />
				<ProgresBar />
				<h2>{this.state.question}</h2>
				{/* <p className='answerOptions'>Question 1</p>
				<p className='answerOptions'>Question 2</p>
				<p className='answerOptions'>Question 3</p>
				<p className='answerOptions'>Question 4</p> */}
				{dispalayOptions}
				<button disabled={this.state.btnDisabled} className='btnSubmit'>Suivant</button>
			</div>
		);
	}
}


export default Quiz