gdjs.GameplayCode = {};
gdjs.GameplayCode.stopDoWhile2 = false;

gdjs.GameplayCode.GDPlayerObjects1= [];
gdjs.GameplayCode.GDPlayerObjects2= [];
gdjs.GameplayCode.GDPlayerObjects3= [];
gdjs.GameplayCode.GDPlatformObjects1= [];
gdjs.GameplayCode.GDPlatformObjects2= [];
gdjs.GameplayCode.GDPlatformObjects3= [];
gdjs.GameplayCode.GDScoreObjects1= [];
gdjs.GameplayCode.GDScoreObjects2= [];
gdjs.GameplayCode.GDScoreObjects3= [];
gdjs.GameplayCode.GDPlatformEndObjects1= [];
gdjs.GameplayCode.GDPlatformEndObjects2= [];
gdjs.GameplayCode.GDPlatformEndObjects3= [];
gdjs.GameplayCode.GDMarkerObjects1= [];
gdjs.GameplayCode.GDMarkerObjects2= [];
gdjs.GameplayCode.GDMarkerObjects3= [];

gdjs.GameplayCode.conditionTrue_0 = {val:false};
gdjs.GameplayCode.condition0IsTrue_0 = {val:false};
gdjs.GameplayCode.condition1IsTrue_0 = {val:false};
gdjs.GameplayCode.condition2IsTrue_0 = {val:false};


gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameplayCode.GDPlatformObjects1});gdjs.GameplayCode.eventsList0x799e84 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("streak_bonus")) >= 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("streak_bonus")) * 2);
}{runtimeScene.getVariables().get("streak_bonus").setNumber(-(1));
}}

}


}; //End of gdjs.GameplayCode.eventsList0x799e84
gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameplayCode.GDPlatformObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameplayCode.GDPlatformObjects2});gdjs.GameplayCode.eventsList0x72118c = function(runtimeScene) {

}; //End of gdjs.GameplayCode.eventsList0x72118c
gdjs.GameplayCode.eventsList0x72106c = function(runtimeScene) {

{


gdjs.GameplayCode.stopDoWhile2 = false;
do {gdjs.GameplayCode.GDPlatformObjects2.length = 0;

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < Math.min(15 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 1), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getGame().getVariables().get("platform_randomX").setNumber(50 + gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects2Objects, -(800) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("platform_randomX")) - 40, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].returnVariable(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("isLeft")).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].returnVariable(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("Active")).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].setZOrder(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("platform_randomX")) + 40, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].returnVariable(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("Active")).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].returnVariable(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("isRight")).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].setZOrder(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(200);
}
{ //Subevents: 
gdjs.GameplayCode.eventsList0x72118c(runtimeScene);} //Subevents end.
}
} else gdjs.GameplayCode.stopDoWhile2 = true; 
} while ( !gdjs.GameplayCode.stopDoWhile2 );

}


}; //End of gdjs.GameplayCode.eventsList0x72106c
gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformEndObjects1Objects = Hashtable.newFrom({"PlatformEnd": gdjs.GameplayCode.GDPlatformEndObjects1});gdjs.GameplayCode.eventsList0x722214 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= Math.min(15 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 1), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDPlatformEndObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformEndObjects1Objects, 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformEndObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformEndObjects1[i].setZOrder(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


}; //End of gdjs.GameplayCode.eventsList0x722214
gdjs.GameplayCode.eventsList0x7aa16c = function(runtimeScene) {

{

/* Reuse gdjs.GameplayCode.GDPlatformObjects1 */

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameplayCode.GDPlatformObjects1[i].getVariables().get("isLeft")) == 1 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects1[k] = gdjs.GameplayCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("streak_bonus").add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


}; //End of gdjs.GameplayCode.eventsList0x7aa16c
gdjs.GameplayCode.eventsList0x7a8eac = function(runtimeScene) {

{

gdjs.GameplayCode.GDPlatformObjects2.createFrom(gdjs.GameplayCode.GDPlatformObjects1);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("isLeft")) == 1 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects2[k] = gdjs.GameplayCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects2.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlatformObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].setX(gdjs.GameplayCode.GDPlatformObjects2[i].getX() - (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.GameplayCode.GDPlatformObjects2.createFrom(gdjs.GameplayCode.GDPlatformObjects1);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameplayCode.GDPlatformObjects2[i].getVariables().get("isLeft")) != 1 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects2[k] = gdjs.GameplayCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects2.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlatformObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].setX(gdjs.GameplayCode.GDPlatformObjects2[i].getX() + (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

/* Reuse gdjs.GameplayCode.GDPlatformObjects1 */

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects1[i].getOpacity() <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects1[k] = gdjs.GameplayCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.GameplayCode.eventsList0x7a8eac
gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.GameplayCode.GDMarkerObjects1});gdjs.GameplayCode.eventsList0x747ebc = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("touchStartX"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDMarkerObjects2.createFrom(gdjs.GameplayCode.GDMarkerObjects1);

gdjs.GameplayCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].setX(gdjs.GameplayCode.GDPlayerObjects2[i].getX() + (((( gdjs.GameplayCode.GDMarkerObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDMarkerObjects2[0].getPointX("")) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("touchStartX"))) / 50));
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("touchStartX"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.GameplayCode.eventsList0x747ebc
gdjs.GameplayCode.eventsList0x72ff64 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList0x747ebc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.GameplayCode.eventsList0x72ff64
gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformEndObjects1Objects = Hashtable.newFrom({"PlatformEnd": gdjs.GameplayCode.GDPlatformEndObjects1});gdjs.GameplayCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getVariables().get("streak_bonus").setNumber(-(1));
}}

}


