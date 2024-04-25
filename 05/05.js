// 1. DOM에서 제어할 노드를 가져오기
// 2. 버튼이 눌러지면[확인버튼일때] 랜덤수 생성 => 다시 하기전까지 변경X
// 3. input 박스 값이 없으면 '값을 입력하세요' 메세지 출력
// 4. input 박스 값이 1~100사이 숫자가 아니면 '입력오류' 메세지 출력
// 5. input 박스 값이 랜덤수 보다 작으면 up 이미지, 높으면 down 이미지
// 6. input 박스 값이 랜덤수 값과 같으면 good 이미지 
//    >input이 보이지 않아야 함
//    >버튼의 캡션을 '숫자를 생생해 주세요'로 변경
//    [숫자를 생성해주세요 버튼일때]
//    >초기화 되야함: 랜덤수 새로 생성,input박스 보여지기
document.addEventListener("DOMContentLoaded",()=>{
    const gimg = document.querySelector("#gimg");
    const bt = document.querySelector("#bt");
    const input = document.querySelector("#txt");

    //랜덤수
    let n;
    let flag = false;


    bt.addEventListener("click", ()=>{
        e.preventDefault();
        //랜덤수 생성 : flag가 ture일때만 생성
        if(!flag){
            flag = true
            n = Math.floor(Math.random()*100)+1;
            console.log("n=", n)
        }
        
        //입력값 체크
        if(input.value ==""){
            alert("값을 입력하세요")
            input.focus();
            return;
        }
        if(input.value < 100){
            alert("값을 낮추세요")
            input.focus();
            return;
        }

        console.log(n);
    });

});