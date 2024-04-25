// 1. DOM에서 제어할 노드를 가져오기
// 이미지 2개, 버튼 6개, 결과노출 영역
// 2. 6개 버튼 클릭을 확인
// 3. 버튼이 클릭이 되면 해당버튼의 숫자를 추출 
// > 사용자 선택 숫자 > 이미지 변경
// > 랜덤수 생성 > 컴퓨터 숫자
// > 이미지 변경
// > 사용자 선택수와 컴퓨터 선택수를 비교
// > 메세지를 결과에 출력

document.addEventListener("DOMContentLoaded",()=>{
    // 1.DOM에서 제어할 노드를 가져오기
    const comImg = document.getElementById("com"); //id를 넣어줘야하고
    const UserImg = document.querySelector("#user"); //이건 #을 넣어줘야함
    const msg= document.querySelector("#msg");

    const bts = document.querySelectorAll(".bt4")
    console.log(bts);

    // bts[0].addEventListener("click",()=>{});
   
    // //반복문
    // console.log("**반복문1**")
    // for(let i = 0; i < bts.length; i++){
    //     console.log(bts[i])
    // }
    // //반복문2
    // console.log("**반복문2**")
    // for(let i in bts){
    //     console.log(bts[i])
    // }
    // //반복문3
    // console.log("**반복문3**")
    // bts.forEach(bt=>{
    // console.log(bts[i])
    // })
    // //반복문4
    // console.log("**반복문4**")
    // for(let bt of bts){
    //     console.log(bt)
    // }
    // //반복문5
    // console.log("**반복문5**")
    // for(let [idx, i] of bts.entries){
    //     console.log(i ,bt)
    // }

    // 2. 6개 버튼 클릭확인
    for(let bt of bts){
        bt.addEventListener("click",()=>{
        // 3. 버튼이 클릭이 되면 해당버튼의 숫자를 추출 
        // > 사용자 선택 숫자 > 이미지 변경
        // > 랜덤수 생성 > 컴퓨터 숫자
        // > 이미지 변경
        // > 사용자 선택수와 컴퓨터 선택수를 비교
        // > 메세지를 결과에 출력
        const user = parseInt(bt.textContent.slice(0,1))// 유저값을 줘서 고정
        //const user = Math.floor(Math.random()*6)+1; //유저 값을 랜덤으로 준다
        const com = Math.floor(Math.random()*6)+1;  //컴퓨터 값을 랜덤으로 준다
        UserImg.setAttribute("src",`../03/img/${user}.png`);
        // UserImg.setAttribute("alt",`${user}`);
        UserImg.setAttribute("alt",`user num${user}`);
        comImg.setAttribute("src",`../03/img/${com}.png`);
        comImg.setAttribute("alt",`${com}`);
        
        //결과값 출력
        if(com == user)msg.innerHTML = "맞음";
        else msg.innerHTML = "다름";

        });    
    }
    
});