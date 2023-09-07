import React, { ChangeEvent } from 'react';

export interface WrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  id?: number;
  category?: string;
  title?: string;
  subTitle?: string;
  status?: boolean;
  thumb: string;
}

export interface CardListProps {
  dataList: any[];
  category: string;
  status?: boolean;
}

export interface VideoProps {
  title: string;
  subTitle: string;
  artist: string;
  thumb: string;
  videoUrl?: string;
}

export interface VideoListProps {
  dataList: VideoProps[];
}

export interface EventStatusButtonProps {
	status: boolean;
}

export interface contentTextProps {
    text: string;
}

export interface ButtonProps {
	text: string;
	isSelect: boolean;
	value: string;
  onClick: (value : string) => void;
}

export interface TextProps {
  text: string;
  onClick?: (value: any) => void;
  onSubmit?: (value: any) => void;
}

export interface FileProps {
  files: [];
}

export interface readerProps {
  result: any;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface TextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export interface MapProps {
  lat?: number;
  lon?: number;
}

export interface ContentCardsProps {
  thumb: string;
  idx: number;
  dataList: string[];
}