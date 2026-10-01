import React from 'react';
import {AbsoluteFill} from 'remotion';
import {config} from './config';
export const Background:React.FC<{time:number}> = ({time}) => <AbsoluteFill style={{background:config.colors.background,overflow:'hidden'}}>
  <div className="background-glow" style={{transform:`translate(${Math.sin(time*.6)*35}px,${Math.cos(time*.4)*35}px) rotate(${time*2}deg)`}}/>
  <div className="background-depth"/>
  {[0,1,2].map(i=><div key={i} className="light-dash" style={{left:((i*310+time*100)%1000)-180,top:250+i*380-time*25,transform:`rotate(${28+i*8}deg)`,opacity:time<2.4?0.7:0}}/>)}
</AbsoluteFill>;
