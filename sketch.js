let iframe;
let player;
let toolbar = {
  width: 50,
  height: 200,
  visible: false,
  posX: 0,
  posY: 25,
};
var render_scale = 10;
let video_width;
let video_height;
const video_ratio = 1.777;

function setup() {
  iframe = document.getElementById("vimeo-player");
  player = new Vimeo.Player(iframe);
  load_times();
  create_ui();
  // scale_elements();
}

function draw() {}

function create_ui() {
  ui_drop_down = createButton("Tools");
  ui_drop_down.position(0, 0);
  ui_drop_down.size();
  ui_drop_down.mousePressed(pressed_drop_down);

  sel = createSelect("Select Entrance");
  sel.position(0, 400);

  inp = createInput();
  inp.value("0:45:2");

  ui_jump_time = createButton("Jump");
  ui_jump_time.position(0, 490);
  ui_jump_time.size();
  ui_jump_time.mousePressed(pressed_jump_time);

  ui_jump_scene = createButton("Jump");
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

function pressed_drop_down() {
  if (!toolbar.visible) {
    show_toolbar();
  } else if (toolbar.visible) {
    hide_toolbar();
  }
}

function show_toolbar() {
  ui_jump_scene.position(toolbar.posX, toolbar.posY);
  ui_jump_scene.size(50, 20);

  sel.position(toolbar.posX + 55, toolbar.posY);
  inp.position(toolbar.posX + 55, toolbar.posY + 25);

  ui_jump_time.position(toolbar.posX, toolbar.posY + 25);
  ui_jump_time.size(50, 20);
  toolbar.visible = true;
}

function hide_toolbar() {
  ui_jump_scene.position(10000, 10000);
  ui_jump_scene.size(0, 0);

  sel.position(10000, 10000);
  inp.position(10000, 10000);

  ui_jump_time.position(10000, 10000);
  ui_jump_time.size(0, 0);
  toolbar.visible = false;
}

function scale_elements() {
  video_width = displayWidth; // video width
  video_height = video_width / video_ratio;

  iframe.style.width = video_width + "px";
  iframe.style.height = video_height + "px";

  sel.position(20, video_height + 10);

  ui_jump_scene.position(sel.size().width + 20, video_height + 10);
  inp.position(20, video_height + 40);
  ui_jump_time.position(sel.size().width + 20, video_height + 40);
  inp.size(sel.size().width - 7, 20);
}
