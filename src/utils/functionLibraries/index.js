/**
 * Truncate
 * returns the truncated text with "..." or any specified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;

/**
 * Options
 * returns an alphabet option according to the given index
 * @param {index} number
 * */

const options = (index) => {
  let optionsArray = ["A", "B", "C", "D", "E"];
  // options.map(=> {
  return optionsArray[index];
  // });
};

/**
 * Capitalize
 * returns a capitalized sentence
 * @param {String} sentence
 * */
const capitalizeWords = (sentence) => {
  if (!sentence) throw Error("Invalid args received.");

  if (sentence.length === 1) return sentence.toUpperCase();

  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * percentage generator
 * returns percentage of any given value
 *  @param {Number}
 * this function takes two numbers, the expected score and the actual score
 * */
const generatePercentage = (expectedScore, actualScore) => {
  return ((actualScore / expectedScore) * (100 / 1)).toFixed();
};

/**
 * Generate id
 * returns randomly generated id
 *@param {}
 * */
const generateID = (length) => {
  if (length < 8 || length > 20) {
    alert("length must be a whole number and between 8 and 20");
    return;
  }
  const generated = Array.from({ length }, () => {
    const characters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
    ];

    return characters[Math.floor(Math.random() * characters.length)];
  });

  return generated.join("");
};

/***
 *
 * validate password
 * returns validated password
 *@param {input string}
 * ****/
const validatePwd = (rule, value) => {
  return new Promise(async (resolve, reject) => {
    if (!value) {
      await reject("Password must be entered");
    } else if (value.length < 6) {
      await reject("Password length cannot be less than 6 digits");
    } else if (value.length > 12) {
      await reject("Password length cannot be greater than 12 digits");
    } else if (
      !/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/.test(
        value
      )
    ) {
      await reject(
        "Password  must contain a special character, a small letter and a capital letter"
      );
    } else {
      await resolve();
    }
  });
};

/***
 *
 * validate email
 *returns validated email
 *@param {input string}
 * ****/
const validateEmail = (rule, value) => {
  return new Promise(async (resolve, reject) => {
    if (!value) {
      await reject("Email must be entered");
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      await reject("This is not a valid email");
    } else {
      await resolve();
    }
  });
};

/***
 *
 * validate phone
 *returns validated phone number
 *@param {input with number type}
 * ****/
const validatePhone = (rule, value) => {
  return new Promise(async (resolve, reject) => {
    if (!value) {
      await reject("Phone Number must be entered");
    } else if (
      !/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    ) {
      await reject("This is not a valid phone number");
    } else {
      await resolve();
    }
  });
};

/***
 *
 * validate name
 * * returns validated password
 *@param {input string}
 * ****/
const validateName = (rule, value) => {
  return new Promise(async (resolve, reject) => {
    if (!value) {
      await reject("Name must be entered");
    } else {
      await resolve();
    }
  });
};

/***
 *
 * validate form on submit
 *returns validated password and email on form submit
 *@param {input values}
 * ****/
const formValidation = (values) => {
  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  let mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );
  //valid email check
  if (!emailCheck.test(String(values.email).toLowerCase())) {
    values = {
      ...values,
      emailError: `${values.email}is not a valid email`,
    };
  }
  if (mediumPassword.test(values.password)) {
    values = {
      ...values,
      passwordReturn: "MEDIUM",
    };
  } else if (strongPassword.test(values.password)) {
    values = {
      ...values,
      passwordReturn: "STRONG",
    };
  } else {
    values = {
      ...values,
      passwordReturn: "WEAK",
    };
  }

  return values;
};

/*seconds to mins and hours converter*/

const formatSecondsTime = (value) => {
  const sec = parseInt(value, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10 && minutes > 0) {
    seconds = "0" + seconds;
  }
  if (hours == 0 && minutes > 0) {
    return minutes + ":" + seconds + "mins"; // Return in MM:SS format
  } else if (hours == 0 && minutes == 0) {
    return seconds + "secs"; // Return in MM:SS format
  } else {
    return hours + ":" + minutes + ":" + seconds + " hrs"; // Return in HH:MM:SS format
  }
};

const formatTimeObject = (value) => {
  const sec = parseInt(value.seconds);
  let hours = parseInt(value.hours * 60 * 60);
  let minutes = parseInt(value.minutes * 60);
  let seconds = sec + hours + minutes;
  return seconds;
};

const formatCbtTime = (value) => {
  const sec = parseInt(value, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10 && minutes == 0 && hours == 0) {
    let secs = {
      hours: "00",
      minutes: "00",
      seconds: seconds,
    };
    return secs;
  }
  if (hours == 0 && minutes > 0) {
    let mins = {
      hours: "00",
      minutes: minutes,
      seconds: seconds,
    };
    return mins; // Return in MM:SS format
  } else {
    let hrs = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    return hrs; // Return in HH:MM:SS format
  }
};

const formatMoney = (amount) => {
  if (!amount) return;

  return parseInt(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const languageConvert = (lang) => {
  let languageConverted;

  if (lang === "/auto/fr") {
    languageConverted = "French";
  }
  if (lang === "/auto/en") {
    languageConverted = "English";
  }
  if (lang === "/auto/yr") {
    languageConverted = "Yoruba";
  }
  if (lang === "/auto/ig") {
    languageConverted = "Igbo";
  }
  if (lang === "/auto/ha") {
    languageConverted = "Hausa";
  }

  return languageConverted;
};

const validateLevel = (rule, value) => {
  return new Promise(async (resolve, reject) => {
    if (!value) {
      reject("Level must be entered");
    } else {
      resolve();
    }
  });
};
export {
  capitalizeWords,
  truncate,
  generateID,
  generatePercentage,
  formValidation,
  validatePwd,
  validateEmail,
  validatePhone,
  validateName,
  validateLevel,
  options,
  formatSecondsTime,
  formatMoney,
  formatCbtTime,
  formatTimeObject,
  languageConvert,
};
