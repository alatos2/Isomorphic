const str1 = document.getElementById("string1");
const str2 = document.getElementById("string2");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

const isIsomorphic = () => {
  if (str1.value === "" || str2.value === "") {
    result.innerText = "Textbox(es) must not be left blank";
    result.setAttribute("class", "error");
  } else if (str1.value.length !== str2.value.length) {
    result.innerText = "Textbox(es) must have equal string length";
    result.setAttribute("class", "error");
  } else {
    const strArr1 = [];
    const strArr2 = [];

    for (let i = 0; i < str1.value.length; i++) {
      const strCharArr1 = str1.value[i];
      const strCharArr2 = str2.value[i];

      if (strArr1[strCharArr1] !== strArr2[strCharArr2]) {
        result.setAttribute("class", "error");
        result.innerText = "Strings are not Isomorphic";
        return false;
      } else {
        strArr1[strCharArr1] = i;
        strArr2[strCharArr2] = i;
      }
    }

    result.innerText = "Strings are Isomorphic";
    result.setAttribute("class", "success");
    return true;
  }
};

const check = e => {
  if (e.keyCode > 47 && e.keyCode < 58) {
    result.setAttribute("class", "error");
    result.innerText = "Numbers are not allowed";
    e.preventDefault();
  } else {
    result.setAttribute("class", "disappear");
    result.innerText = "";
  }
};

btn.addEventListener("click", isIsomorphic);
