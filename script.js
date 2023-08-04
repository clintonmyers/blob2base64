function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log('RESULT', reader.result);
    const el = document.getElementsByClassName('output')[0];
    el.innerHTML = reader.result;
    navigator.clipboard.writeText(reader.result);
    alert('Copied to Clipboard!');
  };
  reader.readAsDataURL(file);
}
