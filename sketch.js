let iframe;
let player;
var render_scale = 10;

function setup() {
  iframe = document.getElementById("vimeo-player");
  player = new Vimeo.Player(iframe);
  load_times();
  create_ui();
}

function draw() {}

function create_ui() {
  sel = createSelect("Select Entrance");
  sel.position(0, 400);

  inp = createInput();
  inp.value("0:45:2");

  ui_jump_time = createButton("Jump");
  ui_jump_time.position(0, 490);
  ui_jump_time.size();
  ui_jump_time.mousePressed(pressed_jump_time);

  ui_jump_scene = createButton("Jump to scene");
  ui_jump_scene.position(0, 420);
  ui_jump_scene.size();
  ui_jump_scene.mousePressed(pressed_jump_scene);

  for (let i = 0; i < times.length; i++) {
    sel.option(times[i].name, i);
  }
}

function pressed_jump_scene() {
  jump_to(to_seconds(times[sel.value()].time));
}

function pressed_jump_time() {
  jump_to(to_seconds(inp.value()));
}

function jump_to(time) {
  player.setCurrentTime(time);
}

function to_seconds(string) {
  let s2 = split(string, ":");
  s2 = float(s2);
  let time = 0;
  time += s2[0] * 3600;
  time += s2[1] * 60;
  time += s2[2] * 1;
  return time;
}
