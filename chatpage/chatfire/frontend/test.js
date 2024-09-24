// test.js

// jQuery CDN 주소
const jqueryCDN = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';

// jQuery를 동적으로 로드하는 함수
function loadjQuery() {
    // 스크립트 엘리먼트 생성
    const script = document.createElement('script');
    script.src = jqueryCDN;

    // 스크립트 로드 완료 후 실행할 콜백 함수
    script.onload = function() {
        console.log('jQuery가 성공적으로 로드되었습니다.');
        // 여기에 jQuery 로드 후 실행할 초기화 코드 추가 가능
    };

    // 문서의 head에 스크립트 엘리먼트 추가
    document.head.appendChild(script);
}

// loadjQuery 함수 호출하여 jQuery 로드 시작
loadjQuery();
