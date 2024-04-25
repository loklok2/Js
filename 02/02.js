// addEventListener는 이벤트 감지하여 준비해줌
// document라는 객체 addEventListener라는 메서드 ("DOMContentLoaded")라는 함수
//("DOMContentLoaded") 돔을 구조화하여 돔안에 있는 구조를 찾을 수 있다
// ()=>{} call-back 구조
// 
const btCreate =(bt, idTxt, captionNode, parentNode)=>{
    bt.setAttribute("id", idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}


document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM 완성");
    const msg = document.querySelector("#msg");
    //btDiv를 연결된 html에서끌어서 가져오기
    const btDiv = document.getElementById("btDiv");
    //const 상수 선언
    const bt1 = document.createElement("button");
    const bt1Txt = document.createTextNode("버튼11");
    const bt2 = document.createElement("button");
    const bt2Txt = document.createTextNode("버튼21");
    //bt1에 속성넣기
    btCreate(bt1, "bt11", bt1Txt, btDiv);
    btCreate(bt2, "bt21", bt2Txt, btDiv);
    // bt1.setAttribute("id", "bt11");
    // //bt1의 자식 노드로 넣기
    // bt1.appendChild(bt1Txt);
    // //bt1을 btDiv의 텍스트 매개변수로 사용으로 연결
    // btDiv.append(bt1);
    
    bt1.addEventListener("click", ()=>{
        msg.innerHTML = "<h1>안녕하세요</h1>" ;
        //    if(msg.innerHTML =="")
        //     msg.innerHTML = "<h1>안녕하세요</h1>" ;
        //    else
        //     msg.innerHTML =" ";
    });

    bt2.addEventListener("click", ()=>{
         msg.innerHTML =" ";
     });
});