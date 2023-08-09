/* ===== 슬라이드 / 자동 슬라이드 ===== */

const imgA=[
    "big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg"
];

/* ===== setInterval 이용한 자동 슬라이드 ===== */
let no = 1, position;
let timer = setInterval("show()", 3000);
function show(){
    
    if(no < 4){
        no ++;
    } else {
        no = 1;
    }

    $(".disp").html(no + " / 4");
    $(".img4").animate({"left":"-=1000px"}, 500, function(){
        $(".img4 li:first").appendTo(".img4");
        $(".img4").css("left", "+=1000px");
    });
}

/* ===== 버튼눌렀을때 슬라이드 =====*/
$(function(){

    let count = 0, pos;

    $(".next").on("click", function(){
        count++
        pos = count * 1000;
        if(count < 4){
            $(".img4").animate({"left":"-" + pos + "px"}, 500);
            $(".disp").html((count + 1) + " / 4");
        } else {
            count = 3;
        }
    }) 
    

    $(".prev").on("click", function(){
        count--
        pos = count * 1000;
        
        if(count >= 0){
            $(".img4").animate({"left":"-" + pos + "px"}, 500);
            $(".disp").html((count + 1 ) + " / 4");
        } else {
            count = 0;
        }
        
    })


})

window.onload=function(){
    for(let i = 0; i < imgA.length; i++){
        $(".img4 li:eq("+ i +")").css("background", "url(img/" + imgA[i] + ")").css("backgroundSize" ,"100% 100%");
    }
}
