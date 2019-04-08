const showMap = () => {
  window.initMap = () => {
    const uluru = { lat: 35.417254, lng: 24.690681 };
    const uluru2 = { lat: 35.411833, lng: 24.782750 };
    const options = {
      zoom: 16,
      center: uluru2,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
    };

    const map = new google.maps.Map(document.getElementById('map'), options);

    function addMarker(coord) {
      const marker = new google.maps.Marker({
        position: coord,
        map,
        title: 'Aitidis Travel',
      });
    }
    addMarker(uluru);
    addMarker(uluru2);

    const UIContactblockHead = document.querySelectorAll('.contactblockHead');
    const UIaddressBlockPanormo = document.querySelector('.contactblock__addressBlock--panormo');
    const UIaddressBlockBali = document.querySelector('.contactblock__addressBlock--bali');

    function changePoint(e) {
      for (let i = 0; i < UIContactblockHead.length; i += 1) {
        UIContactblockHead[i].classList.remove('isOpen');
      }
      if (e.target.classList.contains('contactblockHead--bali') && !(e.target.classList.contains('isOpen'))) {
        UIaddressBlockPanormo.classList.remove('isOpen');
        UIaddressBlockBali.classList.add('isOpen');
        e.target.classList.add('isOpen');
        map.panTo(uluru2);
      } else if (e.target.classList.contains('contactblockHead--panormo') && !(e.target.classList.contains('isOpen'))) {
        UIaddressBlockPanormo.classList.add('isOpen');
        UIaddressBlockBali.classList.remove('isOpen');
        e.target.classList.add('isOpen');
        map.panTo(uluru);
      }
    }
    UIContactblockHead.forEach(btn => btn.addEventListener('click', changePoint));
  };
};
export default showMap;
