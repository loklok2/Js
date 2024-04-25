// 1.DOM에서 이미지와 버튼을 가져오기 > DOM이 생성이 된 후
// 2.버튼에 click 이벤트 만들기
// 3.랜덤수 생성(1~6) > Math.floor(Math.random()*6)+1
// 4.랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
document.addEventListener("DOMContentLoaded", ()=>{
    const img = document.querySelector("#btDiv > img");
    const bt = document.querySelector("#btDiv > button");


    bt.addEventListener("click",()=>{
        const n = Math.floor(Math.random()*6)+1;
        img.setAttribute("src",`./img/${n}.png`);
        img.setAttribute("alt",`${n}`);
        
        // bt1.setAttribute("id", "bt1");
        // bt1의 자식 노드로 넣기
        // bt1.appendChild(bt1Txt);
        // bt1을 btDiv의 텍스트 매개변수로 사용으로 연결
        // btDiv.append(bt1);    

        // const bt = document.getElementById("bt");
        // const InNum = document.getElementById("InNum");
        // const dice = document.getElementById("dice")
        // let htmlTag = "<img"


        
    })
})