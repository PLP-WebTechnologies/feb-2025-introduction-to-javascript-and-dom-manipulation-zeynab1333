function changeText() {
    const paragraph = document.getElementById("text");
    paragraph.textContent = "You clicked the button! 🎉";
  }
  
  
  function changeStyle() {
    const paragraph = document.getElementById("text");
    paragraph.style.color = "crimson";
    paragraph.style.fontWeight = "bold";
    paragraph.style.fontSize = "24px";
    }
  
  
  function addBox() {
    const container = document.getElementById("box-container");
    if (!document.getElementById("new-box")) {
      const box = document.createElement("div");
      box.id = "new-box";
      box.textContent = "I'm a new box added!";
      box.style.padding = "15px";
      box.style.marginTop = "10px";
      box.style.backgroundColor = "#f0f0f0";
      box.style.border = "1px solid #aaa";
      container.appendChild(box);
    }
  }
  
  
  function removeBox() {
    const box = document.getElementById("new-box");
    if (box) {
      box.remove();
    }
  }
  
