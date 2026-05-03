function load_scenes() {
  scenes = [];

  // prologue bats
  
  scenes.push({
    name: "Prologue Caraboss",
    start: "0:18:05", // h:m:s
    end: "", // h:m:s
    length: undefined,
    index: 1,
    parts: [
      {
        type: "",
        name: "Entrance",
        index: 0,
        start: "0:18:5",
        end: "0:19:4",
      },
      {
        type: "",
        name: "Catalabute",
        index: 1,
        start: "0:19:4",
        end: "0:19:48",
      }
    ],
  });
  
  // Hunt act 1
  
  scenes.push({
    name: "Hunt Party",
    start: "0:54:15", // h:m:s
    end: "1:0:55", // h:m:s
    length: undefined,
    index: 4,
    parts: [
      {
        type: "scene",
        name: "Ensemble 1-a",
        index: 0,
        start: "0:54:15",
        end: "0:55:45",
      },
      {
        type: "scene",
        name: "Ensemble 1-b",
        index: 1,
        start: "0:55:47",
        end: "0:56:37",
      },
      {
        type: "variation",
        name: "Male Variation",
        index: 2,
        start: "0:56:44",
        end: "0:57:44",
      },
      {
        type: "scene",
        name: "Ensemble Coda?",
        index: 3,
        start: "0:57:47",
        end: "0:58:29",
      },
      {
        type: "scene",
        name: "Hunting",
        index: 4,
        start: "0:58:32",
        end: "0:59:43",
      },
      {
        type: "scene",
        name: "Pas?",
        index: 5,
        start: "0:59:40",
        end: "1:0:55",
      }
    ]
  });
  
  
  
}
