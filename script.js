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
    let randomImage = Math.floor(Math.random() * 3);
    console.log(randomImage);
    switch (randomImage) {
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
    let img = document.getElementById("imagePrius");
    const secondCheck = document.getElementById("secondCheck");
    const thirdCheck = document.getElementById("thirdCheck");
    img.src="";
    secondCheck.textContent = "【設問２】";
    thirdCheck.textContent = "【設問３】";
}

let num = 0;

function gameTagamin(num) {
    const array = [];
    let result = "";
    document.getElementById("answerImage").style.display = "none";
    document.getElementById("answer").value = "";
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
        };
    };
    let element = document.getElementsByClassName("gameTagaminStart")[0];
    return element.innerHTML = result;
}

function answer() {
    const ans = document.getElementsByClassName("gameTagaminStart")[0].innerHTML
    console.log(ans);
    const answerText = document.getElementById("answer").value
    console.log(answerText);
    const image = document.getElementById("answerImage");
    let num = 0;
    const ansArray = ans.split("");
    console.log(ansArray);
    for (const val of ansArray) {
        console.log(ansArray[val]);
        if (val === "\uDC7D") {
            num += 1;
        }
    }
    if (Number(answerText) === num) {
        image.style.display = "";
        image.src = "seikai.png";
    } else {
        image.style.display = "";
        image.src = "huseikai.png";
    }
}
