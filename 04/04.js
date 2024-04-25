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
    const comImg = document.getElementById("com");
    const UserImg = document.querySelector("#user");
    const msg= document.querySelector("#msg");

    const bts = document.querySelectorAll(".bt4")
});