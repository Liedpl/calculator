const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const mul = document.querySelector(".multipy");
const div = document.querySelector(".division");
const score = document.querySelector("#score");
const clear = document.querySelector(".clear");
const n1 = document.querySelector(".num1");
const n2 = document.querySelector(".num2");
const flag = document.querySelector(".flag");
const cache = document.querySelector(".cache");

let num1 = null;
let num2 = null;
let addFlag = false;
let subFlag = false;
let mulFlag = false;
let divFlag = false;

const addition = () => {
	if (score.value !== "" && num1 === null) {
		clearFlags();
		addFlag = true;
		rememberNumberOne();
	} else if (num1 !== null && addFlag === false) {
		clearFlags();
		addFlag = true;
	} else if (addFlag === true && num1 !== null && score.value !== "") {
		rememberNumberTwo();
	}
};

const substraction = () => {
	if (score.value !== "" && num1 === null) {
		clearFlags();
		subFlag = true;
		rememberNumberOne();
	} else if (num1 !== null && subFlag === false) {
		clearFlags();
		subFlag = true;
	} else if (subFlag === true && num1 !== null && score.value !== "") {
		rememberNumberTwo();
	}
};

const multipy = () => {
	if (score.value !== "" && num1 === null) {
		clearFlags();
		mulFlag = true;
		rememberNumberOne();
	} else if (num1 !== null && mulFlag === false) {
		clearFlags();
		mulFlag = true;
	} else if (mulFlag === true && num1 !== null && score.value !== "") {
		rememberNumberTwo();
	}
};

const division = () => {
	if (score.value !== "" && num1 === null) {
		clearFlags();
		divFlag = true;
		rememberNumberOne();
	} else if (num1 !== null && divFlag === false) {
		clearFlags();
		divFlag = true;
	} else if (mulFlag === true && num1 !== null && score.value !== "") {
		rememberNumberTwo();
	}
};

const mathScore = () => {
	if (addFlag === true) {
		num2 = parseInt(n2.innerHTML);
		score.value = num1 + num2;
	}

	if (subFlag === true) {
		num2 = parseInt(n2.innerHTML);
		score.value = num1 - num2;
	}

	if (mulFlag === true) {
		num2 = parseInt(n2.innerHTML);
		score.value = num1 * num2;
	}

	if (divFlag === true) {
		num2 = parseInt(n2.innerHTML);
		score.value = num1 / num2;
	}

	cache.textContent = "  Wyczyść pamięć, aby zrobić kolejne działanie";
	cache.style.color = "red";
};
const contentFlag = () => {
	if (addFlag === true) {
		flag.textContent = "+";
	}
	if (subFlag === true) {
		flag.textContent = "-";
	}
	if (divFlag === true) {
		flag.textContent = "/";
	}
	if (mulFlag === true) {
		flag.textContent = "*";
	}
};

// remember number functions

const rememberNumberOne = () => {
	num1 = parseInt(score.value);
	score.value = "";
	n1.innerHTML = `${num1}`;
};

const rememberNumberTwo = () => {
	num2 = parseInt(score.value);
	n2.innerHTML = `${num2}`;
	score.value = "";
};

// clear functions

const clearFlags = () => {
	addFlag = false;
	subFlag = false;
	mulFlag = false;
	divFlag = false;
	flag.textContent = "";
};
const clearCache = () => {
	clearFlags();
	score.value = "";
	num1 = null;
	num2 = null;
	n1.innerHTML = "";
	n2.innerHTML = "";
	cache.textContent = "";
	cache.style.color = "";
};

// mathematics listener

equals.addEventListener("click", mathScore);

plus.addEventListener("click", addition);
minus.addEventListener("click", substraction);
mul.addEventListener("click", multipy);
div.addEventListener("click", division);

//global listener

window.addEventListener("click", function () {
	if (num1 === null) {
		n1.innerHTML = score.value;
	}

	if (num1 !== null && num2 === null) {
		n2.innerHTML = score.value;
	}
});
window.addEventListener("click", contentFlag);

//buttons number

clear.addEventListener("click", clearCache);
one.addEventListener("click", function () {
	score.value += "1";
});
two.addEventListener("click", function () {
	score.value += "2";
});
three.addEventListener("click", function () {
	score.value += "3";
});
four.addEventListener("click", function () {
	score.value += "4";
});
five.addEventListener("click", function () {
	score.value += "5";
});
six.addEventListener("click", function () {
	score.value += "6";
});
seven.addEventListener("click", function () {
	score.value += "7";
});
eight.addEventListener("click", function () {
	score.value += "8";
});
nine.addEventListener("click", function () {
	score.value += "9";
});
zero.addEventListener("click", function () {
	score.value += "0";
});
