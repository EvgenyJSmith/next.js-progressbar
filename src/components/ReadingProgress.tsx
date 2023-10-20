'use client'

import { useReadingProgressBar } from '@/hooks/useReadingProgressBar';
import { Progress } from 'antd';

export default function ReadingProgress() {
    const complition = useReadingProgressBar();

    return(
        <div className='fixed w-full top=[53px]'>
        <Progress percent={complition} showInfo={false} strokeColor="#7b87f0" />
    </div>)
}