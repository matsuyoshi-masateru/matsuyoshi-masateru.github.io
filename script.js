'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function secondCheck(secondCheckAnser) {
    let ans = "";
    let nextQuestion = document.getElementById("secondCheck");
    if (secondCheckAnser === "Yes") {
        ans = "クルマを自分好みにカスタムしたい";
        console.log(ans);
    } else {
        ans = "使い勝手の良い車がいい"
    }
    return nextQuestion.textContent = ans;
}

function thirdCheck(thirdCheckAnser) {
    let ans = "";
    let firstAnser = document.getElementById("secondCheck").textContent;
    let nextQuestion = document.getElementById("thirdCheck");
    console.log("firstAnser:",firstAnser);
    console.log("nextQuestion", nextQuestion);
    if (thirdCheckAnser === "Yes" && firstAnser === "クルマを自分好みにカスタムしたい") {
        ans = "流行に敏感である";
    } else if (thirdCheckAnser === "Yes" && firstAnser === "使い勝手の良い車がいい") {
        ans = "ショッピングが好きだ"
    } else if (thirdCheckAnser === "No" && firstAnser === "クルマを自分好みにカスタムしたい") {
        ans = "街乗りに便利な車がいい";
    }else {
        ans = "車は少しくらいクセがある方が面白い";
    }
    return nextQuestion.textContent = ans;
}

function imageDisplay() {
    let img = document.getElementById("imagePrius");
    img.src="prius.JPG";
}

function imageHidden() {
    let img = document.getElementById("imagePrius");
    const secondCheck = document.getElementById("secondCheck");
    const thirdCheck = document.getElementById("thirdCheck");
    img.src="";
    secondCheck.textContent = "【設問２】";
    thirdCheck.textContent = "【設問３】";
}
