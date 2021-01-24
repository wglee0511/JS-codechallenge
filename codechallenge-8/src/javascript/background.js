const backDiv = document.querySelector(".js-background");

const MEMBERNUMBER = 12;

const izPoster = {
  eunbi:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/42320619ac69d4d2b210d4536e21466d.jpg)",
  sukura:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/efd3f56edc4af4da29410db740a71f48.jpg)",
  haewon:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/6b30fea8933c793bf6fa2c54eb9c8104.jpg)",
  yena:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/bb3177190218d0c6611721dd272d65ea.jpg)",
  chaeyeon:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/6496a2c4462dc66912a94d9806be3832.jpg)",
  chaewon:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/19a56ee9064f93cd15c3ff1bff6d17c5.jpg)",
  minju:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/18d00b9b94a99da40340420f6d6b3fdf.jpg)",
  nako:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/c25ab030b625391941f56d64fc2b9417.jpg)",
  hitomi:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/997db203797a05cd093e3544df2aed36.jpg)",
  yuri:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/f83ef8c75c1367e17cd334f348fea918.jpg)",
  yujin:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/37c60b1244075b299cf2ba0e6363805e.jpg)",
  wonyoung:
    "url(http://file3.instiz.net/data/cached_img/upload/2020/11/24/0/a1ca3b22fe7a8aa74956ef0c295fc09d.jpg)"
};

const backInit = () => {
  const radomPosterNumber = Math.floor(Math.random() * MEMBERNUMBER);
  backDiv.style.backgroundImage =
    izPoster[Object.keys(izPoster)[radomPosterNumber]];
};

export default backInit;
