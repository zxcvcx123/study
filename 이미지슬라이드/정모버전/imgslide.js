    /* 내가 생각해낸 슬라이드 방법 / 단점: 사진파일을 숫자로 해야하고 순번에 맞춰줘야함 */
    let img = document.getElementsByClassName('sub_content_img');
    let no = 1;
    img[0].innerHTML="<div><img src='img/subContent/01.jpg'></div>";
    function show(){
        if(no < 6){
            no ++;
        } else {
            no = 1;
        }
        document.getElementById('sub_content_p').innerHTML="<p>"+no+"/6</p>";
        img[0].innerHTML="<div><img src='img/subContent/0"+no+".jpg'></div>"
    }
    let slide = setInterval(show, 2000);
