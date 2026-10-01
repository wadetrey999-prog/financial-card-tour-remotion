import React from 'react';
import {Composition} from 'remotion';
import {FinancialCardTour} from './FinancialCardTour';
import {config} from './config';
export const RemotionRoot:React.FC = () => <Composition id="FinancialCardTour" component={FinancialCardTour} width={config.video.width} height={config.video.height} fps={config.video.fps} durationInFrames={Math.round(config.video.seconds*config.video.fps)}/>;
