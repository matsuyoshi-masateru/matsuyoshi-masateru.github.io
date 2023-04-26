'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const secondQuestion = document.getElementById("secondCheck");
const thirdQuestion = document.getElementById("thirdCheck");
const img = document.getElementById("imagePrius");

function firstCheck(firstCheckAnser) {
    let ans = "";
    if (firstCheckAnser === "Yes") {
        ans = "クルマを自分好みにカスタムしたい";
    } else {
        ans = "使い勝手の良い車がいい"
    }
    return secondQuestion.textContent = ans;
}

// test(firstCheck("Yes"),"クルマを自分好みにカスタムしたい");
// test(firstCheck("No"),"使い勝手の良い車がいい");

function secondCheck(secondCheckAnser) {
    let ans = "";
    if (secondCheckAnser === "Yes" && secondQuestion.textContent === "クルマを自分好みにカスタムしたい") {
        ans = "流行に敏感である";
    } else if (secondCheckAnser === "Yes" && secondQuestion.textContent === "使い勝手の良い車がいい") {
        ans = "ショッピングが好きだ"
    } else if (secondCheckAnser === "No" && secondQuestion.textContent === "クルマを自分好みにカスタムしたい") {
        ans = "街乗りに便利な車がいい";
    }else {
        ans = "車は少しくらいクセがある方が面白い";
    }
    return thirdQuestion.textContent = ans;
}

// secondQuestion.textContent = "クルマを自分好みにカスタムしたい";
// test(secondCheck("Yes"),"流行に敏感である");
// test(secondCheck("No"),"街乗りに便利な車がいい");
// secondQuestion.textContent = "使い勝手の良い車がいい";
// test(secondCheck("Yes"),"ショッピングが好きだ");
// test(secondCheck("No"),"車は少しくらいクセがある方が面白い");

function imageDisplay() {
    let randomImage = Math.floor(Math.random() * 3);
    console.log(randomImage);
    switch ("randomImage:", randomImage) {
        case 0:
            img.src="prius.JPG";
            break;
        case 1:
            img.src="prius_red.jpg";
            break;
        case 2:
            img.src="prius_yellow.jpg";
            break;    
    }
}

function imageHidden() {
    img.src="";
    secondQuestion.textContent = "【設問２】";
    thirdQuestion.textContent = "【設問３】";
    console.log("secondQuestion.textContent:", secondQuestion.textContent);
    console.log("thirdQuestion.textContent:", thirdQuestion.textContent);
}

const image = document.getElementById("answerImage");
const answer = document.getElementById("answer");
const element = document.getElementsByClassName("gameTagaminStart")[0];

function gameTagamin(num) {
    const array = [];
    let result = "";
    image.style.display = "none";
    answer.value = "";
    for (let i = 0;i < num; i++) {
        array.push(Math.floor(Math.random() * 5));
    }
    for (const val of array) {
        switch (val) {
            case 0:
                result += "😊";
                break;
            case 1:
                result += "😃";
                break;
            case 2:
                result += "👽";
                break;
            case 3:
                result += "👾";
                break;
            case 4:
                result += "🤖";
                break;
            case 5:
                result += "😎";
                break;
        }
    }
    console.log("game-start element.innerHTML:", result);
    return element.innerHTML = result;
}

function answerCheck() {
    let num = 0;
    const ansArray = element.innerHTML.split("");
    for (const val of ansArray) {
        if (val === "\uDC7D") {
            num += 1;
        }
    }
    if (Number(answer.value) === num) {
        image.style.display = "";
        image.src = "seikai.png";
    } else {
        image.style.display = "";
        image.src = "huseikai.png";
    }
    console.log("タガミンの数:", num);
    console.log("入力された数:", Number(answer.value));
}

function resetTagamin() {
    element.innerHTML = "";
    console.log("reset element.innerHTML:", element.innerHTML);
    return retry();
}

function retry() {
    image.style.display = "none";
    answer.value = "";
}
