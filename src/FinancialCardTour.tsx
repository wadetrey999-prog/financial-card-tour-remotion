import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {config} from './config';
import {Background} from './Background';
import {IncomeCard,InvoiceCard,TransactionsCard,ExpenseCard,CategoryCard} from './Cards';
import {MovingCard,paths} from './Motion';
import './style.css';

const Title:React.FC<{time:number,start:number,end:number,top:number,rotate:number,children:React.ReactNode,size?:number}> = ({time,start,end,top,rotate,children,size=54}) => <div className="scene-title" style={{top,fontSize:size,opacity:interpolate(time,[start,start+.14,end-.15,end],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),transform:`translateY(${interpolate(time,[start,start+.24],[16,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px) rotate(${rotate}deg)`}}>{children}</div>;

export const FinancialCardTour:React.FC = () => {
  const frame=useCurrentFrame();const {fps,width,height,durationInFrames}=useVideoConfig();
  const time=frame/fps*config.speed;
  const theme = {'--card':config.colors.card,'--ink':config.colors.ink,'--muted':config.colors.muted,'--lime':config.colors.lime,'--title':config.colors.title} as React.CSSProperties;
  return <AbsoluteFill style={{...theme,background:config.colors.background,fontFamily:config.font,overflow:'hidden'}}>
    <div style={{position:'absolute',width:720,height:1280,transform:`scale(${Math.min(width/720,height/1280)})`,transformOrigin:'top left'}}>
      <Background time={time}/>
      <MovingCard time={time} keys={paths.income} width={660} height={346}><IncomeCard/></MovingCard>
      <MovingCard time={time} keys={paths.invoice} width={660} height={636}><InvoiceCard/></MovingCard>
      <MovingCard time={time} keys={paths.transactions} width={660} height={548}><TransactionsCard/></MovingCard>
      <MovingCard time={time} keys={paths.expense} width={308} height={380}><ExpenseCard/></MovingCard>
      <MovingCard time={time} keys={paths.category} width={330} height={232}><CategoryCard/></MovingCard>
      <Title time={time} start={2.48} end={3.52} top={214} rotate={4} size={54}>{config.titles.invoice}</Title>
      <Title time={time} start={3.58} end={4.64} top={245} rotate={-8} size={47}>{config.titles.transactions}</Title>
      <Title time={time} start={4.72} end={durationInFrames/fps+1} top={565} rotate={0} size={54}>{config.titles.end.map(line=><React.Fragment key={line}>{line}<br/></React.Fragment>)}</Title>
    </div>
  </AbsoluteFill>;
};
