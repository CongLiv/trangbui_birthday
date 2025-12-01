document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "Đi mò",
    "Năn nỉ áh",
    "Tui đã khóc",
    "Đau ở đây nè :(",
    "HUHUHUHU",
    "Please Say Yes",
    "Bùn ơi bùn",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    if (counter >= 3) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "Bạn đã là người yêu của mình rồi đấy. Mình yêu bạn lắm. ❤️😘";

        // Hiển thị popup đáng yêu
        const successPopup = document.getElementById("successPopup");
        successPopup.classList.add("show");

        // Sau 3 giây, chuyển hướng đến trang sinh nhật
        setTimeout(() => {
            window.location.href = "Birthday/index.html";
        }, 6000);

    } else {
        alert("Mình biết bạn chưa yêu mình lắm đâu. Hãy ấn nút Không vài lần ik 😉😘");
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
