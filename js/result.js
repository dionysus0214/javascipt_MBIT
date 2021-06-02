const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');
const kakaoShare = document.querySelector('.kakao_share');

$(function() {
  let url = window.location.href
  let img = $('.result_img img').attr('src')
  $("meta[property='og\\:url']").attr('content', url);
  $("meta[property='og\\:image']").attr('content', img);
});

Kakao.init('b0dd9f37206c107544064353c8388392');

function shareKakao() {
  let result_url = window.location.href;
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: 'MBTI 말고 MBIT',
      description: '나의 개발 유형은?',
      imageUrl:
        'https://mbti.dionysus.com/static/img/mbit_thumbnail.png',
      link: {
        mobileWebUrl: 'https://mbti.dionysus.com',
        webUrl: 'https://mbti.dionysus.com',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: '결과 보러가기',
        link: {
          mobileWebUrl: result_url,
          webUrl: result_url,
        },
      },
      {
        title: '테스트 하러가기',
        link: {
          mobileWebUrl: 'https://mbti.dionysus.com',
          webUrl: 'https://mbti.dionysus.com',
        },
      },
    ]
  });
}

function copyUrl() {
  let tmp = document.createElement('input');
  let url = location.href;

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다.");
}

function shareFacebook() {
  let url = window.location.href;
  let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
  let link = facebook + url;
  window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', shareFacebook);
kakaoShare.addEventListener('click', shareKakao);