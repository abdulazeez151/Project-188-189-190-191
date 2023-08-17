AFRAME.registerComponent("enemies", {
    schema: {
      height: { type: "number", default: 75 },
      width: { type: "number", default: 75 },
      depth: { type: "number", default: 75 },
    },
    init: function () {
  
      //x position array
      px = [23.86, -18.35, -13.81, 1.44, -31.18,
        -26.89, 16.61, 30.68, 12.95, -16.40,
        -15.09, 35.76, 3.29, 22.77, 2.57,
        35.72, 13.04, -11.90, 7.48, 16.66];
  
      //z position array
      pz = [54.56, -4.71, 14.91, 56.74, 41.13,
        50.76, 57.84, 7.02, -5.24, -26.82,
        27.59, -35.78, 34.52, 31.32, -9.22,
        26.72, 48.90, 27.24, 9.94, 54.29 ];
  
      for (var i = 0; i < 20; i++) {
        var enemy = document.createElement("a-entity");
  
        posX = px[i];
        posY = 1;
        posZ = pz[i];
  
        position = { x: posX, y: posY, z: posZ };
  
        enemy.setAttribute("id", "enemy" + i);      
        enemy.setAttribute("position", position);
  
        enemy.setAttribute("geometry", {
          primitive: "box",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        enemy.setAttribute("material", {
          src: "./models/enemy/zombie.gltf",
          repeat: "1 1 1",
        });
  
        enemy.setAttribute("dynamic-body", {});
  
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(box);
      }
    },
  });