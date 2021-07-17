var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2e59c180-40b6-4d81-8cdc-d84dda419cde","69438258-2057-40d2-9633-c0339ad6368f","a1c51e0b-016d-4249-98db-7f0d83670595","494bb917-39d2-422d-88ff-85a808427acb","18e48dba-28d9-4d6f-8548-7421ba2517f1","ac9cd437-8599-4981-a053-6d9f177a1629","21af7c0b-b15d-4b5c-9226-5db31ce0a23d","9c690eb6-f5cf-4315-9c12-da140226dd1e"],"propsByKey":{"2e59c180-40b6-4d81-8cdc-d84dda419cde":{"name":"gameplay_purplediamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"69438258-2057-40d2-9633-c0339ad6368f":{"name":"gameplay_purplestar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR/category_video_games/gameplay_purplestar.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR/category_video_games/gameplay_purplestar.png"},"a1c51e0b-016d-4249-98db-7f0d83670595":{"name":"gameplay_redcrystal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"494bb917-39d2-422d-88ff-85a808427acb":{"name":"gameplay_bluestar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png","frameSize":{"x":398,"y":349},"frameCount":1,"looping":true,"frameDelay":2,"version":"sKktgxsqPeVkeft1BK_mk2Og5h1_D10R","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":349},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png"},"18e48dba-28d9-4d6f-8548-7421ba2517f1":{"name":"texture_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".OqUx8AL2A1AczqKW0GhLkq127WNAu8C","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png"},"ac9cd437-8599-4981-a053-6d9f177a1629":{"name":"cars_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":20,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"21af7c0b-b15d-4b5c-9226-5db31ce0a23d":{"name":"laser2","sourceUrl":null,"frameSize":{"x":100,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"pBfn9RS2DA6jH2nJ4VXWID8GUWl9iTDB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":16},"rootRelativePath":"assets/21af7c0b-b15d-4b5c-9226-5db31ce0a23d.png"},"9c690eb6-f5cf-4315-9c12-da140226dd1e":{"name":"laser1","sourceUrl":null,"frameSize":{"x":100,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"QGTzuxdTsgSbWW4AhTnhJOZcIHhb0kYd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":16},"rootRelativePath":"assets/9c690eb6-f5cf-4315-9c12-da140226dd1e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSpeech("hello i am, a thief, help me to get those gems and, take gems and give it to the green shop he is the gem collector!", "male", "English");
var thief = createSprite(200, 400);
var jewel1 = createSprite(40, 15);
var jewel2 = createSprite(110, 15);
var jewel3 = createSprite(250, 15);
var jewel4 = createSprite(350, 15);
var laser1 = createSprite(100, 200, 15, 15);
var laser2 = createSprite(300, 200, 15, 15);
var gemcollector = createSprite(0, 400, 100, 100);

thief.setAnimation("cars_1");
jewel1.setAnimation("gameplay_purplediamond_1");
jewel2.setAnimation("gameplay_purplestar_1");
jewel3.setAnimation("gameplay_redcrystal_1");
jewel4.setAnimation("gameplay_bluestar_1");
laser1.setAnimation("laser1");
laser2.setAnimation("laser2");

thief.scale = 0.5;
jewel1.scale = 0.1;
jewel2.scale = 0.1;
jewel3.scale = 0.1;
jewel4.scale = 0.1;
laser1.scale = 1.9;
laser2.scale = 1.9;

laser1.velocityY = -2.8;
laser2.velocityY = 2.8;

gemcollector.shapeColor = "green";











function draw() {
  background("yellow");
  drawSprites();
  if (keyDown("up")) {
  thief.velocityY = -4;
}
  if (keyWentUp("up")) {
    thief.velocityY = 0;
  }

if (keyDown("down")) {
  thief.velocityY = 4;
}
  if (keyWentUp("down")) {
    thief.velocityY = 0;
  }

if (keyDown("right")) {
  thief.velocityX = 4;
}
  if (keyWentUp("right")) {
    thief.velocityX = 0;
  }

if (keyDown("left")) {
  thief.velocityX = -4;
}
  if (keyWentUp("left")) {
    thief.velocityX = 0;
  }
  
  if (thief.collide(jewel1)) {
  jewel1.destroy();
  }
  if (thief.isTouching(jewel2)) {
    jewel2.destroy();
  }
  if (thief.isTouching(jewel3)) {
    jewel3.destroy();
  }
  if (thief.isTouching(jewel4)) {
    jewel4.destroy();
  }
  if (thief.isTouching(laser1) || thief.isTouching(laser2)) {
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    thief.velocityX = 0;
    thief.velocityY = 0;
    stroke("purple");
    textSize(16);
    text("Gameover! the thief is caught", 60, 320);
  }
  createEdgeSprites();
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  if (thief.isTouching(gemcollector)) {
    textSize(30);
    stroke("black");
    text("You Won!", 200, 200);
    thief.velocityX = 0;
    thief.velocityY = 0;
    laser1.velocityY = 0;
    laser2.velocityY = 0;
  }

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
