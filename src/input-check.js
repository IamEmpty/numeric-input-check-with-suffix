function inputCheck(selector) {
  const el = document.querySelectorAll(selector),
    length = el.length;

  for (let i = 0; i < length; i++) {
    el[i].addEventListener('keyup', check);
  }

  function check() {
    let suffix = '';
    console.log(this.value);

    if(this.classList.contains('weight')) {
      suffix = ' kg';
    }

    if(this.classList.contains('volume')) {
      suffix = ' m³';
    }

    if (this.value !== this.value.replace(/[^0-9\.]/g, '')) {
      this.value = this.value.replace(/[^0-9\.]/g, '') + suffix;
    }
  }
}
