$(document).ready(function () {
  // input value
  const passwordInput = $("#password");
  //To add and remove icon
  const validator = (selector, remove, add) => {
    selector.removeClass(remove).addClass(add);
  };
  // To set attribute
  const attrSetter = (selector, attributeName, value) => {
    selector.attr(attributeName, value);
  };
  //To focuse input for the first time
  passwordInput.one("focus", () => {
    passwordInput.css("borderBottom", "3px solid #ff1e00");
  });

  passwordInput.on("input", function () {
    const val = passwordInput.val();
    let errorCount = 0;

    // if input value gte 8
    if (val.length >= 8) {
      validator($(".characters-val i"), "fa-xmark red", "fa-check green");
      attrSetter($(".characters-val"), "validation", true);
      errorCount++;
    } else {
      validator($(".characters-val i"), "fa-check green", "fa-xmark red");
      attrSetter($(".characters-val"), "validation", false);
    }

    // if input value include lowercase character
    if (/[a-z]/.test(val)) {
      validator($(".lower-val i"), "fa-xmark red", "fa-check green");
      attrSetter($(".lower-val"), "validation", true);
      errorCount++;
    } else {
      validator($(".lower-val i"), "fa-check green", "fa-xmark red");
      attrSetter($(".lower-val"), "validation", false);
    }

    // if input value include uppercase character
    if (/[A-Z]/.test(val)) {
      validator($(".upper-val i"), "fa-xmark red", "fa-check green");
      attrSetter($(".upper-val"), "validation", true);
      errorCount++;
    } else {
      validator($(".upper-val i"), "fa-check green", "fa-xmark red");
      attrSetter($(".upper-val"), "validation", false);
    }

    // if input value include number
    if (/[0-9]/.test(val)) {
      validator($(".number-val i"), "fa-xmark red", "fa-check green");
      attrSetter($(".number-val"), "validation", true);
      errorCount++;
    } else {
      validator($(".number-val i"), "fa-check green", "fa-xmark red");
      attrSetter($(".number-val"), "validation", false);
    }

    // To add range
    $(".validation-password li").each(function (index, value) {
      const validation = $(value).attr("validation");
      const slide = $(`.slide-${index}`);

      if (validation === "true") {
        slide.css("width", "120px");
      } else if (validation === "false") {
        slide.css("width", "0");
      }
    });
    // To check input border color
    if (errorCount === 4) {
      passwordInput.css("borderBottom", "3px solid #00ff0d");
    } else {
      passwordInput.css("borderBottom", "3px solid #ff1e00");
    }
  });
  //To input type
  $(".password-view").on("click", function () {
    const inputType = passwordInput.attr("type");
    const inputIcon = $(".password-view i").attr("class");
    const newType = inputType === "password" ? "text" : "password";
    const newIcon = inputIcon.includes("fa-eye-slash")
      ? inputIcon.replace("fa-eye-slash", "fa-eye")
      : inputIcon.replace("fa-eye", "fa-eye-slash");

    passwordInput.attr("type", newType);
    $(".password-view i").attr("class", newIcon);
  });
});
