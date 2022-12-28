function success(){
  let re = document.getElementById("result");
  const average = list.reduce((a,c)=>a+c)/list.length;
  if(average==1){
    re.textContent ="축하합니다. 성공하였습니다."
  } else {
    re.textContent ="7개의 불을 모두 켜십시오."
  }
}


function bg(){
  for(i=0;i<7;i++){
    if(list[i]=="1"){
      document.getElementById("c"+i).style.backgroundColor="red";  
    } else {
      document.getElementById("c"+i).style.backgroundColor="#ddd";  
    }
  }
  success();
}

function cl(j) {
  list[(j+6)%7]=(list[(j+6)%7]+1)%2;
  list[j]=(list[j]+1)%2;
  list[(j+1)%7]=(list[(j+1)%7]+1)%2;
  bg();
}


function main() {
  list=[]  
  count=1;
  let tag = "<div>";
      tag += "<div>";
      for (i = 0; i < 7; i++) {
        list.push(0);
        tag += "<div class='box' id='"+"c"+(i)+"' onclick='cl("+(i)+")'>"+list[i]+"</div>";
      }
      tag += "</div>";
    
    tag += "</div>";
    area.innerHTML = tag;
  }

onload = () => {
  main()
}