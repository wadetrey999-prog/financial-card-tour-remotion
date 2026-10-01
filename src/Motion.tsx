import React from 'react';
import {Easing, interpolate} from 'remotion';

// 每行依次为：秒、中心X、中心Y、缩放、旋转Z、透视Y、透视X、模糊。
export type Pose = [number,number,number,number,number,number,number,number];
export const poseAt = (t:number, keys:Pose[]) => {
  const times=keys.map(p=>p[0]);
  const value=(index:number)=>interpolate(t,times,keys.map(p=>p[index]),{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.4,0,.2,1)});
  return {x:value(1),y:value(2),scale:value(3),rz:value(4),ry:value(5),rx:value(6),blur:value(7)};
};
export const MovingCard:React.FC<{time:number,keys:Pose[],width:number,height:number,children:React.ReactNode}> = ({time,keys,width,height,children}) => {
  const p=poseAt(time,keys);
  return <div style={{position:'absolute',left:p.x-width/2,top:p.y-height/2,width,height,transform:`perspective(1600px) rotateX(${p.rx}deg) rotateY(${p.ry}deg) rotateZ(${p.rz}deg) scale(${p.scale})`,filter:`blur(${p.blur}px)`,willChange:'transform',zIndex:Math.round(p.scale*100)}}>{children}</div>;
};

export const paths:Record<string,Pose[]> = {
  income: [
    [0,495,275,.5,3,-12,3,0],[.55,420,445,.75,-6,13,-3,.2],[1,365,545,1,-7,12,-4,0],
    [1.7,360,505,1.16,-2,-4,2,0],[2,350,460,1.3,0,-5,0,1],[2.4,-660,350,1.36,-9,24,0,3],
    [4.35,-600,230,.68,-4,12,0,0],[4.95,476,355,.5,-1,-6,2,0],[6,473,342,.48,-2,-5,2,0]],
  invoice: [
    [0,490,875,.43,-5,22,-1,0],[1,455,1480,.7,-6,12,0,0],[2.1,670,1380,1.15,7,-15,2,1],
    [2.55,325,658,1.08,2,-8,0,.5],[3,315,631,1,2,-9,0,0],[3.25,312,627,1.02,1,-7,0,0],
    [3.65,-710,780,1.1,-7,30,-1,3],[4.3,-600,1010,.6,2,10,0,0],[5,504,932,.5,-1,-7,1,0],[6,502,951,.48,-1,-7,1,0]],
  transactions: [
    [0,-45,905,.49,-4,-18,0,0],[1,-310,950,.62,-4,14,0,0],[2,1110,810,.8,-8,25,0,0],
    [3.2,1130,835,1.05,-6,14,0,0],[3.7,365,625,1,-7,9,-1,.4],[4.1,348,621,1.02,-4,7,0,0],
    [4.5,195,718,.81,-3,4,0,.3],[5,-27,818,.47,-3,-15,0,0],[6,-45,837,.45,-3,-15,0,0]],
  expense: [[0,-140,280,.48,4,-15,0,0],[1,-320,120,.56,4,10,0,0],[2,980,140,.56,-3,-12,0,0],[3,880,15,.7,2,-12,0,0],[4,336,-29,.68,3,-7,0,0],[4.55,195,175,.51,2,-10,0,0],[5,110,402,.45,4,-10,0,0],[6,95,401,.44,4,-10,0,0]],
  category: [[0,1000,590,.55,-3,-12,0,0],[1,970,1000,.65,4,-10,0,0],[2,810,991,.66,4,-10,0,0],[3,719,1140,.7,-3,-10,0,0],[4,950,1020,.7,-3,-10,0,0],[5,766,548,.5,-2,-9,0,0],[6,782,541,.48,-2,-9,0,0]],
};
