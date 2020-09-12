const arrQuiz = [];
arrQuiz.push({
    question: 'Where does Covid-19 come from?',
    a: 'China',
    b: 'Africa',
    c: 'Viet Nam',
    d: 'America',
    correct: 'a'
});
arrQuiz.push({
    question: 'How old is Anhld?',
    a: '17',
    b: '18',
    c: '19',
    d: '31',
    correct: 'd'
});
arrQuiz.push({
    question: 'What is the best programming language?',
    a: 'javascript',
    b: 'python',
    c: 'golang',
    d: 'php',
    correct: ''
});

let index = 0;
let iCorrect = 0;

loadQuiz();

function loadQuiz(){
    document.querySelector(".content>h2").innerHTML = arrQuiz[index].question;
    document.querySelector(".content>ul>li:nth-child(1)>label").innerHTML = arrQuiz[index].a;
    document.querySelector(".content>ul>li:nth-child(2)>label").innerHTML = arrQuiz[index].b;
    document.querySelector(".content>ul>li:nth-child(3)>label").innerHTML = arrQuiz[index].c;
    document.querySelector(".content>ul>li:nth-child(4)>label").innerHTML = arrQuiz[index].d;
}

document.querySelector("button").addEventListener("click", () => {
    if(document.querySelector("button").innerHTML=='Reset'){
        document.querySelector("button").innerHTML = 'Submit';
        index = iCorrect = 0;
        document.querySelector("input:checked").checked = false;
        document.querySelector(".content>ul").style.display = "block";
        loadQuiz();
        return;
    }
    if(document.querySelector("input:checked")!=null){
        index++;
        if(arrQuiz[index-1] != undefined){
            let answer = document.querySelector("input:checked").value;
            if(answer==arrQuiz[index-1].correct||arrQuiz[index-1].correct=='')
                iCorrect++;
        }
        if(arrQuiz[index] != undefined){
            loadQuiz();
        }else{
            document.querySelector(".content>ul").style.display = "none";
            let html = 'Success: '+iCorrect+'/'+arrQuiz.length;
            document.querySelector(".content>h2").innerHTML = html;
            document.querySelector("button").innerHTML = 'Reset';
        }
    }
});