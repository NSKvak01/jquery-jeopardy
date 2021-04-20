const body = $('#main')
const title = $('<h1 id="title">Jeopardy Trivia</h1>')
body.append(title)

const score = $('<div id="score">Your score is:</div>')
body.append(score)

const firstRow = $('<div id="one"><div class="cell">$100</div><div class="cell">$100</div><div class="cell">$100</div><div class="cell">$100</div><div class="cell">$100</div></div>')
body.append(firstRow)
const secondRow = $('<div id="two"><div class="cell">$200</div><div class="cell">$200</div><div class="cell">$200</div><div class="cell">$200</div><div class="cell">$200</div></div>')
body.append(secondRow)
const thirdRow = $('<div id="three"><div class="cell">$300</div><div class="cell">$300</div><div class="cell">$300</div><div class="cell">$300</div><div class="cell">$300</div></div>')
body.append(thirdRow)
const fourthRow = $('<div id="four"><div class="cell">$400</div><div class="cell">$400</div><div class="cell">$400</div><div class="cell">$400</div><div class="cell">$400</div></div>')
body.append(fourthRow)
const fifthRow = $('<div id="five"><div class="cell">$500</div><div class="cell">$500</div><div class="cell">$500</div><div class="cell">$500</div><div class="cell">$500</div></div>')
body.append(fifthRow)


const inputArea = $('#input-area')
const questionArea = $('<div id="question-area"><div id="category"></div><div id="question"></div></div>')
body.append(questionArea)
const label = $('<label for="answer">Your answer</label/>')
const answer = $('<input id="answer"/>')
const submit = $('<button id="submit">SUBMIT</button>')
inputArea.append(label)
inputArea.append(answer)
inputArea.append(submit)

const arr1 =[]
for (const q of QUESTIONS){
    if(q.value === "$100"){
        const quest = {}
        quest.question = q.question
        quest.num = q.showNumber
        quest.answer = q.answer
        quest.category = q.category
        arr1.push(quest)
    }
}

const arr2 =[]
for (const q of QUESTIONS){
    if(q.value === "$200"){
        const quest = {}
        quest.question = q.question
        quest.num = q.showNumber
        quest.answer = q.answer
        quest.category = q.category
        arr2.push(quest)
    }
}

const arr3 =[]
for (const q of QUESTIONS){
    if(q.value === "$300"){
        const quest = {}
        quest.question = q.question
        quest.num = q.showNumber
        quest.answer = q.answer
        quest.category = q.category
        arr3.push(quest)
    }
}

const arr4 =[]
for (const q of QUESTIONS){
    if(q.value === "$400"){
        const quest = {}
        quest.question = q.question
        quest.num = q.showNumber
        quest.answer = q.answer
        quest.category = q.category
        arr4.push(quest)
    }
}

const arr5 =[]
for (const q of QUESTIONS){
    if(q.value === "$500"){
        const quest = {}
        quest.question = q.question
        quest.num = q.showNumber
        quest.answer = q.answer
        quest.category = q.category
        arr5.push(quest)
    }
}

const questionDiv = $('#question')
const categoryDiv = $('#category')

let scoreSum = 0
const scoreShow = $('#score')
const scoreText = 'Your score: $'
let obj;

const previousScoreShow = window.localStorage.getItem('prevScore')
const previousScore = window.localStorage.getItem('previousScore')
if (previousScoreShow !== null){
    scoreShow.text(previousScoreShow)
    scoreSum = parseInt(previousScore)
    console.log(previousScore)
}

let block1;

const cell1 = $('#one')
cell1.click(function(e){
    const block = e.target
    block1 = $(block)
    if(block1.text() === '$100'){
        obj = arr1[Math.floor((Math.random()*arr1.length))]
        const cat = obj.category
        const text = obj.question
        categoryDiv.text(cat)
        questionDiv.text(text)
    }
    const answerInputClear = $('#answer')
    answerInputClear.val('')  
})




const cell2 = $('#two')
cell2.click(function(e){
    const block = e.target
    block1 = $(block)
    if(block1.text() === '$200'){
        obj = arr2[Math.floor((Math.random()*arr2.length))]
        const cat = obj.category
        const text = obj.question
        categoryDiv.text(cat)
        questionDiv.text(text)
    }
    const answerInputClear = $('#answer')
    answerInputClear.val('')  
})



const cell3 = $('#three')
cell3.click(function(e){
    const block = e.target
    block1 = $(block)
    if(block1.text() === '$300'){
        obj = arr3[Math.floor((Math.random()*arr3.length))]
        const cat = obj.category
        const text = obj.question
        categoryDiv.text(cat)
        questionDiv.text(text)
    }
    const answerInputClear = $('#answer')
    answerInputClear.val('')  
})



