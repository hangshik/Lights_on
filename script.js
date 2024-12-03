const container = document.getElementById("circle-container");
const numCircles = 7; // 원 개수
const radius = 120;   // 원형의 반지름
const startAngle = -Math.PI / 2; // 12시 방향

// 원 생성
for (let i = 0; i < numCircles; i++) {
  const angle = startAngle + (i / numCircles) * 2 * Math.PI; // 각도 계산
  const x = Math.cos(angle) * radius; // x 좌표
  const y = Math.sin(angle) * radius; // y 좌표

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.transform = `translate(${x + 125}px, ${y + 125}px)`; // 위치 조정
  circle.textContent = i + 1; // 번호 표시
  circle.dataset.index = i; // 인덱스 저장
  container.appendChild(circle);
}

// 클릭 이벤트 추가
container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("circle")) return;

  const circles = document.querySelectorAll(".circle");
  const index = parseInt(e.target.dataset.index, 10);

  // 클릭된 원과 인접한 2개의 색상 상태를 토글
  const toggleClass = (circleIndex) => {
    circles[circleIndex].classList.toggle("active");
  };

  const prevIndex = (index - 1 + numCircles) % numCircles; // 이전 원
  const nextIndex = (index + 1) % numCircles; // 다음 원

  toggleClass(index); // 클릭된 원
  toggleClass(prevIndex); // 이전 원
  toggleClass(nextIndex); // 다음 원

  // 모든 원이 빨간색인지 확인
  checkSuccess(circles);
});

// 성공 여부 확인
function checkSuccess(circles) {
  const allRed = Array.from(circles).every(circle =>
    circle.classList.contains("active")
  );

  if (allRed) {
    // alert("성공했습니다! 모든 원이 빨간색입니다.");
    let re = document.getElementById("result");
    re.textContent ="축하합니다. \n 성공하였습니다."
  } else {
    let re = document.getElementById("result");
    re.innerHTML ="1. 게임의 목표는 모든 버튼을 켜는 것입니다.<br>2. 버튼은 누르면 해당 버튼의 상태가 바뀌고, 인접한 두 버튼의 상태도 바뀝니다."
  }
}

function main() {
  location.reload(); // 페이지를 새로고침
}