export interface labelProps {
  labelDivClass?: string;
  labelTextClass?: string;
  labelName?: number | string;
  children?: React.ReactNode;
  onClick?:React.MouseEventHandler<HTMLLabelElement>
}

export interface labelCardProps extends labelProps {
  labelCardDivClass?: string;
  labelCardTitleClass?: string;
  labelCardTitle?: number | string;
}