const cell4 = $('#four')
cell4.click(function(e){
    const block = e.target
    block1 = $(block)
    if(block1.text() === '$400'){
        obj = arr4[Math.floor((Math.random()*arr4.length))]
        const cat = obj.category
        const text = obj.question
        categoryDiv.text(cat)
        questionDiv.text(text)
    }
    const answerInputClear = $('#answer')
    answerInputClear.val('')  
})



const cell5 = $('#five')
cell5.click(function(e){
    const block = e.target
    block1 = $(block)
    if(block1.text() === '$500'){
        obj = arr5[Math.floor((Math.random()*arr5.length))]
        const cat = obj.category
        const text = obj.question
        categoryDiv.text(cat)
        questionDiv.text(text)
    }
    const answerInputClear = $('#answer')
    answerInputClear.val('')  
})




submit.click(function (){
    const answerInput = $('#answer')
    const answerValue = answerInput.val()
    if(block1.text() === '$100'){
        for (const item of arr1){
            if(item.question === obj.question){
                if (answerValue.toUpperCase() === obj.answer.toUpperCase()){
                    questionDiv.text('Correct!')
                    console.log(scoreSum)
                    scoreSum+=100
                    const totalScore = scoreText + scoreSum.toString()
                    scoreShow.text(totalScore)
                    window.localStorage.setItem('prevScore',totalScore)
                    window.localStorage.setItem('previousScore',scoreSum)
                    categoryDiv.text('')
                } else{
                    text = 'Incorrect. The right answer is ' + obj.answer + '.'
                    questionDiv.text(text)
                    categoryDiv.text('')
                }
            }
        }
    } 
    if(block1.text() === '$200'){
        for (const item of arr2){
            if(item.question === obj.question){
                if (answerValue.toUpperCase() === obj.answer.toUpperCase()){
                    questionDiv.text('Correct!')
                    console.log(scoreSum)
                    scoreSum+=200
                    const totalScore = scoreText + scoreSum.toString()
                    scoreShow.text(totalScore)
                    window.localStorage.setItem('prevScore',totalScore)
                    window.localStorage.setItem('previousScore',scoreSum)
                    categoryDiv.text('')
                } else{
                    text = 'Incorrect. The right answer is ' + obj.answer + '.'
                    questionDiv.text(text)
                    categoryDiv.text('')
                }
            }
        }
    } 
    if(block1.text() === '$300'){
        for (const item of arr3){
            if(item.question === obj.question){
                if (answerValue.toUpperCase() === obj.answer.toUpperCase()){
                    questionDiv.text('Correct!')
                    console.log(scoreSum)
                    scoreSum+=300
                    const totalScore = scoreText + scoreSum.toString()
                    scoreShow.text(totalScore)
                    window.localStorage.setItem('prevScore',totalScore)
                    window.localStorage.setItem('previousScore',scoreSum)
                    categoryDiv.text('')
                } else{
                    text = 'Incorrect. The right answer is ' + obj.answer + '.'
                    questionDiv.text(text)
                    categoryDiv.text('')
                }
            }
        }
    } 
    if(block1.text() === '$400'){
        for (const item of arr4){
            if(item.question === obj.question){
                if (answerValue.toUpperCase() === obj.answer.toUpperCase()){
                    questionDiv.text('Correct!')
                    console.log(scoreSum)
                    scoreSum+=400
                    const totalScore = scoreText + scoreSum.toString()
                    scoreShow.text(totalScore)
                    window.localStorage.setItem('prevScore',totalScore)
                    window.localStorage.setItem('previousScore',scoreSum)
                    categoryDiv.text('')
                } else{
                    text = 'Incorrect. The right answer is ' + obj.answer + '.'
                    questionDiv.text(text)
                    categoryDiv.text('')
                }
            }
        }
    } 
    if(block1.text() === '$500'){
        for (const item of arr5){
            if(item.question === obj.question){
                if (answerValue.toUpperCase() === obj.answer.toUpperCase()){
                    questionDiv.text('Correct!')
                    console.log(scoreSum)
                    scoreSum+=500
                    const totalScore = scoreText + scoreSum.toString()
                    scoreShow.text(totalScore)
                    window.localStorage.setItem('prevScore',totalScore)
                    window.localStorage.setItem('previousScore',scoreSum)
                    categoryDiv.text('')
                } else{
                    text = 'Incorrect. The right answer is ' + obj.answer + '.'
                    questionDiv.text(text)
                    categoryDiv.text('')
                }
            }
        }
    } 
})