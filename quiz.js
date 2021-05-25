var question,pos=0,ans,A,B,C,D,board,choices,choice,correct=0,status;
board=document.getElementById("board");


var qns=[
    ["what is your fav colour?","pink","blue","red","A"],
    ["100+200","100","200","300","C"],
    ["10+20","10","30","500","B"],
    ["100+300","400","200","300","A"],
    ["50+50","10","30","100","C"]
];

function displayQuestion() {

if(pos>=qns.length)
{


board.innerHTML="<h2>You Got "+(correct)+" out of "+qns.length+"</h2>";
document.getElementById("status").innerHTML=" <h2>Quiz Completed </h2>";
pos=0;
correct=0;
return false;
}
board.innerHTML="<h2>Question " +(pos+1)+"  of  "+qns.length+"</h2>";
question=qns[pos][0];
A=qns[pos][1];
B=qns[pos][2];
C=qns[pos][3];
board.innerHTML="<h3>"+question+" </h3>";
board.innerHTML+="<label><input type='radio' name='choices' value='A'>"+A+"</input></label>";
board.innerHTML+="<label><input type='radio' name='choices' value='B'>"+B+"</input></label>";
board.innerHTML+="<label><input type='radio' name='choices' value='C'>"+C+"</input></label>";
board.innerHTML+="<button  onClick='checkAnswer()'> SUBMIT</button>";
}

function checkAnswer()
{ 
    //3    choices[0]   choices[1]    choices[2]

   
    choices=document.getElementsByName("choices");
    for(i=0;i<choices.length;i++){

        choice=choices[i].value;
        //choice=choice[0].value=A

        if(choices[i].checked)
        //A is checked
        {
    if(choice==qns[pos][4])
    //A==qns[0][4]      A===A
    {
        correct++;
        
    }}}
    pos++
    displayQuestion();
}