{



}


{

gdjs.GameplayCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformObjects1Objects, false, runtimeScene, true);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList0x799e84(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointY("")) - 80;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointY("")) - 80, "", 0);
}}

}


{



}


{



}


{


{
gdjs.GameplayCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameplayCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))));
}
}}

}


{



}


{



}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList0x72106c(runtimeScene);} //End of subevents
}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList0x722214(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.GameplayCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects1[i].getY() < (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointY("")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects1[k] = gdjs.GameplayCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameplayCode.GDPlatformObjects1[i].getVariables().get("Active")) == 1 ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects1[k] = gdjs.GameplayCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects1[i].getBehavior("Platform").changePlatformType("Ladder");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects1[i].returnVariable(gdjs.GameplayCode.GDPlatformObjects1[i].getVariables().get("Active")).setNumber(0);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList0x7aa16c(runtimeScene);} //End of subevents
}

}


{

gdjs.GameplayCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlatformObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameplayCode.GDPlatformObjects1[i].getVariables().get("Active")) == 1) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlatformObjects1[k] = gdjs.GameplayCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlatformObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects1[i].setOpacity(gdjs.GameplayCode.GDPlatformObjects1[i].getOpacity() - (500 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.GameplayCode.eventsList0x7a8eac(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setX(Math.max(Math.min((gdjs.GameplayCode.GDPlayerObjects1[i].getPointX("")), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GameplayCode.GDPlayerObjects1[i].getWidth())), 0));
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDMarkerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDMarkerObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMarkerObjects1[i].returnVariable(gdjs.GameplayCode.GDMarkerObjects1[i].getVariables().get("TouchId")).setNumber(gdjs.evtTools.input.getLastTouchId(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMarkerObjects1[i].setPosition(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameplayCode.GDMarkerObjects1[i].getVariables().get("TouchId"))), "", 0),gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameplayCode.GDMarkerObjects1[i].getVariables().get("TouchId"))), "", 0));
}
}{runtimeScene.getVariables().get("touchStartX").setNumber((( gdjs.GameplayCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDMarkerObjects1[0].getPointX("")));
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDMarkerObjects1.createFrom(runtimeScene.getObjects("Marker"));
{for(var i = 0, len = gdjs.GameplayCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMarkerObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("touchStartX").setNumber(-(1));
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("touchStartX")) != -(1);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDMarkerObjects1.createFrom(runtimeScene.getObjects("Marker"));
{for(var i = 0, len = gdjs.GameplayCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMarkerObjects1[i].setPosition(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameplayCode.GDMarkerObjects1[i].getVariables().get("TouchId"))), "", 0),gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameplayCode.GDMarkerObjects1[i].getVariables().get("TouchId"))), "", 0));
}
}
{ //Subevents
gdjs.GameplayCode.eventsList0x72ff64(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.GameplayCode.GDPlatformEndObjects1.createFrom(runtimeScene.getObjects("PlatformEnd"));
gdjs.GameplayCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlatformEndObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(Math.max(15 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 1), 50));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


}; //End of gdjs.GameplayCode.eventsList0xb4be0


gdjs.GameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameplayCode.GDPlayerObjects1.length = 0;
gdjs.GameplayCode.GDPlayerObjects2.length = 0;
gdjs.GameplayCode.GDPlayerObjects3.length = 0;
gdjs.GameplayCode.GDPlatformObjects1.length = 0;
gdjs.GameplayCode.GDPlatformObjects2.length = 0;
gdjs.GameplayCode.GDPlatformObjects3.length = 0;
gdjs.GameplayCode.GDScoreObjects1.length = 0;
gdjs.GameplayCode.GDScoreObjects2.length = 0;
gdjs.GameplayCode.GDScoreObjects3.length = 0;
gdjs.GameplayCode.GDPlatformEndObjects1.length = 0;
gdjs.GameplayCode.GDPlatformEndObjects2.length = 0;
gdjs.GameplayCode.GDPlatformEndObjects3.length = 0;
gdjs.GameplayCode.GDMarkerObjects1.length = 0;
gdjs.GameplayCode.GDMarkerObjects2.length = 0;
gdjs.GameplayCode.GDMarkerObjects3.length = 0;

gdjs.GameplayCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['GameplayCode'] = gdjs.GameplayCode;
