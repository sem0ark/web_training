const main = document.getElementsByClassName("random-cubes");

let ID = 0;
function new_cube(cube) {
  ID++;

  let container = document.createElement("div");
  container.classList.add("rc", "rc-container");

  let span_1 = document.createElement("span");
  span_1.innerText = "Выберите количество кубиков: ";
  span_1.classList.add("rc", "rc-label");

  let span_2 = document.createElement("span");
  span_2.innerText = "Выберите количество граней: ";
  span_2.classList.add("rc", "rc-label");

  let sel_cubes = document.createElement("select");
  sel_cubes.classList.add("rc", "rc-select");

  let sel_edges = document.createElement("select");
  sel_edges.classList.add("rc", "rc-select");

  let roll = document.createElement("button");
  roll.type = "button";
  roll.innerText = "Бросить";
  roll.id = `button_cubes_${ID}`;
  roll.classList.add("rc", "rc-button", "rc-roll");

  let options_container = document.createElement("div");
  options_container.classList.add("rc", "rc-container-inner");
  options_container.id = `options_container_${ID}`;

  let options_button = document.createElement("button");
  options_button.classList.add("rc", "rc-button", "rc-edges-optinon");
  options_button.id = `button_option_${ID}`;
  options_button.innerText = "Настройки граней";

  options_container.append(options_button);
  for (let i = 1; i <= 9; i++) {
    let edge_a = document.createElement("a");
    edge_a.classList.add("rc", "rc-check", "rc-edge");
    edge_a.innerText = i.toString();
    edge_a.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
    });
    options_container.append(edge_a);
  }

  options_button.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    let t_id = parseInt(e.target.id.split("button_option_")[1]);
    for (a of document
      .getElementById(`options_container_${t_id}`)
      .getElementsByClassName("rc-edge")) {
      a.classList.toggle("shown");
    }

    if (e.target.classList.contains("active")) {
      document.getElementById(`edge_n_${t_id}`).disabled = true;
      e.target.innerText = "Отмена";
    } else {
      e.target.innerText = "Настройки граней";
      document.getElementById(`edge_n_${t_id}`).disabled = false;
    }
  });

  let cube_img = document.createElement("div");
  cube_img.classList.add("rc", "rc-img-container");
  cube_img.id = `cube_img_${ID}`;

  for (let i = 1; i <= 9; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerText = `${i}`;
    sel_edges.append(opt);
  }

  for (let i = 1; i <= 6; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerText = `${i}`;
    sel_cubes.append(opt);
  }

  sel_cubes.id = `cube_n_${ID}`;
  sel_edges.id = `edge_n_${ID}`;

  roll.addEventListener("click", (e) => {
    const t_id = parseInt(e.target.id.split("button_cubes_")[1]);
    const div = document.getElementById(`cube_img_${t_id}`);
    const cubes = parseInt(document.getElementById(`cube_n_${t_id}`).value);

    div.innerHTML = "";

    if (
      document
        .getElementById(`button_option_${t_id}`)
        .classList.contains("active")
    ) {
      let variants = new Array();
      for (item of document
        .getElementById(`options_container_${t_id}`)
        .getElementsByClassName("rc-edge active")) {
        variants.push(parseInt(item.innerText));
      }
      if (variants.length) {
        for (let i = 0; i < cubes; i++) {
          let img = document.createElement("img");
          let index = variants[Math.floor(Math.random() * variants.length)];
          img.src = `cube_${index}.png`;
          img.classList.add("rc", "rc-cube-img");
          div.append(img);
        }
      } else {
        div.innerText = "Пожалуйста, выберите хотя бы одну грань.";
      }
    } else {
      const edges = parseInt(document.getElementById(`edge_n_${t_id}`).value);
      for (let i = 0; i < cubes; i++) {
        let img = document.createElement("img");
        img.src = `cube_${Math.ceil(Math.random() * edges)}.png`;
        img.classList.add("rc", "rc-cube-img");
        div.append(img);
      }
    }
  });

  container.append(span_1, sel_cubes, document.createElement("br"));
  container.append(span_2, sel_edges, document.createElement("br"));
  container.append(options_container, document.createElement("br"));
  container.append(roll, document.createElement("br"));
  container.append(cube_img);
  cube.append(container);
}

for (i of main) {
  new_cube(i);
}
