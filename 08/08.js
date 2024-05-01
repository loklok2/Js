document.addEventListener("DOMContentLoaded", ()=>{
    const txt1 = document.querySelector("#txt1");
    const bt83 = document.querySelectorAll(".bt83");
    const bt84 = document.querySelectorAll(".bt84");
    const bt85 = document.querySelectorAll(".bt85");
    let arr = [] ;  // = new방식이랑 같음
    //방법2
    let obj = {
        "사과" : "🍎",
        "오렌지":"🥭",
        "수박":"🍉",
        "바나나":"🍌",
        "당근" : "🥕",
        "오이":"🥒",
        "아보카도":"🥑",
        "딸기":"🍓"
    };
    //배열추가
    for(let bt of bt83) {
        
        bt. addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(bt.textContent)

            //방법2
            // if(bt.textContent == "사과") arr.push("🍎");
            // else if(bt.textContent == "오렌지") arr.push("🥭");
            // else if(bt.textContent == "수박") arr.push("🍐");
            // else if(bt.textContent == "바나나") arr.push("🍌");

            arr.push(obj[bt.textContent]);

            txt1.value = arr.join(" ")

    
        });
    };
    //배열삭제
    for(let bt of bt84){
        bt. addEventListener("click", (e)=>{
            e.preventDefault();


            console.log(arr)
            console.log(obj[bt.textContent.replace("삭제", "")])

            //배열필터(골라낼때 사용한다)
            const k = obj[bt.textContent.replace("삭제", "")];
            //필터안에는 콜백함수가 들어가야함
            //arr = arr.filter((item)=>{return item != k});
            //리턴생략
            //리턴문만 있을때는 ()[]{}생략이 가능
            arr = arr.filter(item=>item != k);
            
            txt1.value = arr.join(" ")
        });
    };
    //배열 변환
    for(let bt of bt85){
        bt. addEventListener("click", (e)=>{
            e.preventDefault();
            let tm = bt.textContent.split("→")
            console.log(tm);

            //arr = arr.map((item)=>{return item == obj[tm[0]] ? obj[tm[1]] : item; });
            //함수하나에 인수 하나
            arr = arr.map(item=>item == obj[tm[0]] ? obj[tm[1]] : item);
            txt1.value = arr.join(" ");

        });
    }
});