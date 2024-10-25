function triggerToggle(getID, init = "none") {
  let slideUp = (target, duration = 750, render = "flex") => {
    target = document.querySelector(target);
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = "border-box";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  let slideDown = (target, duration = 750, render = "flex") => {
    target = document.querySelector(target);
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = render;
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  let slideToggle = (target, duration = 500, render = "flex") => {
    let _target = document.querySelector(target);
    let display = window.getComputedStyle(_target).display;
    if (display === "none") {
      return slideDown(target, duration, render);
    } else {
      return slideUp(target, duration, render);
    }
  };

  function toggleIcon(ele) {
    ele = document.querySelector(ele);
    if (ele.classList.contains("close")) {
      ele.classList.remove("close");
      ele.classList.add("open");
    } else {
      ele.classList.remove("open");
      ele.classList.add("close");
    }
  }
  if (init === "none") {
    document.querySelector(`#${getID} ~ .target`).style.display = 'none';
    document.querySelector(`#${getID} > .icon`).classList.add('open');
    document.querySelector(`#${getID} > .icon`).classList.remove('close')
  }
  document.getElementById(getID).addEventListener("click", function () {
    slideToggle(`.${getID}`);
    toggleIcon(`#${getID} .icon`);
  });
}

const slide_toggle_style = `
:root {
  --icon-close-svg1: url(https://css.netcentrx.net/icons/icon_close_v01.svg);
  --icon-open-svg1: url(https://css.netcentrx.net/icons/icon_open_v01.svg);
  --icon-size: 12px;
}

* {
  box-sizing: border-box;
}

.target {
  padding: 0.5em;
  background-color: #fefefe;
  margin-bottom: 0.25em;
  text-align: left;
  color: rgba(50, 50, 50, 0.95);
  font-weight: 450;
  border-radius: 0 0 5px 5px;
  display: flex;
  border: 1px solid #aaa;
  background: #fff;
}

.center {
  width: 550px;
  margin: 0 auto;
  text-align: center;
}
h3.slide-trigger {
  width: 100%;
  margin: 0 auto;
  border: 1px solid gray;
  color:#444;
  text-shadow: 0.5px 0.5px #777, 1px 1px #aaa;
  user-select: none;
  padding: 0.25rem;
}
.slide-trigger {
  font-size: 1rem;
  cursor: pointer;
  background: #eee;
}
.icon.open {
  background: var(--icon-open-svg1);
  width: var(--icon-size);
  height: var(--icon-size);
  background-size: var(--icon-size);
  display: inline-block;
  padding-right: 0.5rem;
  transform: rotate(180deg);
  transition: 1s;
  filter: invert(51%) sepia(3%) saturate(2%) hue-rotate(322deg) brightness(97%)
    contrast(84%);
}
.icon.close {
  background: var(--icon-close-svg1);
  width: var(--icon-size);
  height: var(--icon-size);
  background-size: var(--icon-size);
  display: inline-block;
  padding-right: 0.5rem;
  transform: rotate(-180deg);
  transition: 1s;
  filter: invert(51%) sepia(3%) saturate(2%) hue-rotate(322deg) brightness(97%)
    contrast(84%);
}
.color-fill {
  filter: invert(51%) sepia(3%) saturate(2%) hue-rotate(322deg) brightness(97%)
    contrast(84%);
}
.triggers {
  text-align: center;
  width: clamp(360px, 600px, 80vw);
  margin: 0 auto;
  border-radius: 6px;
  font-family: sans-serif;
  overflow:hidden;
  box-shadow:2px 2px #99999975;
}`;

const slide_toggle_style_tag = document.createElement('style');
slide_toggle_style_tag.innerHTML = slide_toggle_style;
document.head.appendChild(slide_toggle_style_tag);

export {
  triggerToggle
};